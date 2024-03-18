const url1 = "http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-019.jpg";
const url2 = "http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-023.jpg";
const url3 = "http://wallpapers-image.ru/2560x1600/cars/wallpapers/wallpapers-cars-09.jpg";

const img1 = document.createElement('img');
img1.height = 200;
img1.src = url1;
document.body.append(img1);

img1.addEventListener('load', () => {
    const img2 = document.createElement('img');
    img2.height = 200;
    img2.src = url2;
    document.body.append(img2);

    img2.addEventListener('load', () => {
        const img3 = document.createElement('img');
        img3.height = 200;
        img3.src = url3;
        document.body.append(img3);

        img3.addEventListener('load', () => {
            console.log('Все картинки загружены');
        });
    });
});