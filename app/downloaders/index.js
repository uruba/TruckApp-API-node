const fs = require('fs');
const path = require('path');

const basename = path.basename(__filename);

const config = require('../../config');

const downloaders = {};

fs.
    readdirSync(__dirname).
    filter((file) => file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js').
    forEach((file) => {
        // eslint-disable-next-line global-require
        const downloaderFile = require(path.join(__dirname, file));

        const downloaderObject = {};
        const downloaderName = file.slice(0, -3);

        downloaderObject[downloaderName] = downloaderFile;

        Object.assign(downloaders, downloaderObject);
    });


async function fetchAll() {
    const result = {};

    for (const downloaderName in downloaders) {
        try {
            // eslint-disable-next-line no-await-in-loop
            result[downloaderName] = await downloaders[downloaderName](config.downloaders[downloaderName]);
        } catch (err) {
            // TODO - log the error

            throw err;
        }
    }

    return result;
}

module.exports = {
    downloaders,
    fetchAll
};