// 54_call_stack.js
// Shows nested calls on the call stack

function a() { b(); }
function b() { c(); }
function c() { console.log('innermost'); }

a();

// Call stack: a -> b -> c -> console.log