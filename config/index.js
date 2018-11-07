const fs = require('fs');
const path = require('path');

const basename = path.basename(__filename);

const configSections = {};

fs.
    readdirSync(__dirname).
    filter((file) => file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js').
    forEach((file) => {
    // eslint-disable-next-line global-require
        const configSectionFile = require(path.join(__dirname, file));

        const configSectionObject = {};
        const configSectionName = file.slice(0, -3);

        configSectionObject[configSectionName] = configSectionFile;

        Object.assign(configSections, configSectionObject);
    });

module.exports = configSections;