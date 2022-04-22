process.stdout.write('prompt > ');
// const pwd = require('./pwd');
// pwd();

// const ls = require('./ls');
// ls();
const cat = require('./cat');
cat();
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim().split(' ');
    const command = cmd[0];
    const fileName = cmd[1];
    module.exports.name = fileName;
    process.stdout.write('\nprompt > ');
})