'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "191a2ca95261e3e213b83420e340f7b8",
"index.html": "ac0c751dc59734fc92cbc94d618f21da",
"/": "ac0c751dc59734fc92cbc94d618f21da",
"main.dart.js": "5e59bd46c42143b53c41d6cdb6bb90ba",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "cbbb04276836774a124086679c69ab25",
"icons/Icon-192.png": "48ddf018622e6bdf00d0f01a1ec9a5f3",
"icons/Icon-maskable-192.png": "48ddf018622e6bdf00d0f01a1ec9a5f3",
"icons/Icon-maskable-512.png": "39cd50fef02ce87f08a0f8b7a9c9a2d7",
"icons/Icon-512.png": "39cd50fef02ce87f08a0f8b7a9c9a2d7",
"manifest.json": "403b0c62076bf8d1bd056f5e1f5c3efe",
"assets/AssetManifest.json": "c95af0bf79c0707e5660a65944409d73",
"assets/NOTICES": "ad0349c8d32ced72c9924ab987380cad",
"assets/FontManifest.json": "8f0b5c5f7afab9dd15c860d049260e4b",
"assets/AssetManifest.bin.json": "f05a19eb092d16787b40cf0f61efb2f5",
"assets/packages/nes_ui/google_fonts/OFL.txt": "5096248a0ad125929b038a264f57b570",
"assets/packages/nes_ui/google_fonts/PressStart2P-Regular.ttf": "f98cd910425bf727bd54ce767a9b6884",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/orca_game/fonts/karma.suture-regular.otf": "42deb685c89ea878f76fba30a9e12846",
"assets/packages/orca_game/fonts/karma.future-regular.otf": "cfaa610f3f452ba8e20eb360178f465d",
"assets/packages/orca_game/assets/sectors/sector-00.json": "20e5d4d03011324433bd35094abe647b",
"assets/packages/orca_game/assets/sectors/sector-01.json": "75a062e542d837bb51a1315fb024abfb",
"assets/packages/orca_game/assets/sectors/sector-04.json": "df73bfd439d4544e60810f5d9c4258e1",
"assets/packages/orca_game/assets/sectors/sector-02.json": "39e7b953968148b0dbd3f97abc596c6c",
"assets/packages/orca_game/assets/sectors/sector-03.json": "3c83717c4bffe5fb2f1ca119fad223be",
"assets/packages/orca_game/assets/images/menu_button.png": "1f580d1d3c36e2871078a7d49e75fe54",
"assets/packages/orca_game/assets/images/exit_button.png": "83b21551f7ee5dfd92786c3d0e1d5ade",
"assets/packages/orca_game/assets/images/start_button.png": "74778a660b369d02439ca27d5277759e",
"assets/packages/orca_game/assets/images/sector_target_completed.png": "b3ca9a6c34fcc4bcc149375e464fa26a",
"assets/packages/orca_game/assets/images/waypoint.png": "04e3d8d683ca3d8d11eed230ac92f045",
"assets/packages/orca_game/assets/images/waypoint_inactive.png": "e90990d6212d3ac440c6447932c9f91e",
"assets/packages/orca_game/assets/images/battery_0.png": "a52f27b55d5b6dec745d88a8711eca91",
"assets/packages/orca_game/assets/images/previous_button.png": "b0ce2c6d454a463d108ca9c0ab5eabb7",
"assets/packages/orca_game/assets/images/battery_1.png": "aff162808b7b6a72feba649d4df02565",
"assets/packages/orca_game/assets/images/dialog_background.png": "ecf028897a7a431561b04dffef574e66",
"assets/packages/orca_game/assets/images/battery_3.png": "dfe11f5c1d4a482baaf2f84ad614580f",
"assets/packages/orca_game/assets/images/recycle.png": "92c1d4da335807689ea5009979b2f2b6",
"assets/packages/orca_game/assets/images/battery_2.png": "d9100a42198443ba05e94f17223efdf6",
"assets/packages/orca_game/assets/images/battery_6.png": "a266a4baede0f4359bfe79d588f7a29c",
"assets/packages/orca_game/assets/images/battery_5.png": "5279090ee6055dd30d971fb5e4d9a09d",
"assets/packages/orca_game/assets/images/battery_4.png": "b5e4f2cbfc103eb3aa4c78476de95392",
"assets/packages/orca_game/assets/images/audio_toggle.png": "664d88951e23fb2c17296b0bec0e81bc",
"assets/packages/orca_game/assets/images/replay_button.png": "38902135356a55fe2cd67e58b75e66c2",
"assets/packages/orca_game/assets/images/next_button.png": "fad3ae437abe5164be4b1a0696f8e07d",
"assets/packages/orca_game/assets/images/tileset_old.png": "466a65dd74b217b1eb869e4603bcdb5e",
"assets/packages/orca_game/assets/images/sector_target.png": "cd4ab6edd862132452a11353d04c68a8",
"assets/packages/orca_game/assets/images/tutorial_button.png": "2cd22aa6339f6274ada644cb0fe75817",
"assets/packages/orca_game/assets/images/about_button.png": "9752edc1ce211cde10ea8e97b0b0d383",
"assets/packages/orca_game/assets/images/back_button.png": "5c0d4e593e895158816839320dc3ac6d",
"assets/packages/orca_game/assets/images/recycle_outline.png": "fdaa0569c727c0f6ca7a9df8afe5e907",
"assets/packages/orca_game/assets/images/tileset.png": "7af3e1df56bccb9d7fee5ec5fe604b28",
"assets/packages/orca_game/assets/images/anchor.png": "81f60502fc12e176896590617e6fbc90",
"assets/packages/orca_game/assets/images/forward_button.png": "eae74ecf40dcf616aa072c09e96cab72",
"assets/packages/orca_game/assets/images/bezel.png": "1e8b50e334cead775e4f74de24cc4c8e",
"assets/packages/orca_game/assets/images/undo_button.png": "163b8dab334b7d9617556c3d8a1d3494",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "42dfae388e7e2b50c9ed2c5d09bf4cb3",
"assets/fonts/karma.suture-regular.otf": "42deb685c89ea878f76fba30a9e12846",
"assets/fonts/karma.future-regular.otf": "cfaa610f3f452ba8e20eb360178f465d",
"assets/fonts/MaterialIcons-Regular.otf": "00d807a0a3e698d8f2b4f2b1ecb71e2d",
"assets/assets/music/free_run.mp3": "c700cf7861e33436a916cdf7e5da4e5b",
"assets/assets/music/background_music_1.mp3": "bab89d274b9f7211c39bc6ea94f4f828",
"assets/assets/music/CREDITS.TXT": "664b159f17146e56808c4e23d7603f6e",
"assets/assets/music/bit_forrest.mp3": "f330991a5bd6973c5d1167619319abd0",
"assets/assets/music/tropical_fantasy.mp3": "44bdafbd3982d2ba451f225294f56dff",
"assets/assets/images/scenery/cliffs.png": "d139844482c5e70dfe9ce93ac652c132",
"assets/assets/images/scenery/clouds.png": "e0dfcc6f83c9e30c3e3594b2595d545e",
"assets/assets/images/scenery/background.png": "c61d91d268b88b395610c09de1595feb",
"assets/assets/images/scenery/ground.png": "ef0f0c2752ccc83faac10852233e3407",
"assets/assets/images/scenery/trees.png": "7a11e6940b6588d3835dfffb8945aa57",
"assets/assets/images/banner.png": "32f20ea98f8534fb377696aed94f11ea",
"assets/assets/images/README.md": "542268c3df538d0ff84c881a2ca8019b",
"assets/assets/images/ember.png": "3027f5f0b80b46ee1ae2463f2ab3d1ce",
"assets/assets/images/dash/dash_running.png": "1502bd7518a9f338081c485982882a57",
"assets/assets/images/dash/dash_jumping.png": "79cc6c974eb4340c8b0c4a942918077f",
"assets/assets/images/dash/dash_falling.png": "afea749d618fe0ee38f191775eede965",
"assets/assets/images/dash/dash_still.png": "37401c44652077551aa263afe26b8ace",
"assets/assets/images/dash/dash_spritesheet.png": "b19986a23e098d656d58b78a6f04c7bb",
"assets/assets/images/enemies/flying_enemy.png": "d8e5aec679c548a3288c5142908f14a8",
"assets/assets/images/enemies/obstacles.png": "c762c55339770aa3508b28aae1469902",
"assets/assets/sfx/double_jump1.mp3": "58633df43115de841cf9235fccd64133",
"assets/assets/sfx/jump1.mp3": "247686373bffc27c3962702465614ea8",
"assets/assets/sfx/click3.mp3": "23f7ef1589277fc59d0b297db8d0297f",
"assets/assets/sfx/hit2.mp3": "19e99975f122b67cb5e17bb5e04818da",
"assets/assets/sfx/README.md": "c2318c37838f1811dd8a00d1bd6220a8",
"assets/assets/sfx/score1.mp3": "f51ae86826ee34f92514fb8e4b027edc",
"assets/assets/sfx/click2.mp3": "e7c23ca3c1bd7c9c3285c9e60f27504c",
"assets/assets/sfx/damage1.mp3": "e73bde6e93a3754205a6960f994acf91",
"assets/assets/sfx/hit1.mp3": "52f15e8def2750b4220796d7dd749e18",
"assets/assets/sfx/score2.mp3": "f9494ae1fe1a9b78563b386acca66c2c",
"assets/assets/sfx/click1.mp3": "10dfe538c54ddca1d967034637a37cbb",
"assets/assets/sfx/damage2.mp3": "3ae6d56c2fdff524875df5c956f62012",
"assets/assets/sfx/click4.mp3": "fc48c687051776935ee27782a6ee5648",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
