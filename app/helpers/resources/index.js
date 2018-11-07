const fs = require('fs');
const path = require('path');

const basename = path.basename(__filename);

const config = require('../../../config');

const providers = {};

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

        Object.assign(providers, downloaderObject);
    });

const defaultProviderKey = config.resources.hasOwnProperty('defaultProvider') ? config.resources.defaultProvider : '';
const defaultProvider = providers.hasOwnProperty(defaultProviderKey) ? providers[defaultProviderKey] : null;

module.exports = {
    providers,
    defaultProvider
};