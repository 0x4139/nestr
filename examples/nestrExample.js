var Nestr= require('../');

var nestr = new Nestr('worker.js');

nestr.start();

console.log(nestr.addrs);