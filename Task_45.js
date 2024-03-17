//Task No 45
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function storeCarInfo(manufacturer, modelName) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var carInfo = __assign({ manufacturer: manufacturer, modelName: modelName }, extras);
    return carInfo;
}
// Call the function with required information and additional name-value pairs
var carInfo = storeCarInfo("Toyota", "Camry", "color: blue", "year: 2022");
// Print the object to verify that all information was stored correctly
console.log(carInfo);
