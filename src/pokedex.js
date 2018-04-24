let Pokedex = require('pokedex-promise-v2');
let options = {
  protocol: 'https',
  hostName: 'localhost:8080',
  versionPath: '/api/v2/',
  cacheLimit: 100 * 1000, // 100s
  timeout: 5 * 1000 // 5s
}
let pokedex2 = new Pokedex(options);

export { pokedex2 };
