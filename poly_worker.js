// AI chord finder in a Web Worker (see web_poly/entry.js).
// In: {pcm: Float32Array}. Out: {progress: 0..1}…, then {result: JSON} or {error}.
importScripts('ng_poly.js');
onmessage = async (e) => {
  try {
    const notes = await ngPoly(e.data.pcm, (p) => postMessage({ progress: p }), 'bp/model.json');
    postMessage({ result: JSON.stringify(notes) });
  } catch (err) {
    postMessage({ error: String(err) });
  }
};
