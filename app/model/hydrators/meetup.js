const _meetup = require('../_meetup');

function isMapInfoValid(mapInfo) {
    return mapInfo.location instanceof Array;
}

function resolveLocation(location, attribute, input) {
    if (!(location instanceof Array) || location.length < 1) {
        return null;
    }

    let value = input;

    for (let i = 0; i < location.length; i++) {
        const valueIndex = parseInt(location[i], 10);

        const intermediateValue = value[valueIndex];

        if (i < location.length - 1) {
            if (intermediateValue.children) {
                value = intermediateValue.children;
            } else {
                return null;
            }
        } else if (attribute) {
            value = intermediateValue.attribs[attribute];
        } else if (intermediateValue.data) {
            value = intermediateValue.data;
        } else {
            return null;
        }
    }

    return value;
}

function hydrate(mapObject, input) {
    const meetup = _meetup();

    for (const propKey in meetup) {
        if (mapObject.hasOwnProperty(propKey)) {
            const mapInfo = mapObject[propKey];

            if (isMapInfoValid(mapInfo)) {
                const {location, attribute} = mapInfo;

                const value = resolveLocation(location, attribute, input);

                if (typeof value === 'string') {
                    meetup[propKey] = value.trim();
                }
            }
        }
    }

    return meetup;
}

module.exports = {
    hydrate
};