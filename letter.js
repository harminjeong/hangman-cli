var words = require("./word.js");

function split(){
    
    var letterSplit = words[Math.floor(Math.random() * words.length)].split("");
      console.log(letterSplit);
  }
  split();

  module.exports = split;

  //wow