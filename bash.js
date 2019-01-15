function done(output){
  process.stdout.write(output);
  process.stdout.write('\nprompt >');
}


process.stdout.write('prompt > ');

// process.stdin.on('data', data => {
//   const cmd = data.toString().trim();

//   process.stdout.write('You typed: ' + cmd);
//   process.stdout.write('\nprompt > ');
// });

process.stdin.on('data', data => {
  const cmd = data.toString().trim();

  if (cmd === 'pwd') {
    let pwd = require('./pwd');
    done(pwd());
  } else if (cmd === 'ls') {
    let ls = require('./ls');
    done(ls());
  } else if (cmd.includes('cat')) {
    let cat = require('./cat');
    let path = cmd.slice(4);
    done(cat(path));
  } else if (cmd.includes('curl')) {
    let curl = require('./curl');
    let path = cmd.slice(5);
    curl(done, path);
  } else {
    let prompt = require('./prompt');
    done(prompt(cmd));
  }
});

