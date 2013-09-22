function displayApplicationName(){ 
	var appName;
	var userAgent = navigator.userAgent;

	if(userAgent.indexOf("Chrome") > -1) {
	    appName = "Google Chrome";
	} 
	else if (userAgent.indexOf("Safari") > -1) {
	    appName = "Apple Safari";
	} 
	else if (userAgent.indexOf("Opera") > -1) {
	    appName = "Opera";
	} 
	else if (userAgent.indexOf("Firefox") > -1) {
	    appName = "Mozilla Firefox";
	} 
	else if (userAgent.indexOf("MSIE") > -1) {
	    appName = "Microsoft Internet Explorer";
	}
	else{
		appName = "Cannot be determined";
	}
	alert( "Browser Name : "+ appName );
}