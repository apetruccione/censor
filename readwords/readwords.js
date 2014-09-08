var censor = require("censorify_4382_petruccione");
console.log(censor.getCensoredWords());
console.log(censor.censor("Some very mad, sad, bad words."));
censor.addCensoredWord("gloomy");
console.log(censor.getCensoredWords());
console.log(censor.censor("A very gloomy day"));