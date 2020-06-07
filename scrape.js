const rp = require('request-promise');
const cheerio = require('cheerio')
const url = 'https://www.githubstatus.com';

const siteStatusArr = new Array();
        
class siteStatusObject {
    constructor(name, status) {
        this._name = name;
        this._status = status;
    }
}

rp(url)
    .then((html) => {
        //success!
        const $ = cheerio.load(html);
        const siteStatus = $('.component-container');
        

        siteStatus.each((i, el) => {
            const siteOperationTitle = $(el)
                .find('.name')
                .text()
                .replace(/\s\s+/g, '');
            const siteOperationStatus = $(el)
                .find('.component-status')
                .text()
                .replace(/\s\s+/g, '');
            
            siteStatusArr.push(new siteStatusObject(siteOperationTitle, siteOperationStatus))
        });

        // console.log(siteStatusArr);
    })
    .catch((err) => {
        //handle error
        console.log(err);
    });

exports.siteStatusJSON = siteStatusArr;