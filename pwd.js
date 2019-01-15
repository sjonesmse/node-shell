// process.stdin.on('data', data => {
//   const cmd = data.toString().trim();

//   if (cmd === 'pwd') {
//     process.stdout.write(process.cwd());
//   } else {
//     process.stdout.write('You typed: ' + cmd);
//   }

//   process.stdout.write('\nprompt > ');
// });


function pwd(){
  process.stdout.write(process.cwd())
  process.stdout.write('\nprompt >')
}

module.exports = pwd;
