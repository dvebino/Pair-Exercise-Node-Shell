const fs = require('fs');
const name = require('./bash');

module.exports = function(){
    fs.readFile(name,'utf8',(err, data) => {
        if (err) throw err;
        else {
            process.stdout.write(data);
        }
    });
}
