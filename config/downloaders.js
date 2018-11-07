module.exports = {
    ets2c: {
        url: 'https://ets2c.com/',
        itemsGetter: ($) => $('.row').toArray(),
        propertiesMap: {
            server: {
                location: [
                    1,
                    0
                ]
            },
            time: {
                location: [
                    3,
                    0
                ]
            },
            location: {
                location: [
                    5,
                    0
                ]
            },
            organiser: {
                location: [
                    7,
                    0
                ]
            },
            language: {
                location: [
                    9,
                    0
                ]
            },
            participants: {
                location: [
                    11,
                    0
                ]
            },
            relativeURL: {
                location: [
                    13,
                    0
                ],
                attribute: 'href'
            },
        }
    }
};
