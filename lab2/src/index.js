const Cache = require('./cache');

function demo() {
    const cache = new Cache();
    cache.setCache("password", "0091mou!#$", 1);
    console.log(cache.getCache("password"));
    cache.setCache("login", "Shireee", 2);
    console.log(cache.getCache("login"));
    cache.setCache("session", "expired at 23:00", 2);
    console.log(cache.getCache("session"));
    cache.getStats();
}

demo();