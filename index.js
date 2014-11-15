var master = require('child_process');
var os = require('os');

function Nestr(script, opt) {
    var opts = opt || {};
    this.script = script;
    this.workers = opts.workers || os.cpus().length;
    this.port = opts.startingPort || 3000;
    this.addrs = [];
}

Nestr.prototype.start = function () {
    console.log('[Nestr] starting ', this.script, ' on ', this.workers, ' workers');
    for (var i = 0; i < this.workers; i++) {
        var port = this.port + i;
        this._startWorker(port);
        this.addrs.push({
            host: '127.0.0.1',
            port: port
        })
    }
};

Nestr.prototype._startWorker= function(port){
    var that=this;
    var worker = master.fork(this.script, [port]);
    worker.on('exit',function(){
        console.log('[Nestr] restarting worker on port:',port);
        that._startWorker(port);
    });
};

module.exports = Nestr;