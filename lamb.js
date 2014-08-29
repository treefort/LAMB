//************************************************************
// 															//
// 				LAMB: LOOK AT MAH BULLHOLE					//
// 		 ~ A markup language for cat enthusiasts ~			//
// 															//
//		usage 1: 											//
// 				html = lamb([lamb markup]);					//
// 															//
//		usage 2: 											//
// 				var lscript = new lamb([lamb markup])		//
// 				lscript.on('done', function(html){});		//
// 				lscript.compile();							//
// 															//
//**********************************************************

var EventEmitter 	= require('events').EventEmitter,
	fs 				= require('fs'),
	util 			= require('util'),
	Tags 			= require('./lib/tag.js'),
	TagFragments 	= require('./lib/tagfragment.js');

var lamb = function(script, callback){

	var scope = !(this instanceof lamb) ? new lamb() : this;
	scope.script = script; 
	scope.callback = callback;
	scope.indent = 0;
	scope.closers = [];
	scope.compiled_markup = "";
	scope.__express = lamb.__express;
	scope.compile = lamb.compile;

	if (!(this instanceof lamb) && script != undefined && callback != undefined) {
		// someone used lamb("stuff to compile", callback)... compile and return
		var tmp = new lamb();
		tmp.compile(script, callback);
	}

	return scope;

}

lamb.__express = function(path, options, callback) {

	var scope = !(this instanceof lamb) ? new lamb() : this;
	var options = null; // you get no options with cats

	fs.readFile(path, function(err, data){
		if (err){
			callback(err, '');
		} else {
			scope.compile(data.toString(), function(err, data){
				callback(err, data);
			});
		}
	});
	
}

lamb.compile = function(script, callback) {

	var err = null;

	var scope = !(this instanceof lamb) ? new lamb() : this;
	script = script || scope.script;
	callback = callback || scope.callback;
	if (script == undefined || script.replace(/\s/g, '') == "") {
		err = new Error("No LAMB markup specified");
		callback(err, '');
		return;
	}
	scope.callback = callback;
	scope.lines = script.split('\n');

	for (var ln = 0; ln < scope.lines.length; ln++){
		processLine(scope.lines[ln], scope);
	}

	scope.indent = 0;
	dumpClosers(scope);

	callback(err, scope.compiled_markup);
	scope.emit('done', scope.compiled_markup);
}

lamb.Tags = function(){
	return Tags;
}

lamb.TagFragments = function(){
	return TagFragments;
}
	
// process lamb markup line by line
var processLine = function(line, scope){

	var _self = scope;

	if (line.replace(/\s/g, '') != ""){
		// this line isn't blank
		// get indent level
		
		processIndent(line, scope);

		for (var i=0; i<Tags.length; i++){
			while (Tags[i].test(line)){
				
				Tags[i].lastIndex = 0;

				// build out tag fragments
				var markup = {};
				markup.original = Tags[i].getFullTagMarkup(line);
				markup.fragments = processFragments(markup, Tags[i]);
				markup.tag_output = Tags[i].output;

				// for debugging:
				// console.log(markup);
				
				if (Tags[i].name == 'close tag'){
					markup.tag_output = scope.closers.length?scope.closers.pop().tag:"\n";
				} else {
					for (var prop in markup.fragments){
							markup.tag_output = markup.tag_output.replace(prop, markup.fragments[prop]);
					}
				}
			
				line = line.replace(markup.original, markup.tag_output);

				if (Tags[i].closer != undefined){
					scope.closers.push(
						{
							level: scope.indent,
							tag: Tags[i].closer
						});
				}
			}
		}
		scope.compiled_markup += line + '\n';
	}
};

// tests current markup for any matching tag fragments (attributes)
var processFragments = function(markup, tag){
	var frags = {};
	var reqFragments = tag.requiredFragments();
	for (var q=0; q<reqFragments.length; q++){
		for (var z=0; z<reqFragments[q].patterns.length; z++){
			reqFragments[q].patterns[z].lastIndex = 0;
			frags[reqFragments[q].handle] = frags[reqFragments[q].handle] || '';
			if (reqFragments[q].patterns[z].test(markup.original)){
				reqFragments[q].patterns[z].lastIndex = 0;
				var m = reqFragments[q].patterns[z].exec(markup.original);
				if (m != null){
					frags[reqFragments[q].handle] = reqFragments[q].apply((m[1] || '').toLowerCase());
				} 
			}
		}
	}
	return frags;
};

// set indent level and dump closing tags accordingly
var processIndent = function(line, scope){
	var oldIndent = scope.indent;
	var indx = 0;
	while(line[indx++] == '\t'){}
	scope.indent = indx-1;
	dumpClosers(scope);
};

// dump any open tags down to current indent level
var dumpClosers = function(scope){

	for (var i=scope.closers.length-1; i>=0; i--){
		if (scope.closers[i].level >= scope.indent){
			var closing_tag = scope.closers.pop();
			scope.compiled_markup += Array(closing_tag.level+1).join("\t") + closing_tag.tag + '\n';
		}
	}
};

util.inherits(lamb, EventEmitter);

module.exports = lamb;