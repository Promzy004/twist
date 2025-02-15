const brand = document.querySelector('#brand');
const brand_logo = document.querySelector('#brand-logo');
const detail_items = document.querySelectorAll('.detail-items');
const service_images = document.querySelectorAll('.service-images');
const project_descs = document.querySelectorAll('.project-desc');
const arrows = document.querySelectorAll('.arrow-icon');


// rotates the brand logo when mouse is over it
brand.addEventListener('mouseover', () => {
    brand_logo.style.animation = 'brand-logo 0.5s ease-out 1'
})


// reverse the brand logo rotation when mouse out of it
brand.addEventListener('mouseout', () => {
    brand_logo.style.animation = 'brand-logo-reverse 0.5s ease-out 1'
})



//// loop for the service page, it iterates through when an item in the list is clicked and then display the description and image of the clicked item

detail_items.forEach((detail_item, index) => {

    //adding event listener to each item after looping through it
    detail_item.addEventListener('click', () => {

        //remove an active classlist from all items
        detail_items.forEach((detail) => {
            detail.classList.remove('active-detail');
        })

        //add an active classlist to the clicked item
        detail_item.classList.add('active-detail');

        //remove an active classlist from all items images
        service_images.forEach((service_image) => {
           service_image.classList.remove('active');
        })

        //add an active classlist to the clicked item image
        service_images[index].classList.add('active')

        //animates in the clicked item image, the keyframe used id written in the css 
        service_images[index].style.animation = 'animate-image 0.3s linear'

    })
})


project_descs.forEach((project_desc, index) => {
    project_desc.addEventListener('mouseover', () => {
        arrows[index].style.transform = 'rotateZ(45deg)';
        arrows[index].style.transform = '#FF4F01';
    })
})