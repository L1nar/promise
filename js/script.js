const url1 = "http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-01.jpg";
const url2 = "http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-023.jpg";
const url3 = "http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-09.jpg";

/* 
const promise = {
    state: ['pending', 'fulfilled', 'rejected']
}
 */
// console.log('до промиса');
// const promise = new Promise((resolve, reject) => {
//     console.log('внутри промиса')
// });
// console.log('после промиса');

// const promise = new Promise((resolve, reject) => {
//     resolve();
// });


/* const promise = {
    state: ['pending', 'fulfilled', 'rejected'],
    resolveQueue: [
        function () {
            console.log('1');
        },
        function () {
            console.log('2');
        },
        function () {
            console.log('3');
        }
    ]
} */

/* function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
            console.log('resolved');
        }, ms)
    })
}

const promise = delay(2000);

console.log('до then');
promise.then(() => console.log('Промис разрешился! '));
promise.then(() => console.log('Промис разрешился 2! '));
promise.then(() => console.log('Промис разрешился 3! '));
console.log('после then');

promise
    .then(() => console.log('Промис разрешился! '))
    .then(() => console.log('Промис разрешился 2! '))
    .then(() => console.log('Промис разрешился 3! ')); */

function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.height = 200;
        img.src = url;
        document.body.append(img);
        img.addEventListener('load', () => {
            resolve();
        });
        img.addEventListener('error', () => {
            reject('Ошибка загрузки');
        });
    })
}

// loadImage(url1)
//     .then(() => {
//         return loadImage(url2);
//     })
//     .then(() => {
//         return loadImage(url3);
//     })
//     .then(() => {
//         console.log('Картинки загружены!');
//     })
//     .catch(() => {
//         console.log('Ошибка загрузки');
//     })

async function fn() {
    try {
        await loadImage(url1);
        await loadImage(url2);
        await loadImage(url3);
        console.log('Картинки загружены');
    } catch (e) {
        console.log(e);
    }
}

fn();