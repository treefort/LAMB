var lamb 	= require('../lamb.js'),
	colors 	= require('colors');


console.log("\n\n\n*** " + "LAMB test: basic".bold + " ***\n\n");

var test_strings = [];
test_strings.push(
	[
	
	"ONE TWO THREE......IM GONNA KILL YOU   I AM DEFINITELY A GROUP!!   WHAT A STUPID CATS",
	"	::HUUUURGGEHH::#each cats::BLEAURGHHHCH::",
	"		::HUUUURGGEHH::> page/cats_list_item this::BLEAURGHHHCH::",
	"	::HUUUURGGEHH::/each::BLEAURGHHHCH::"
	
	].join('\n'));

test_strings.push(
	[
	
	"( * )<-- TOTALLY A CAT BUTTHOLE.",
	"MEOWWWW OOOOOOOOHHHHH LAZERS",
	"	IM IN UR CEILING	",
	"		I DUB THEE...LAMB TEST STAHHHP",
	"		WAIT...THIS ISNT YARN WTF? OMGLAZERS DOTHINGS.JS",
	"		MILKPOOTS I ATE YOUR STYLES.CSS IM NOT EVEN SORRY",
	"	MORE LIKE BODY COUNT AMIRITE?"
	
	].join('\n'));

test_strings.push(
	[
	
	"SQUARE THINGY      IM LORD CROP_CONTROLS",
	"	OM NOM NOM NOM NOM THROW SUM TEXT IN HIS FAEC  NAO!  YOU MUST BE CAT_NAME   IM KING CAT_NAME   CHECK OUT MAH GRAFFITI: Your cat's name",
	"	BEEP BOOP BOOP BEEP BEEP BEEP IM THE SELECT_FILE AND I AM TOTALLY A GREY_BUTTON!	Choose file... STAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHP",
	"	BEEP BEEP BEEP BOOP IM THE UPLOAD  AND I AM TOTALLY A ORANGE_BUTTON! 	Upload! DONT RUB MYBELLEH!",
	"	BEEP BEEP BOOP BEEP BOOP BEEP BOOP BEEP BOOP IM THE CANCEL AND I AM TOTALLY A RED_BUTTON! 	Cancel I WILL DESTROY YOU.",
	
	].join('\n'));

var test_num = 1;

while(test_strings.length){

	var str = test_strings.shift();

	lamb(str, function(err, data){
		console.log(["TEST #", test_num++, "\n"].join('').inverse);
		console.log(Array(90).join("-") + "\n\n");
		console.log("LAMB markup:".bold + "\n");
		console.log(str.cyan);
		console.log("\nOutput: ".bold + "\n");
		console.log(data);
		console.log(Array(90).join("-") + "\n\n");
	});
	
}

