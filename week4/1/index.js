
var PRIORITY = ['filterIn', 'select'];

/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    var changedCollection = cloneCollection(collection);

    if (arguments.length === 1) {
        return changedCollection;
    }

    var commands = [].slice
        .call(arguments, 1)
        .sort(function (first, second) {
                firstPriority = PRIORITY.indexOf(first.name);
                secondPriority = PRIORITY.indexOf(second.name);
                if (firstPriority === secondPriority) {
                    return 0;
                }
                return firstPriority > secondPriority ? 1 : -1;
            });

    return commands.reduce(function (newCollection, func) {
        return func(newCollection);
    }, changedCollection);
}

/**
 * @params {String[]}
 */
function select() {
    var fields = [].slice.call(arguments);

    return function select(collection) {
        return collection.map(function (item) {
            return fields.reduce(function (record, field) {
                if (item.hasOwnProperty(field)) {
                    record[field] = item[field];
                }

                return record;
            }, {});
        });
    };
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return function filterIn(collection) {
        return collection.filter(function (item) {
            return values.indexOf(item[property]) !== -1;
        });
    };
}

/**
 * 
 * @param {Array} collection 
 * @returns {Array}
 */
function cloneCollection(collection) {
    return collection.map(function (item) {
        return Object.keys(item).reduce(function (obj, key) {
            obj[key] = item[key];
            return obj;
        }, {});
    });
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
