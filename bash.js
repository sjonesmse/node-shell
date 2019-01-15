process.stdout.write('prompt > ');

// process.stdin.on('data', data => {
//   const cmd = data.toString().trim();

//   process.stdout.write('You typed: ' + cmd);
//   process.stdout.write('\nprompt > ');
// });



process.stdin.on('data', data => {
  const cmd = data.toString().trim();

  if (cmd === 'pwd') {
    let pwd = require('./pwd')
    pwd();
  }
  else if (cmd === 'ls'){
    let ls = require('./ls')
    ls();
  }
  else if(cmd.includes('cat')){
    let cat = require('./cat')
    let path = cmd.slice(4)
    cat(path);
  }
  else {
    let prompt = require('./prompt')
    prompt(cmd);
  }
});
