var count=0;
setInterval(function(){
	if (count>19){
		location.reload(true);
		count=0;
	}
	else{
		var del_set=document.getElementsByClassName("del-status");
		del_set[0].click();
		var ok_cf=document.getElementsByClassName("ui-button ui-widget ui\-state\-default ui\-corner\-all ui\-button\-text\-only");
		ok_cf[1].click();
		count++;
		console.log("run del");
	}
},500)