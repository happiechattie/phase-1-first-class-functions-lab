const returnFirstTwoDrivers = function(things) {
    return things.slice(0, 2);
}

const returnLastTwoDrivers = function(things) {
    return things.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x) {
    return function(fare){
        return x * fare};
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(drivers, f) {
    return f(drivers);
}