var request = require("request");
function callyoutube(ytub) {
request(ytub, function (error, response, body) {
console.log('youtube error:', error);
console.log('youtube statusCode:', response.statusCode);
});
}
function callyahoo(y, callingyoutube) {
request(y, function (error, response, body) {
console.log('yahoo error:', error);
console.log('yahoo statusCode:', response.statusCode);
{
callingyoutube('https://www.youtube.com')
}
});
}
function callgoogle(g, callingyahoo) {
request(g, function (error, response, body) {
//console.log('google error:', error);
console.log('google statusCode:', response.statusCode);
 {
callingyahoo('https://in.yahoo.com/', callyoutube)
}
});
}
callgoogle("https://www.google.com", callyahoo);