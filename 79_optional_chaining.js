// 79_optional_chaining.js
// Optional chaining avoids errors when accessing deep properties

const data = { user: { profile: { name: 'Lee' } } };
console.log(data?.user?.profile?.name);
console.log(undefined?.prop); // undefined