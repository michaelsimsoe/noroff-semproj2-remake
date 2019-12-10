self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('The Board Game of Thrones').then(function(cache) {
      return cache.addAll([
        '',
        'index.html',
        'game.html',
        'finale.html',
        'css/main.css',
        'js/character_select.js',
        'js/game.js',
        'js/finale.js',
        'js/char_select/character.js',
        'js/char_select/fetchResources.js',
        'js/char_select/house.js',
        'js/char_select/houses.js',
        'js/game/game_tiles.js',
        'js/game/trap.js',
        'js/util/alert.js',
        'js/util/getChar.js',
        'js/util/helper.js',
        'js/util/navigation.js',
        'assets/misc/female.svg',
        'assets/misc/finale_throne.svg',
        'assets/misc/logo.svg',
        'assets/misc/male.svg',
        'assets/sigils/house_baratheon_of_storms_end_small.svg',
        'assets/sigils/house_baratheon_of_storms_end.svg',
        'assets/sigils/house_greyjoy_of_pyke_small.svg',
        'assets/sigils/house_greyjoy_of_pyke.svg',
        'assets/sigils/house_lannister_of_casterly_rock_small.svg',
        'assets/sigils/house_lannister_of_casterly_rock.svg',
        'assets/sigils/house_stark_of_winterfell_small.svg',
        'assets/sigils/house_stark_of_winterfell.svg',
        'assets/sigils/house_targaryen_of_kings_landing_small.svg',
        'assets/sigils/house_targaryen_of_kings_landing.svg',
        'favicon.ico',
        'https://www.anapioficeandfire.com/api/houses?name=House%20Stark%20of%20Winterfell',
        'https://www.anapioficeandfire.com/api/houses?name=House%20Baratheon%20of%20Storm%27s%20End',
        'https://www.anapioficeandfire.com/api/houses?name=House%20Stark%20of%20Winterfell',
        'https://www.anapioficeandfire.com/api/houses?name=House%20Greyjoy%20of%20Pyke',
        'https://www.anapioficeandfire.com/api/houses?name=House%20Baratheon%20of%20Storm%27s%20End',
        'https://www.anapioficeandfire.com/api/houses?name=House%20Greyjoy%20of%20Pyke',
        'https://www.anapioficeandfire.com/api/houses?name=House%20Lannister%20of%20Casterly%20Rock',
        'https://www.anapioficeandfire.com/api/houses?name=House%20Targaryen%20of%20King%27s%20Landing',
        'https://www.anapioficeandfire.com/api/houses?name=House%20Lannister%20of%20Casterly%20Rock',
        'https://www.anapioficeandfire.com/api/houses?name=House%20Targaryen%20of%20King%27s%20Landing'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log(event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
