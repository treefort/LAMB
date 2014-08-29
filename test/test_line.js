var lamb 	= require('../lamb.js'),
	colors 	= require('colors');


console.log("\n\n\n*** " + "LAMB test: line".bold + " ***\n\n");

var str = process.argv.slice(2).join(' ') + '\n';

lamb(str, function(err, data){
	console.log(Array(90).join("-") + "\n\n");
	console.log("LAMB markup:".bold + "\n");
	console.log(str.cyan);
	console.log("\nOutput: ".bold + "\n");
	console.log(data);
	console.log(Array(90).join("-") + "\n\n");
});
