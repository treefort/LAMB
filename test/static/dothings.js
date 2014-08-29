var i=0;
setInterval(function(){
	window.location.hash = ['    \\', '    |', '    /', '   --'][i++];
	i = i>3?0:i;
}, 1000);