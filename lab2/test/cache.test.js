const Cache = require('../src/cache.js');

describe('Cache', () => {
    let cache;

    beforeEach(() => {
        cache = new Cache();
    });

    afterEach(() => {
        cache = null;
    });
// setCache()
    test('setCache method should set a value in the cache', () => {
        cache.setCache('key1', 'value1', 2);
        const result = cache.getCache('key1');
        expect(result).toEqual({ value: 'value1', accessesLeft: 1 });
    });
// getCache()
    test('getCache method should return null for non-existent key', () => {
        const result = cache.getCache('nonExistentKey');
        expect(result).toBeNull();
    });
// getCache()
    test('getCache method should return null when accessesLeft reaches 0', () => {
        cache.setCache('key2', 'value2', 1);
        cache.getCache('key2');
        const result = cache.getCache('key2');
        expect(result).toBeNull();
    });
// getStats()
    test('getStats method should return an array of cache access history', () => {
        cache.setCache('key3', 'value3', 2);
        cache.getCache('key3');
        const stats = cache.getStats();
        expect(stats).toHaveLength(1);
    });
// getStats()
    test('getStats method should return an empty array when no cache access history', () => {
        const stats = cache.getStats();
        expect(stats).toHaveLength(0);
    });

});