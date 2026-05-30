// 69_static_members.js
// Static class members belong to the class, not instances

class Util {
  static sum(a, b) { return a + b; }
}

console.log('Util.sum =', Util.sum(2, 3));