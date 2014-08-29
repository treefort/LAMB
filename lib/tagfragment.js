
// structure for optional Tag attributes (ie: href, class, id, etc.) 
TagFragment = function(handle, output, patterns){
	this.handle = handle;
	this.output = output;
	this.patterns = patterns;
}

// swap placeholder in fragment for captured value
TagFragment.prototype.apply = function(value){
	return this.output.split("##").join(value);
}


var TagFragments = 
			[
				new TagFragment(
					'$id',
					' id="##"',
					[
						/(?:IM\s+(?:KING|CHIEF|PRINCE|MASTER|DEMIGOD|THE|LORD)?\s+([a-zA-Z0-9_]+))/ig,
						/(?:WHAT\s+A\s+STUPID\s+([a-zA-Z0-9_]+))/ig,
					]),

				new TagFragment(
					'$class',
					' class="##"',
					[
						/(?:I\s*AM\s*(?:TOTALLY|DEFINITELY|COMPLETELY|ABSOLUTELY|SUCH|)?\s*A\s*([a-zA-Z0-9_ ]+)(?:\.|\!|\?)+)/ig,
						/(?:ILL\s*NEVER\s*LET\s*GO\s*([a-zA-Z0-9_ ]+)(?:\.|\!|\?)+)/ig,
						/(?:I\s*AM\s*12\s*AND\s*WHAT\s*IS\s*THIS\s*([a-zA-Z0-9_ ]+)(?:\.|\!|\?)+)/ig,
						/(?:OOOOOOOOHHHHH\s*([a-zA-Z0-9_ ]+)(?:\.|\!|\?)+)/ig							
					]),

				new TagFragment(
					'$src',
					' src="##"',
					[
						/(?:I\s*HATE\s*(.*)\s*ALAWTT >=O)/ig,
						/(?:OMG\s*A\s*RAINBOW\s*D\:\s+(.*))/ig,
						/(?:OMG(?:LAZERS|BIRDS)\s*(.*))/ig
					]),

				new TagFragment(
					'$href',
					' href="##"',
					[
						/(?:I\s*ATE\s*YOUR\s*(.*)\sIM\s*NOT\s*EVEN\s*SORRY)/ig,
						/(?:RRRRRRRMRMRMPHHHHH\s*(.*)\s+SIGH\.\.\.)/ig
					]),

				new TagFragment(
					'$type',
					' type="##"',
					[
						/(?:THROW\s+SUM\s+([a-zA-Z0-9_ .-]+)\s+IN\s+HIS\s+FAEC)/ig
					]),

				new TagFragment(
					'$name',
					' name="##"',
					[
						/(?:YOU\s+MUST\s+BE\s+([a-zA-Z0-9_.-]+))/ig
					]),

				new TagFragment(
					'$method',
					' method="##"',
					[
						/(?:I\s*GET\s*WHATEVER\s*THE\s*(GET|POST|PUT|DELETE|HEAD|OPTIONS)\s*I\s*WANT)/ig
					]),

				new TagFragment(
					'$action',
					' action="##"',
					[
						/(?:FOR\s*SWEET\s*PICTURES\s*OF\s*MY\s*(?:POOP|VOMIT|EX|HAIRBALLZ)\:(.*)\.com\.net\.ru\.cat\.biz)/ig
					]),

				new TagFragment(
					'$placeholder',
					' placeholder="##"',
					[
						/(?:CHECK\s+OUT\s+MAH\s+GRAFFITI\:\s(.*))/ig
					]),

				new TagFragment(
					'$required',
					' required##',
					[
						/(?:NAO\!)/ig
					])
			];

module.exports = TagFragments;