// Load Grove module
var groveSensor = require('jsupm_grove');
var dweetClient = require("node-dweetio");
var dweetio = new dweetClient();
var light = new groveSensor.GroveLight(0);
function dweetSend() {
    dweetio.dweet_for("Light test", {LightIntensity:light.value()}, function(err, dweet)
	{
		console.log(light.value());
	});
	setTimeout(dweetSend,10000);
}
dweetSend();
