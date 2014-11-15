var port = process.argv[2]; //AFIAK elements 0 and 1 are already populated with env info

setInterval(function(){
    console.log('Worker on Port:',port);
},3000);
