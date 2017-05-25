/**
* A function to sort objects by key {*}
*/
const sortedAssetRange = function sortObject(obj) {
            return Object.keys(obj).sort().reduce(function (result, key) {
                result[key] = obj[key];
                return result;
            }, {});
        };
