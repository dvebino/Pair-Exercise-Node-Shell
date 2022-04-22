process.stdout.write('prompt > ');

const pwd = require('./pwd');
pwd();

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    // process.stdout.write('You typed: ' + cmd);
    
    process.stdout.write('\nprompt > ');
})