const url1 = "http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-019.jpg";
const url2 = "http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-023.jpg";
const url3 = "http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-09.jpg";

// const promie = {
//     state: ['pending', 'fulfilled', 'rejected']
// }

// console.log('до promise');
// const promise = new Promise((resolve, reject) => {
//     console.log('внутри promise');
// })
// console.log('после promise');

// const promise = new Promise((resolve, reject) => {
//     resolve();
// })

// function delay(ms) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//            resolve();
//            console.log('resolved'); 
//         }, ms);
//     })
// }

// const promise = delay(2000);

// console.log('До then');
// promise.then(() => console.log('Promise разрешился! 1'));
// promise.then(() => console.log('Promise разрешился! 2'));
// promise.then(() => console.log('Promise разрешился! 3'));
// console.log('После then');

// promise
//     .then(() => console.log('Promise разрешился! 1'))
//     .then(() => console.log('Promise разрешился! 2'))
//     .then(() => console.log('Promise разрешился! 3'));

function loadImage(url) {
    return new Promise((resolve) => {
        const img = document.createElement('img');
        img.height = 200;
        img.src = url;
        document.body.append(img);
        img.addEventListener('load', () => {
            resolve();
        })
        img.addEventListener('error', () => {
            reject();
        })
    })
}
loadImage(url1)
    .then(() => {
        return loadImage(url2);
    })
    .then(() => {
        return loadImage(url3);
    })
    .then(() => {
        console.log('Картинки загружены');
    })