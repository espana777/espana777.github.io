const container = [...document.querySelectorAll('.container')];
const img = [...document.querySelectorAll('.container .model-img')];
const content = [...document.querySelectorAll('.container .content')];
const toggleBtn = document.querySelector('.toggle-btn');

let activeIndex;

container.forEach((item, i) => {
    item.addEventListener('click', () => {
        if (item.className.includes('circle'))
        {
            container.forEach(ele => ele.style.zIndex = 1);
            item.style.zIndex = 2;
            item.classList.remove('circle');
            img[i].classList.remove('scale-down');
            img[i].classList.add('scale-up');

            setTimeout(() => {
                content[i].classList.remove('circle');
                toggleBtn.classList.toggle('display');
            }, 1000);

            activeIndex = i;

        }
    })
})

const close = () => {
    content[activeIndex].classList.add('circle');

    setTimeout(() => {
        img[activeIndex].classList.remove('scale-up');
        img[activeIndex].classList.add('scale-down');

        setTimeout(() => {
            
            container.forEach(ele => ele.style.zIndex = 1);
            container[activeIndex].style.zIndex = 2;
            container[activeIndex].classList.add('circle');

        }, 500);

    }, 700);
}

toggleBtn.addEventListener('click', () => {
    close();
    toggleBtn.classList.toggle('display');
})