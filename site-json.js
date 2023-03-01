const fs = require('fs');
const neatCsv = require('neat-csv');

const siteCsv = process.env.SITE_CSV;

async function readSiteCsv() {
    const sites = await neatCsv(fs.readFileSync(siteCsv));
    const siteUrls = sites.map(site => site.url);
    return JSON.stringify(siteUrls);
}

readSiteCsv()
    .then((sites) => {
        console.log(`${sites}`);
    })
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
