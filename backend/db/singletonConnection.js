const db = require("oracledb");
const connections = require("./connection");

module.exports = {
  async Singleton() {
    async function createInstance() {
      let object = await db.getConnection(connections.owner);
      return object;
    }
    if (!global.instance) {
      global.instance = createInstance();
    }

    return global.instance;
  },
};
