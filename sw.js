// The build embeds URLs and content digests. A partially uploaded release
// cannot replace the last playable install.
const VERSION = '6045392.1127012206041';
const CACHE = 'billiards-' + VERSION;
const ASSETS = [["icons/apple-touch-icon.png","sha256-ZvbIm6aIr6w6JHVCOKvk7rNNTv5Ghqwc6v94k4MVySA="],["icons/icon-192.png","sha256-UjweGbrNjVIfnImpJD+0FAGIB0fbxWHwd5ttdXgJzAE="],["icons/icon-512.png","sha256-AJbGTfRNHVZ64O/7L2nl5zppyyflzBc6v6wIQS06C1g="],["icons/icon-maskable-512.png","sha256-OGCJ2wqQEOadqWe/H2xfXW7HaWCyE9OrIZtmRWJkg44="],["icons/icon.svg","sha256-5LmCNQGQT7ISAEOG28lCR/+iCh4c7eDwPusizK7/8GM="],["index.html","sha256-eFzsEk/2+ddg24sUjQMQhOV4G/C5PjbsLCdQcdjEwps="],["manifest.webmanifest","sha256-6Z4YpC4MmRwl7v2wESpxW4LBxQ8iKgp4T80aesSXwPc="],["sfx/ball1.wav","sha256-o+f84bvKcZDoNhOOsGCxzUnAlVtTNvC2wV+IzAUyJHk="],["sfx/ball2.wav","sha256-KUv8in5XmWBtB2kYTsZclyW0mFTZX5Mdz+Q0aN9fMgc="],["sfx/ball3.wav","sha256-6sMc3GsWO2uSMvNECMXCAKKQre8uhDfQOpaLZ4wdxsA="],["sfx/ball4.wav","sha256-I2PRHN6qzDZNCxZDiLue/gfbGfUID0+P8eTp3LklWbg="],["sfx/ball5.wav","sha256-vrZuLASGlWIi42mhdHl8E8+SPt2ixfqoLPhs3v3A+jw="],["sfx/ball6.wav","sha256-+06fhSQpxYOqf4LkMUcqP1xkPQGj+JvZ7gGqe1otXOI="],["sfx/chalk1.mp3","sha256-oq9RPDqos+7w8UOH9LmI8vRdAAjovoZTbdbyFwPVnvw="],["sfx/chalk2.mp3","sha256-ayYiXv39c4YoNfXvYtcAldUqU0m5nyepti/DCIkY2so="],["sfx/cue1.wav","sha256-5IiRG9Yj8jHND36YULZGpo0HrIU0N7gB5jiZHJ8qVT8="],["sfx/cue2.wav","sha256-0PRcj5Caayu+I6Jcp2OSiRZb9Q9RJBUdCcdNF7DnlRE="],["sfx/cue3.wav","sha256-Lq2+M3az4A2KYz//hd2M9dR3lOzf54e31bSvqhTR940="],["sfx/cue4.wav","sha256-MVYXiXkkV0KEP7LeuUwqoCG7WQBXd6fG2teb6M578IM="],["sfx/cushion1.wav","sha256-Mc24fVE7mjYWkkbWKHnDUhYvFTDWhTQbyEBo+NB2XVw="],["sfx/cushion2.wav","sha256-+Zo2hxMDkmuGOOVDI3Io3eXcGrwfQgvLv2zxVw8ftro="],["sfx/cushion3.wav","sha256-Y09DeU7qPmc6AoXJ6JjQ5C9Bx1xkuhTEKelTbIcQ6Ag="],["sfx/pocket1.wav","sha256-JFf76M+BdLrPu8gbWyneC7OHynpzUwTwyIqH+mlYhwY="],["sfx/rumble1.mp3","sha256-Reg/Ci3u3YhQGZn00THbisgMBDKITngrz0vaX2equ7I="],["src/ai.js","sha256-oswUV1KQWkNuVP2qRW0/DGQ2LBCCyP4nXnlBvrxxqqE="],["src/assist.js","sha256-rMwFamxd+aBA06VJDFEwqoUHn5suM5gaivZCZPKP/fc="],["src/audio.js","sha256-/HlRH5k2jPwN5FC9nuC7lvcIm5ewV8dy2ytWAcDHxRo="],["src/avatar.js","sha256-pBbyaTow2fC/hmLkgOu+ZHm9GWrZLnD7KcqQ4WGASzk="],["src/body.js","sha256-ia1WQJchMY9fbnypQRgfCUAqm4ox5/sd/em5WUcW5Dc="],["src/cloth.js","sha256-LSSEQJVqWKda0FWW04EMYTnUtGpyb/l4o3HM6Ur54rQ="],["src/cloud.js","sha256-doti3jYHRFqeLMu4v/k/JVsktfXVHArTensIu7u1zoQ="],["src/commentary.js","sha256-xfdZDzGk19rvxfkl28MZPcUHBwt6gxVZdGaFjsSJKyw="],["src/hands.js","sha256-vr1gFI4r8KSUgE5Wt1qg0b6MIaxNUdYPUNsmI7aHnoM="],["src/keyboard.js","sha256-u+GvomCCRJs/60wlS5s6jl2Y95nucvQhRScSZ/7q390="],["src/lobby.js","sha256-7U6h85B8ccga6m1ZB99mL2LJysWeHeIqA49F+heXpfI="],["src/main.js","sha256-0PX2XM+nuBPpdYSpvnoVhicJBi2y3TMNRke42zW8YqQ="],["src/match.js","sha256-WhGIRb3+fnZq8yH6QsOyPzg9x3wv/QDO6OEOQwf86Mk="],["src/names.js","sha256-OWZxUC9UhLR9wNEGG2mU84Zda6hPjkYWCyPoPR8BmsU="],["src/narrator.js","sha256-T4GzNRKDQpP2zg0eK1oDpTT2zHphUGea5qTwE44c8Ik="],["src/net.js","sha256-RhWCHcWCwAlBwAFzRnSVOAuqr2/mS8cHIbeFBZVG7x8="],["src/pace.js","sha256-KkyonoUxOEqaNWtED0TwoRHrUvjMeKWpdGS3z/TznP0="],["src/peer.js","sha256-A9Q1RT9r0ShICAJEDBOlhg6kZU9MkL0ct6s2mDlingI="],["src/physics.js","sha256-ysFF9GqMByYz0qq8tRx12o6kKEBj+F2pA2XG9zRIq80="],["src/profile.js","sha256-SCNeIlA2B01B20BMi+Y15pnqhz+6lgK1Ds6FsAK/mgI="],["src/pwa.js","sha256-1+VmefxHTzZUGMQpUPLJpjbvehFSjSDUzd5grB60HB0="],["src/render.js","sha256-Lm1+chYAZw4R3uIg2fFVrL9WVg5zhQS5cb2yBR9N51Y="],["src/room.js","sha256-LwMS6C6K6TExOo02nDrMFHh0wU7b6eBsYkO07CNKkmk="],["src/rules.js","sha256-GyGR5rAsz7IJ4RjD8hZDc1n1mM4V/Zc5gfqpMAxZWzA="],["src/shots.js","sha256-Qb2tiHu9+voTg4IDJpLDDJxePyQPTlxY5+FTxqx2fas="],["src/style.css","sha256-pFxiuGO7AaOIoZNwXmdXDlz4CFWgLuOutrqFuaxKk3Y="],["src/tables.js","sha256-B9/gplRfMccw117zCpIDhgNc767ebscByNWmFErdGWo="],["src/take.js","sha256-bGN5Wq5fTjKbAzsDx2X9eCZlrpOihHTMuuTgKZmhzqU="],["src/textures.js","sha256-hycTtcdXblDzbHlV/r9JwVIDK9Rh+3vedX/0YS8bvqQ="],["src/version.js","sha256-Vgr0YilUGvteR+7epWagY3VDglIiLdxPTGp8mYdFvGQ="],["src/video.js","sha256-ElJpb1+BrrZr01SbfVVmDnLA6GH3NLk+z/MROl3swqM="],["src/voice-worker.js","sha256-btZK4Pbx54PLqT5y4MVTGse17pafHnQhjjQXR0EHZF4="],["src/worker-client.js","sha256-7bpEdImH2Khrlkg/NUq8JxpWDfTbzD9BclP1jdPGg1U="],["src/worker.js","sha256-1wKSoVGJHERmx8GXypcRdAB2cwLJR4s4kxg7Bex1Bxk="],["vendor/hand/Hand_Nails_R.gltf","sha256-iObRYemX/7n4yY1WSWZxw4EcLpSrqo0VRwitUG202W4="],["vendor/three.module.min.js","sha256-CP11RdE9LH+2WraRUwqALa/v1jhZZQGFTyZ9D7E8Oec="]];
const scope = self.registration.scope;

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    const requests = ASSETS.map(([file, integrity]) =>
      new Request(new URL(file, scope), { cache: 'reload', integrity }));
    await cache.addAll(requests);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    await self.clients.claim();
    for (const key of await caches.keys()) {
      if (key.startsWith('billiards-') && key !== CACHE) await caches.delete(key);
    }
  })());
});

self.addEventListener('message', ({ data, source }) => {
  if (data === 'get-version') source?.postMessage({ type: 'billiards-version', version: VERSION });
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET' || !request.url.startsWith(scope) || !ASSETS.length) return;
  const url = new URL(request.url);
  const index = new URL('index.html', scope).href;
  const home = request.mode === 'navigate' && (url.pathname === new URL(scope).pathname || url.origin + url.pathname === index);
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const response = await cache.match(home ? index : request);
    return response || fetch(request);
  })());
});
