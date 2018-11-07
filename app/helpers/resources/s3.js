const config = require('../../../config');

function provideResourceUri(resourceName) {
    const configS3 = config.resources.s3;

    return `https://${configS3.region}.amazonaws.com/${configS3.bucketName}/${resourceName}`;
}

module.exports = {
    provideResourceUri
};