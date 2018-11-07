const downloaders = require('../../downloaders');

module.exports = async () => {
    const downloadersOutput = await downloaders.fetchAll();

    return {
        items: downloadersOutput,
        // TODO - hook into the error handler
        error: false
    };
};