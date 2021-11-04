let cities = [];
const initializeCityDatabase = () => {
    cities = {
        Vienna: true,
        'San Juan': true,
    };
};
const clearCityDatabase = () => {
    cities = [];
};
const isCity = (name) => {
    return cities[name];
};

module.exports = {
    initializeCityDatabase,
    clearCityDatabase,
    isCity,
};
