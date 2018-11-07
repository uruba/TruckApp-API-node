const axios = require('axios');
const cheerio = require('cheerio');

const meetupHydrator = require('../model/hydrators/meetup');

module.exports = async (downloaderConfig) => {
    const {url, itemsGetter, propertiesMap} = downloaderConfig;

    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        const items = [];
        const itemsRaw = itemsGetter($);

        for (let idx = 1; idx < itemsRaw.length; idx++) {
            const itemRaw = itemsRaw[idx];
            const itemRawChildren = itemRaw.childNodes;

            const newItem = meetupHydrator.hydrate(propertiesMap, itemRawChildren);

            if (newItem) {
                items.push(newItem);
            }
        }

        return items;
    } catch (err) {
        // TODO - log

        return {};
    }

};