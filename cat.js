const fs = require('fs');

module.exports = function(name){
    fs.readFile(name,'utf8',(err, data) => {
        if (err) throw err;
        else {
            process.stdout.write(data);
        }
    });
}