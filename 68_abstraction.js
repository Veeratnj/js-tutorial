// 68_abstraction.js
// Abstraction: expose simple API while hiding details

class DB {
  constructor() { this._conn = 'connection'; }
  query(sql) { return `running: ${sql}`; }
}

const db = new DB();
console.log(db.query('SELECT * FROM users'));