export class Repository {
  constructor(storageEngine, database) {
    this.db = storageEngine.get(database);
  }

  saveOn(name, record) {
    this.db.get(name).put(record);
  }

  getData(name) {
    return this.db.get(name);
  }
}
