// 70_private_fields.js
// Private fields using # syntax (ES2020+)

class Secret {
  #value;
  constructor(v) { this.#value = v; }
  reveal() { return this.#value; }
}

const s = new Secret('shh');
console.log(s.reveal());
// console.log(s.#value); // SyntaxError if attempted