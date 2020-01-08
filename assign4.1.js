var req = require('request-promise');


/*req(callgoogle("https://www.google.com"))
.then(callyahoo("https://in.yahoo.com/"))
.then(callyoutube("https://www.youtube.com/"))*/

function callgoogle() 
{
    req("https://www.google.com", function (error, response) {
    console.log('google error:', error);
    console.log('google statusCode:', response.statusCode);
    }).then(function callyoutube() {
        req("https://www.youtube.com/", function (error, response) {
        console.log('youtube error:', error);
        console.log('youtube statusCode:', response.statusCode);
        })}
        ).then(function callyahoo() {
            req("https://in.yahoo.com/", function (error, response) {
            console.log('yahoo error:', error);
            console.log('yahoo statusCode:', response.statusCode);
            })})
        
        }
callgoogle();