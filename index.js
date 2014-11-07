var master = require('child_process');
var os 	   = require('os');

function nestr (script,opt) {
	var opts=opt || {};
	this.script=script;
	this.workers = opts.workers || os.cpus().length;
	this.port = opts.startingPort || 3000;
	this.addrs=[];
}

nestr.prototype.start = function() {
	console.log('Starting ',this.script,' on ',this.workers,' workers');
	for (var i = 0; i < this.workers; i++) {
		var port = this.port+i;
		master.fork(this.script,[port]);
		this.addrs.push({
			host:'127.0.0.1',
			port:port
		})
	}
};

module.exports = nestr