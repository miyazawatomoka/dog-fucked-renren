var i=0;
var shareset=document.getElementsByClassName("share\-item\-delete");
setInterval(function(){
	shareset[0].click();
	var okset=document.getElementsByClassName("ui\-button\-blue ui\-button ui\-widget ui\-state-default ui\-corner-all ui\-button\-text\-only");
	okset[i].click();
	i++;
},500);
