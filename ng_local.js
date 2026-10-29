// Browser side of lib/core/local_web.dart: recordings kept in IndexedDB,
// sound decoded with Web Audio, notes found in a Web Worker
// (engine_worker.js, compiled from packages/ng_engine/web/engine_worker.dart).
(() => {
  const RATE = 22050;
  let dbp;
  const db = () => (dbp ??= new Promise((ok, fail) => {
    const r = indexedDB.open('notagetir', 1);
    r.onupgradeneeded = () => r.result.createObjectStore('blobs');
    r.onsuccess = () => ok(r.result);
    r.onerror = () => fail(r.error);
  }));
  const tx = async (mode, fn) => {
    const t = (await db()).transaction('blobs', mode);
    const req = fn(t.objectStore('blobs'));
    return new Promise((ok, fail) => {
      t.oncomplete = () => ok(req.result);
      t.onerror = () => fail(t.error);
    });
  };

  window.ngLocal = {
    put: (key, bytes) => tx('readwrite', (s) => s.put(new Blob([bytes]), key)).then(() => null),
    get: async (key) => {
      const b = await tx('readonly', (s) => s.get(key));
      return b ? new Uint8Array(await b.arrayBuffer()) : null;
    },
    remove: (key) => tx('readwrite', (s) => s.delete(key)).then(() => null),
    url: async (key, type) => {
      const b = await tx('readonly', (s) => s.get(key));
      return b ? URL.createObjectURL(new Blob([b], { type })) : null;
    },

    // Any audio/video file → mono float32 at 22050 Hz
    decode: async (bytes) => {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      const ctx = new Ctx();
      try {
        const buf = await new Promise((ok, fail) =>
          ctx.decodeAudioData(bytes.slice().buffer, ok, fail));
        const off = new OfflineAudioContext(1, Math.max(1, Math.ceil(buf.duration * RATE)), RATE);
        const src = off.createBufferSource();
        src.buffer = buf;
        src.connect(off.destination);
        src.start();
        return (await off.startRendering()).getChannelData(0);
      } finally {
        ctx.close();
      }
    },

    transcribe: (pcm, metronome) => new Promise((ok, fail) => {
      const w = new Worker('engine_worker.js');
      w.onmessage = (e) => {
        w.terminate();
        e.data.error ? fail(new Error(e.data.error)) : ok(e.data.result);
      };
      w.onerror = (e) => {
        w.terminate();
        fail(new Error(e.message || 'engine'));
      };
      const copy = new Float32Array(pcm);
      w.postMessage({ pcm: copy, metronome }, [copy.buffer]);
    }),
  };
})();
