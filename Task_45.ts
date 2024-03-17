//Task No 45

function storeCarInfo(manufacturer: string, modelName: string, ...extras: any): { manufacturer: string, modelName: string, [key: string]: any } {
    const carInfo = {
        manufacturer,
        modelName,
        ...extras
    };
    return carInfo;
}

// Call the function with required information and additional name-value pairs
const carInfo = storeCarInfo("Toyota", "Camry", "color: blue", "year: 2022");

// Print the object to verify that all information was stored correctly
console.log(carInfo);
