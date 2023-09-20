class Cache {
    constructor() {
        this.multimap = new Map();
        this.multimapHistory = [];
    }

    setCache(key, value, accessesLeft = 1) {
        this.multimap.set(key, { value, accessesLeft });
    }

    getCache(key) {
        if (!this.multimap.has(key)) {
            return null;
        }

        const entry = this.multimap.get(key);
        entry.accessesLeft--;

        this.multimapHistory.push(`Key: ${key}= {value = ${entry.value}, accessesLeft = ${entry.accessesLeft}}`);

        if (entry.accessesLeft === 0) {
            this.multimap.delete(key);
        }

        return { value: entry.value, accessesLeft: entry.accessesLeft };
    }

    getStats() {
        for (const record of this.multimapHistory) {
            console.log(record);
        }
        return this.multimapHistory;
    }
}

module.exports = Cache;
