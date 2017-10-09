/* 20171009 DM - LHL w2d1

  http requests exercise

*/

// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

// Using Try/Catch to handle errors.
try {

  request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
         .on('error', function (err) {
          throw err;                                // Note 2
         })

         .on('response', function (response) {                           // Note 3
           console.log('Response Status Code: ', response.statusCode);
           console.log('Response Message: ', response.statusMessage);
           console.log('Response Content Type: ', response.headers['content-type']);
           console.log('\n Downloading image...');
         })

         .pipe(fs.createWriteStream('./future.jpg'))

         .on('finish', function() {
          console.log(" ... download complete.");
         })

} catch (e) {
  console.log("Error downloading file - ", e.message);
}

