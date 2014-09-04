var censor = require("censorify");
console.log(censor.getCensoredWords());
console.log(censor.censor("Some very mad, sad, bad words."));
censor.addCensoredWord("gloomy");
console.log(censor.getCensoredWords());
console.log(censor.censor("A very gloomy day"));