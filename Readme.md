nestr
=======
`nestr` is a wrapper arround the child process fork option in nodejs in order to take advantage of multicore environments when running web apps.

#### Usage

```javascript
var Nestr= require('../');
var nestr = new Nestr('worker.js');
nestr.start();
console.log(nestr.addrs);
```
the addrs array will contain the worker process addresses that can be used either with nodejitsu's node-http-proxy haProxy, nginx or any kind of proxy flavor that you might like

### OPTS

`startingPort` default 3000 
`workers` default the number of threads that your environment has obtained by calling os.cpus().length

### Licence

(The MIT License)

Copyright (c) 2009-2014 Vali Malinoiu <0x4139@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

