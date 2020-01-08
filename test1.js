
/*const request = require('request');

function callyahoo(y){
request(y, function (error, response, body) {
 
  console.log('statusCode of yahoo:', response && response.statusCode);
   
});
}

function callgoogle(g)
{
request(g, function (error, response, body) {
    callyahoo("https://in.yahoo.com/");
  console.log('statusCode of google:', response && response.statusCode);
  
   
});
}

callgoogle("http://www.google.com")*/

var request = require("request");
// function callWebytube(ytub) {
// request(ytub, function (error, response, body) {
// console.log('ytube error:', error);
// console.log('ytube statusCode:', response.statusCode);
// });
// }
function callWebyahoo(y,callinggoogle) {
request(y, function (error, response, body) {
console.log('yahoo error:', error);
console.log('yahoo statusCode:', response.statusCode);
if (response.statusCode === 200) {
    callinggoogle('https://www.google.com')
// callback1('https://www.youtube.com')
}
});
}
function callWebgoogle(g) {
request(g, function (error, response, body) {
console.log('google error:', error);
console.log('google statusCode:', response.statusCode);
if (response.statusCode === 200) {

}
});
}
callWebyahoo("https://in.yahoo.com/", callWebgoogle);

