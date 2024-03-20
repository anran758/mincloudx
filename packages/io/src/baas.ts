export function getBaaS() {
  if (global?.BaaS) {
    return global?.BaaS;
  }

  throw new Error('BaaS is not initialized.');
}

export function getBaseIo(BaaS = getBaaS()) {
  return {
    get query() {
      return new BaaS.Query();
    },

    get user() {
      return new BaaS.User();
    },

    get file() {
      return new BaaS.File();
    },

    table(tableName: string) {
      return new BaaS.TableObject(tableName);
    },

    getQuery(data?: Record<any, any>) {
      const query = new BaaS.Query();
      if (!data) return query;

      // Provides a completely equivalent way to generate `Query` from passed object letters
      Object.entries(data).forEach(([key, value]) => {
        query.compare(key, '=', value);
      });

      return query;
    },
  };
}
