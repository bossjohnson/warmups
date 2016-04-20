// "Create a function called parseCars that takes the cars array as an argument.
// The parseCars function will return an object with properties of all the years.
// The values of the year properties will be an array that contains objects of the
// cars that correspond to that year.

var cars = [
        ["Year", "Make", "Model"],
        [1997, "Ford", "Mustang"],
        [2000, "Jeep", "Wrangler"],
        [1976, "VW", "Bug"],
        [1976, "Mercury", "Marquis"],
        [2007, "Mazda", "3"],
        [2003, "Mazda", "6"],
        [2016, "Nissan", "Leaf"],
        [2015, "Chevrolet", "Volt"],
        [1982, "DeLorean", "DMC-12"]
    ]
    //
    // parseCars(cars)
    // //->
    // {
    //  '1976':
    //    [ { Make: 'VW', Model: 'Bug' },
    //      { Make: 'Mercury', Model: 'Marquis' } ],
    //  '1997':
    //     [ { Make: 'Ford', Model: 'Mustang' } ],
    //  '2000':
    //     [ { Make: 'Jeep', Model: 'Wrangler' } ]
    // }
    // "

function parseCars(cars) {
    var carsObj = {};
    for (var i = 1; i < cars.length; i++) {
        if (carsObj[cars[i][0]]) {
            carsObj[cars[i][0]].push({
                Make: cars[i][1],
                Model: cars[i][2]
            });
        } else {
            carsObj[cars[i][0]] = [{
                Make: cars[i][1],
                Model: cars[i][2]
            }];
        }
    }
    return carsObj;
}

console.log(parseCars(cars));
