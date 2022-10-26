/*Challenge
** Implement a node app called fetcher.js.
** It should take two command line arguments:
** 1: a URL
** 2: a local file path
** It should download the resource at the URL 
** to the local path on your machine. Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.
*/
const { readFile, writeFile } = require('fs');
const request = require('request');
const args = process.argv;
let slicedArgs = args.slice(2);



callback = function(error, response, body) {
  if (error) {
    throw error;

  }
  console.log(body);



  writeFile(slicedArgs[1], body, (error) => {
    if (error) {
      throw error;
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${slicedArgs[1]}`);


    }
  });

};



request(slicedArgs[0], callback);
