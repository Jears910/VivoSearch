//dependencies
var Combinatorics = require('js-combinatorics');
var Math = require('math');
var Cheerio = require('cheerio');
var Crawler = require('crawler');
const fs = require('fs');
//code | videoIDgen
function changeVideoID(ID) {
  var VideoID = ID
}
console.log(Combinatorics.baseN(['a','b','c'], 10).toArray())
//code | URL
const Base = 'https://vivo.sx/'
var VideoID =  '2d3930ac27'
//code | CrawlVivo
var c = new Crawler({
    maxConnections : 10,
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            var RawTitle = $("h1").text()
            var Proc1Title = RawTitle.split('(')[0]
            var Title = Proc1Title.slice(6, -1)
            console.log('Currently at: ' + VideoID +' Called: '+ Title)
            }
            //code | Writting
            let Line = JSON.stringify(VideoID + ' , ' + Title)
            fs.writeFileSync('data.json', Line);
            //code | END
        done();
    }
});
//code | VideoName
c.queue(Base+VideoID);
