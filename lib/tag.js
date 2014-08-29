var TagFragments = require("./tagfragment.js");

// structure for single lamb tag
Tag = function(name, patterns, output, closer){
	this.name = name;
	this.patterns = patterns;
	this.output = output;
	this.closer = closer;
}

// tests a line of markup for instances of tag
Tag.prototype.test = function(line){

	for (var i=0; i<this.patterns.length; i++){
		if (this.patterns[i].test(line)) return true;
	}
	return false;
}

Tag.prototype.requiredFragments = function(){

	var frags = [];
	for (var i=0; i<TagFragments.length; i++){
		if(this.output.indexOf(TagFragments[i].handle) != -1){
			frags.push(TagFragments[i]);
		}
	}	
	return frags;
}

// returns all markup relevant to the tag
Tag.prototype.getFullTagMarkup = function(line){

	for (var i=0; i<this.patterns.length; i++){
		this.patterns[i].lastIndex = 0;
		var m = this.patterns[i].exec(line);
		if (m != null){
			var match_idx = m.index + m[0].length;
			var term = m.input.indexOf("\t",match_idx);
			term = term===-1?m.input.length:term;
			if (this.requiredFragments().length) {
				return line.substring(m.index, term+1);
			} else {
				return line.substring(m.index, match_idx);
			}
		}
	}
}

var Tags = [
				new Tag(  // html
						'html',
						[
							/(?:MEOWWWW)/ig
						],
						"<html$class>",
						"</html>"
						),

				new Tag(  // head
						'head',
						[
							/(?:IM\s*IN\s*UR\s*CEILING)/ig,
							/(?:SCRATCHING\s*POST)/ig
						],
						"<head>",
						"</head>"
						),

				new Tag(  // title
						'title',
						[
							/(?:I\s+DUB\s+THEE\.\.\.)/ig
						],
						"<title>",
						'</title>'
						),

				new Tag(  // body
						'body',
						[
							/(?:MORE\s*LIKE\s*BODY\s*COUNT\s*AMIRITE\?)/ig,
							/(?:WUNDERLAND)/ig
						],
						"<body$id$class>",
						"</body>"
						),

				new Tag(  // div
						'div',
						[
							/(?:IF\s*I\s*FITS\s*I\s*SITS)/ig,
							/(?:THIS\s*IS\s*MAH\s*BOX)/ig,
							/(?:SQUARE\s+THINGY)/ig,
							/(?:DOVE\!\@\#\$)/ig
						],
						"<div$id$class>",
						"</div>"
						),

				new Tag(  // form
						'form',
						[
							/(?:MAKIN\s*DEALZ\s*WITH\s*BUSINESSCAT\.JPG)/ig,
							/(?:FARM(?:M*))/ig
						],
						"<form$id$class$method$action>",
						"</form>"
						),

				new Tag(  // link
						'link',
						[
							/(?:IM\s*SO\s*FLY)/ig,
							/(?:MILKPOOTS)/ig
						],
						"<link type='text/css' rel='stylesheet'$href />"
						),

				new Tag(  // script
						'script',
						[
							/(?:DOCUMENTZ)/ig,
							/(?:WAIT\.\.\.THIS\s*ISNT\s*YARN\s*WTF\?)/ig
						],
						"<script $src type='text/javascript'></script>"
						),

				new Tag(  // inline script
						'script (inline)',
						[
							/(?:POOOOOPT)/ig,
							/(?:WE\s+LEIK\s+TO\s+PARTY\.)/ig
						],
						"<script>",
						"</script>"
						),

				new Tag(  // img
						'img',
						[
							/(?:CHEEEESEEEE)/ig,
							/(?:I\s*DREW\s*A\s*PICTURE\s*FOR\s*YOU)/ig,
							/(?:SQUARE\s*VOMIT)/ig
						],
						"<img$id$class $src />"
						),

				new Tag(  // lamb
						'lamb',
						[
							/(?:IM\s*A\s*CAT\.\s*LOOK\s*AT\s*MY\s*BUTTHOLE\.)/ig,
							/(?:\( \* \)\<\-\-\s*TOTALLY\s*A\s*CAT\s*BUTTHOLE\.)/ig
						],
						"<!DOCTYPE HTML>"
						),

				new Tag(  // span
						'span',
						[
							/(?:(SPOOOOON\!\!))/ig
						],
						"<span$id$class>"
						),

				new Tag(  // span close
						'/span',
						[
							/(?:( NEVERMIND))/ig
						],
						"</span>"
						),

				new Tag(  // hr
						'hr',
						[
							/(?:\*BOOP\*)/ig
						],
						"<hr$id$class />"
						),

				new Tag(  // ul
						'ul',
						[
							/(?:THINGS\s+I\s+HATE)/ig
						],
						"<ul$id$class>",
						'</ul>'
						),

				new Tag(  // ol
						'ol',
						[
							/(?:ONE\s+TWO\s+THREE\.\.\.\.\.\.IM\s+GONNA\s+KILL\s+YOU)/ig
						],
						"<ol$id$class>",
						'</ol>'
						),

				new Tag(  // h2
						'h2',
						[
							/(?:PAY\s*ATTENSHUN\s)/ig
						],
						"<h2$id$class>",
						'</h2>'
						),
				new Tag(  // p
						'p',
						[
							/(?:PARROTGRAPH\.\.)/ig
						],
						"<p$id$class>",
						'</p>'
						),
				new Tag(  // open region
						'{{',
						[
							/(?:\:\:HUUUURGGEHH\:\:)/ig
						],
						"{{"
						),

				new Tag(  // close region
						'}}',
						[
							/(?:\:\:BLEAURGHHHCH\:\:)/ig
						],
						"}}"
						),

				new Tag(  // li (option 1)
						'li',
						[
							/(?:IM\s+GONNA\s+HURL)/ig,
							/(?:REEEROROMHAGH)/ig
						],
						"<li$id$class>",
						'</li>'
						),

				new Tag(  // li (option 2)
						'li (open)',
						[
							/(?:\=\^\.\.\^\=)/ig
						],
						"<li>"
						),

				new Tag(  // /li (option 2)
						'/li (close)',
						[
							/(?:\( \* \)LOLBUTTHOLE)/ig
						],
						"</li>"
						),

				new Tag(  // anchor
						'a',
						[
							/(?:CLICK\.\.\.\.(?:(?:CLICK.+)+\^))/ig
						],
						"<a$id$class$href>",
						'</a>'
						),

				new Tag(  // layout placeholder
						'layout placeholder',
						[
							/(?:OMGOMGOMG\s+ITS\s+A\s+PORTAL\s)/ig
						],
						"{{{",
						'}}}'
						),

				new Tag(  // input
						'input',
						[
							/(?:OM\s*(?:(?:NOM\s*)+))/ig,
							/(?:BUSINESS\s+CAT)/ig
						],
						"<input$type$id$class$name$placeholder$required />"
						),

				new Tag(  // button
						'button',
						[
							/(?:BEEP\s+(?:(?:BOOP\s+|BEEP\s+)+))/ig
						],
						"<button$id$class>",
						'</button>'
						),

				new Tag(  // close tag inline
						'close tag',
						[
							/(\s*DONT\s*RUB\s*MY\s*BELLEH\!)/ig,
							/(\s*STAH(?:H*)P)/ig,
							/(\s*I\s*WILL\s*DESTROY\s*YOU\.)/ig
						],
						""
						)
			];

module.exports = Tags;