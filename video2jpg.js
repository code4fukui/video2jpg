import { dir2array } from "https://js.sabae.cc/dir2array.js";

const fns = await dir2array("./");
let n = 0;
for (const fn of fns) {
  const fn0 = fn.toLowerCase();
  if (fn0.endsWith(".mov") || fn0.endsWith(".mp4")) {
    console.log(fn);
    const p = Deno.run({ cmd: ["ffmpeg", "-r", "2", "-qmin", "1", "-q", "1", "-f", "image2", fn + "-%06d.jpg", "-i", fn] });
    await p.status();
  }
}
