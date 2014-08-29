LAMB 
====

### (LOOK AT MAH BUTTHOLE)-- ^·^n*r’

LAMB is a markup language for cats. You read that correctly. Currently, it translates into HTML. Here's what it looks like:
```````LAMB
THINGS I HATE ILL NEVER LET GO HEADING LEFT.
	=^..^=Milk( * )LOLBUTTHOLE
	REEEROROMHAGH I AM LORD HIGHLIGHTED EggsSTAHHHHHHHHHHP
	IM GONNA HURL I AM 12 AND WHAT IS THIS CRAP??????!??!? Bread STAHP
```````
...which becomes:
```````HTML
<ul class="heading left">
	<li>Milk</li>
	<li id="highlighted">Eggs</li>
	<li class="crap">Break</li>
</ul>
```````

There are a few ways to use LAMB:

**Whatever you'd call this method:**
```````javascript
var lamb = require('../path/to/lamb');

lamb($strLAMBMarkup, function(err, data){
		... // data == html
});
```
**...and as Express 3.x middleware:**
```````javascript
var express   	= require('express'),
	  lamb	      = require('../path/to/lamb'),
	  app     	  = express();

app.engine('lamb', lamb().__express);
app.set('views', __dirname + '/views'); // where you keep your .lamb files
app.set('view engine', 'lamb');

app.get('/', function (req, res) {
  res.render('home');
})

app.listen(3000);
```
Check out the **/test** directory for more examples:
```
npm basic                     // prints additional examples
npm line {your LAMB markup}   // converts one line of LAMB markup
npm middleware                // creates an express http server at localhost:3000
```

#Here's the markup:

Tags
-----
### Tag: `html` 

**Output**: `<html$class>` 

**Tag Patterns** 

	 /(?:MEOWWWW)/gi 

**Fragments** 

* $class 

**Closer:** `</html>` 

--


### Tag: `head` 

**Output**: `<head>` 

**Tag Patterns** 

	 /(?:IM\s*IN\s*UR\s*CEILING)/gi 

	 /(?:SCRATCHING\s*POST)/gi 

**Closer:** `</head>` 

--


### Tag: `title` 

**Output**: `<title>` 

**Tag Patterns** 

	 /(?:I\s+DUB\s+THEE\.\.\.)/gi 

**Closer:** `</title>` 

--


### Tag: `body` 

**Output**: `<body$id$class>` 

**Tag Patterns** 

	 /(?:MORE\s*LIKE\s*BODY\s*COUNT\s*AMIRITE\?)/gi 

	 /(?:WUNDERLAND)/gi 

**Fragments** 

* $id 

* $class 

**Closer:** `</body>` 

--


### Tag: `div` 

**Output**: `<div$id$class>` 

**Tag Patterns** 

	 /(?:IF\s*I\s*FITS\s*I\s*SITS)/gi 

	 /(?:THIS\s*IS\s*MAH\s*BOX)/gi 

	 /(?:SQUARE\s+THINGY)/gi 

	 /(?:DOVE\!\@\#\$)/gi 

**Fragments** 

* $id 

* $class 

**Closer:** `</div>` 

--


### Tag: `form` 

**Output**: `<form$id$class$method$action>` 

**Tag Patterns** 

	 /(?:MAKIN\s*DEALZ\s*WITH\s*BUSINESSCAT\.JPG)/gi 

	 /(?:FARM(?:M*))/gi 

**Fragments** 

* $id 

* $class 

* $method 

* $action 

**Closer:** `</form>` 

--


### Tag: `link` 

**Output**: `<link type='text/css' rel='stylesheet'$href />` 

**Tag Patterns** 

	 /(?:IM\s*SO\s*FLY)/gi 

	 /(?:MILKPOOTS)/gi 

**Fragments** 

* $href 

**Closer:** `none` 

--


### Tag: `script` 

**Output**: `<script $src type='text/javascript'></script>` 

**Tag Patterns** 

	 /(?:DOCUMENTZ)/gi 

	 /(?:WAIT\.\.\.THIS\s*ISNT\s*YARN\s*WTF\?)/gi 

**Fragments** 

* $src 

**Closer:** `none` 

--


### Tag: `script (inline)` 

**Output**: `<script>` 

**Tag Patterns** 

	 /(?:POOOOOPT)/gi 

	 /(?:WE\s+LEIK\s+TO\s+PARTY\.)/gi 

**Closer:** `</script>` 

--


### Tag: `img` 

**Output**: `<img$id$class $src />` 

**Tag Patterns** 

	 /(?:CHEEEESEEEE)/gi 

	 /(?:I\s*DREW\s*A\s*PICTURE\s*FOR\s*YOU)/gi 

	 /(?:SQUARE\s*VOMIT)/gi 

**Fragments** 

* $id 

* $class 

* $src 

**Closer:** `none` 

--


### Tag: `lamb` 

**Output**: `<!DOCTYPE HTML>` 

**Tag Patterns** 

	 /(?:IM\s*A\s*CAT\.\s*LOOK\s*AT\s*MY\s*BUTTHOLE\.)/gi 

	 /(?:\( \* \)\<\-\-\s*TOTALLY\s*A\s*CAT\s*BUTTHOLE\.)/gi 

**Closer:** `none` 

--


### Tag: `span` 

**Output**: `<span$id$class>` 

**Tag Patterns** 

	 /(?:(SPOOOOON\!\!))/gi 

**Fragments** 

* $id 

* $class 

**Closer:** `none` 

--


### Tag: `/span` 

**Output**: `</span>` 

**Tag Patterns** 

	 /(?:( NEVERMIND))/gi 

**Closer:** `none` 

--


### Tag: `hr` 

**Output**: `<hr$id$class />` 

**Tag Patterns** 

	 /(?:\*BOOP\*)/gi 

**Fragments** 

* $id 

* $class 

**Closer:** `none` 

--


### Tag: `ul` 

**Output**: `<ul$id$class>` 

**Tag Patterns** 

	 /(?:THINGS\s+I\s+HATE)/gi 

**Fragments** 

* $id 

* $class 

**Closer:** `</ul>` 

--


### Tag: `ol` 

**Output**: `<ol$id$class>` 

**Tag Patterns** 

	 /(?:ONE\s+TWO\s+THREE\.\.\.\.\.\.IM\s+GONNA\s+KILL\s+YOU)/gi 

**Fragments** 

* $id 

* $class 

**Closer:** `</ol>` 

--


### Tag: `h2` 

**Output**: `<h2$id$class>` 

**Tag Patterns** 

	 /(?:PAY\s*ATTENSHUN\s)/gi 

**Fragments** 

* $id 

* $class 

**Closer:** `</h2>` 

--


### Tag: `p` 

**Output**: `<p$id$class>` 

**Tag Patterns** 

	 /(?:PARROTGRAPH\.\.)/gi 

**Fragments** 

* $id 

* $class 

**Closer:** `</p>` 

--


### Tag: `{{` 

**Output**: `{{` 

**Tag Patterns** 

	 /(?:\:\:HUUUURGGEHH\:\:)/gi 

**Closer:** `none` 

--


### Tag: `}}` 

**Output**: `}}` 

**Tag Patterns** 

	 /(?:\:\:BLEAURGHHHCH\:\:)/gi 

**Closer:** `none` 

--


### Tag: `li` 

**Output**: `<li$id$class>` 

**Tag Patterns** 

	 /(?:IM\s+GONNA\s+HURL)/gi 

	 /(?:REEEROROMHAGH)/gi 

**Fragments** 

* $id 

* $class 

**Closer:** `</li>` 

--


### Tag: `li (open)` 

**Output**: `<li>` 

**Tag Patterns** 

	 /(?:\=\^\.\.\^\=)/gi 

**Closer:** `none` 

--


### Tag: `/li (close)` 

**Output**: `</li>` 

**Tag Patterns** 

	 /(?:\( \* \)LOLBUTTHOLE)/gi 

**Closer:** `none` 

--


### Tag: `a` 

**Output**: `<a$id$class$href>` 

**Tag Patterns** 

	 /(?:CLICK\.\.\.\.(?:(?:CLICK.+)+\^))/gi 

**Fragments** 

* $id 

* $class 

* $href 

**Closer:** `</a>` 

--


### Tag: `layout placeholder` 

**Output**: `{{{` 

**Tag Patterns** 

	 /(?:OMGOMGOMG\s+ITS\s+A\s+PORTAL\s)/gi 

**Closer:** `}}}` 

--


### Tag: `input` 

**Output**: `<input$type$id$class$name$placeholder$required />` 

**Tag Patterns** 

	 /(?:OM\s*(?:(?:NOM\s*)+))/gi 

	 /(?:BUSINESS\s+CAT)/gi 

**Fragments** 

* $id 

* $class 

* $type 

* $name 

* $placeholder 

* $required 

**Closer:** `none` 

--


### Tag: `button` 

**Output**: `<button$id$class>` 

**Tag Patterns** 

	 /(?:BEEP\s+(?:(?:BOOP\s+|BEEP\s+)+))/gi 

**Fragments** 

* $id 

* $class 

**Closer:** `</button>` 

--


### Tag: `close tag` 

**Output**: `` 

**Tag Patterns** 

	 /(\s*DONT\s*RUB\s*MY\s*BELLEH\!)/gi 

	 /(\s*STAH(?:H*)P)/gi 

	 /(\s*I\s*WILL\s*DESTROY\s*YOU\.)/gi 

**Closer:** `none` 

--


Tags Fragments
-----
### Fragment: `$id` 

**Output**: ` id="##"` 

**Fragment Patterns** 

	 /(?:IM\s+(?:KING|CHIEF|PRINCE|MASTER|DEMIGOD|THE|LORD)?\s+([a-zA-Z0-9_]+))/gi 

	 /(?:WHAT\s+A\s+STUPID\s+([a-zA-Z0-9_]+))/gi 



--


### Fragment: `$class` 

**Output**: ` class="##"` 

**Fragment Patterns** 

	 /(?:I\s*AM\s*(?:TOTALLY|DEFINITELY|COMPLETELY|ABSOLUTELY|SUCH|)?\s*A\s*([a-zA-Z0-9_ ]+)(?:\.|\!|\?)+)/gi 

	 /(?:ILL\s*NEVER\s*LET\s*GO\s*([a-zA-Z0-9_ ]+)(?:\.|\!|\?)+)/gi 

	 /(?:I\s*AM\s*12\s*AND\s*WHAT\s*IS\s*THIS\s*([a-zA-Z0-9_ ]+)(?:\.|\!|\?)+)/gi 

	 /(?:OOOOOOOOHHHHH\s*([a-zA-Z0-9_ ]+)(?:\.|\!|\?)+)/gi 



--


### Fragment: `$src` 

**Output**: ` src="##"` 

**Fragment Patterns** 

	 /(?:I\s*HATE\s*(.*)\s*ALAWTT >=O)/gi 

	 /(?:OMG\s*A\s*RAINBOW\s*D\:\s+(.*))/gi 

	 /(?:OMG(?:LAZERS|BIRDS)\s*(.*))/gi 



--


### Fragment: `$href` 

**Output**: ` href="##"` 

**Fragment Patterns** 

	 /(?:I\s*ATE\s*YOUR\s*(.*)\sIM\s*NOT\s*EVEN\s*SORRY)/gi 

	 /(?:RRRRRRRMRMRMPHHHHH\s*(.*)\s+SIGH\.\.\.)/gi 



--


### Fragment: `$type` 

**Output**: ` type="##"` 

**Fragment Patterns** 

	 /(?:THROW\s+SUM\s+([a-zA-Z0-9_ .-]+)\s+IN\s+HIS\s+FAEC)/gi 



--


### Fragment: `$name` 

**Output**: ` name="##"` 

**Fragment Patterns** 

	 /(?:YOU\s+MUST\s+BE\s+([a-zA-Z0-9_.-]+))/gi 



--


### Fragment: `$method` 

**Output**: ` method="##"` 

**Fragment Patterns** 

	 /(?:I\s*GET\s*WHATEVER\s*THE\s*(GET|POST|PUT|DELETE|HEAD|OPTIONS)\s*I\s*WANT)/gi 



--


### Fragment: `$action` 

**Output**: ` action="##"` 

**Fragment Patterns** 

	 /(?:FOR\s*SWEET\s*PICTURES\s*OF\s*MY\s*(?:POOP|VOMIT|EX|HAIRBALLZ)\:(.*)\.com\.net\.ru\.cat\.biz)/gi 



--


### Fragment: `$placeholder` 

**Output**: ` placeholder="##"` 

**Fragment Patterns** 

	 /(?:CHECK\s+OUT\s+MAH\s+GRAFFITI\:\s(.*))/gi 



--


### Fragment: `$required` 

**Output**: ` required##` 

**Fragment Patterns** 

	 /(?:NAO\!)/gi 



--
