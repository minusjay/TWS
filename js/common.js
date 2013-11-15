var scriptname = GetUrlScriptname();

$('.nav a[href$="' + scriptname + '"]').parent().addClass('active');

function GetUrlScriptname() {
	if(location.pathname.indexOf('.htm') == -1)
		return "index.html";
    var rex = new RegExp("\\/[^\\/]+\\.\\w+($|\\?)");
    var match = rex.exec(location.pathname);
    return match[0].substring(1);
}