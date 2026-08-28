import sharp from 'sharp';
import fs from 'node:fs';

const SRC = process.argv[2];
const OUT = process.argv[3];

const img = sharp(SRC);
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
const { width: W, height: H, channels: C } = info;

const lum = (i) => 0.2126*data[i] + 0.7152*data[i+1] + 0.0722*data[i+2];
let minX = W, minY = H, maxX = 0, maxY = 0;
let inkR = 0, inkG = 0, inkB = 0, inkN = 0, bgSum = 0, bgN = 0;
for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
  const i = (y*W + x)*C, L = lum(i);
  if (L < 140) {
    if (x < minX) minX = x; if (x > maxX) maxX = x;
    if (y < minY) minY = y; if (y > maxY) maxY = y;
    if (L < 110) { inkR += data[i]; inkG += data[i+1]; inkB += data[i+2]; inkN++; }
  } else if (L > 200) { bgSum += L; bgN++; }
}
const ink = [Math.round(inkR/inkN), Math.round(inkG/inkN), Math.round(inkB/inkN)];
const bgL = bgSum/bgN;
console.log(`zrodlo ${W}x${H} | bbox znaku: x ${minX}-${maxX}, y ${minY}-${maxY}`);
console.log(`kolor tuszu: #${ink.map(v=>v.toString(16).padStart(2,'0')).join('')} | tlo L=${bgL.toFixed(1)}`);

const side = Math.max(maxX-minX+1, maxY-minY+1);
const box = side + Math.round(side*0.06)*2;
const cx = Math.round((minX+maxX)/2), cy = Math.round((minY+maxY)/2);
const left = Math.max(0, cx - Math.round(box/2));
const top  = Math.max(0, cy - Math.round(box/2));
const size = Math.min(box, W-left, H-top);

const N = 760;
const crop = await sharp(SRC).extract({ left, top, width: size, height: size })
  .resize(N, N, { fit: 'fill' }).removeAlpha().raw().toBuffer();

const inkL = 0.2126*ink[0] + 0.7152*ink[1] + 0.0722*ink[2];
const out = Buffer.alloc(N*N*4);
for (let p = 0; p < N*N; p++) {
  const s = p*3;
  const L = 0.2126*crop[s] + 0.7152*crop[s+1] + 0.0722*crop[s+2];
  let a = Math.max(0, Math.min(1, (bgL - L)/(bgL - inkL)));
  a = Math.pow(a, 0.85);
  if (a < 0.13) a = 0; else a = Math.min(1, (a - 0.13) / 0.87 * 1.06);
  const d = p*4;
  out[d] = ink[0]; out[d+1] = ink[1]; out[d+2] = ink[2]; out[d+3] = Math.round(a*255);
}

await sharp(out, { raw: { width: N, height: N, channels: 4 } })
  .png({ compressionLevel: 9 }).toFile(OUT);
console.log('zapisano', OUT, fs.statSync(OUT).size, 'B');

const znak = await sharp(out, { raw: { width: N, height: N, channels: 4 } }).png().toBuffer();
await sharp({ create: { width: 256, height: 256, channels: 4, background: '#F6F2EB' } })
  .composite([{ input: await sharp(znak).resize(232, 232).toBuffer(), gravity: 'center' }])
  .png().toFile('public/favicon.png');
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#EFE8DE' } })
  .composite([{ input: await sharp(znak).resize(430, 430).toBuffer(), gravity: 'center' }])
  .jpeg({ quality: 88 }).toFile('public/og.jpg');
console.log('zapisano public/favicon.png i public/og.jpg');
