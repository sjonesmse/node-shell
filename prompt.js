function prompt(text){
  process.stdout.write('You typed: ' +  text);
  process.stdout.write('\nprompt >')
}

module.exports = prompt;
