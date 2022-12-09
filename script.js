// Написать функцию assignObjects(obj1, obj2), которая принимает аргументами 2 объекта и возвращает новый,
//     который состоит из свойств обоих объектов(склеить).Если свойство повторяется, то взять значение второго объекта

// assignObjects({ x: 10, y: 20 }, { z: 30 }) вывод { x: 10, y: 20, z: 30 }
// assignObjects({ x: 10 }, { x: 20, y: 30 }) вывод { x: 20, y: 30 }

const tra = {
    x: 20,
    y: 70,
    z: 60,
    i: 60
};

const tru = {
    x: 10,
    y: 20,
    z: 30
};

const newObj = {};

function assignObjects(obj1, obj2) {
    for (let key in obj1) {
        newObj[key] = obj1[key];
    }

    for (let key in obj2) {
        newObj[key] = obj2[key];
    }

    return newObj;
};

console.log(assignObjects(tra, tru));
