const brands = document.querySelectorAll('#brand');
const brand_logo = document.querySelectorAll('#brand-logo');
const detail_items = document.querySelectorAll('.detail-items');
const service_images = document.querySelectorAll('.service-images');
const project_descs = document.querySelectorAll('.project-desc');
const arrows = document.querySelectorAll('.arrow-icon');
const testimonial_images = document.querySelectorAll('.testimonial-image');
const slider_items = document.querySelectorAll('.slider-item');
const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');
const question_buttons = document.querySelectorAll('.question > img');
const icons = document.querySelectorAll('.icon');
const menu = document.querySelector('.scroll');
const pages_in_view = document.querySelectorAll('.scroll-page')
const buttons = document.querySelectorAll('button');
const menu_texts = document.querySelectorAll('.menu-text');
const first_rows = document.querySelectorAll('.first-row');
const last_rows = document.querySelectorAll('.last-row');
const hero_grid = document.querySelector('.hero-grid');


//moves the first and last row of the hero page when been scrolled
window.addEventListener('scroll', () => {

    //assigned the vertical scroll value of the window to a variable
    let scrollAmount = window.scrollY;
    console.log(scrollAmount)

    //transform the first and last row using the window scroll value diving it by 8 to give out the value of the translate
    first_rows.forEach((first_row) => {
        first_row.style.transform = `translateY(-${scrollAmount / 8}px)`
    })
    last_rows.forEach((last_row) => {
        last_row.style.transform = `translateY(-${scrollAmount / 8}px)`
    })
} )




icons.forEach((icon,index) => {
    icon.addEventListener('mouseover', () => {
        menu_texts[index].style.visibility = 'visible'
        menu_texts[index].style.animation = 'menu-text-animate 0.2s linear'
    })
})

icons.forEach((icon,index) => {
    icon.addEventListener('mouseleave', () => {
        menu_texts[index].style.visibility = 'hidden'
    })
})
// console.log(buttons)
// console.log(pages_in_view)
// console.log(icons)
// const styles = document.getComputedStyle()

// buttons.forEach((button, index) => {
//     button.addEventListener('mouseover',  () => {
//         console.log(button.style.backgroundColor)
//         if(button.style.backgroundColor == 'rgb(255, 79, 1)'){
//             button.style.animation = 'button 2s ease-in linear'
//             button.style.backgroundColor = '#000'
//             console.log(button.style.color)
//         }
//     })
// })


// rotates the brand logo when mouse is over it
brands.forEach((brand,index) => {
    brand.addEventListener('mouseover', () => {
        brand_logo[index].style.animation = 'brand-logo 0.5s ease-out 1'
    })
})


// reverse the brand logo rotation when mouse out of it
brands.forEach((brand,index) => {
    brand.addEventListener('mouseout', () => {
        brand_logo[index].style.animation = 'brand-logo-reverse 0.5s ease-out 1'
    })
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

//loops through all arrow in the project description so as to add 
project_descs.forEach((project_desc, index) => {
    project_desc.addEventListener('mouseover', () => {
        arrows[index].style.transform = 'rotateZ(45deg)';
        arrows[index].style.transform = '#FF4F01';
    })
})



let currentIndex = 0

//compare the currentindex value by looping through and then give out image and item output with same value
const slider = (currentIndex) => {
    testimonial_images.forEach((testimonial_image, index) => {
        testimonial_image.classList.remove('active')
        if(currentIndex === index) {
            testimonial_image.classList.add('active');
            slider_items.forEach((slider_item) => {
                slider_item.classList.remove('active');
            })
            slider_items[index].classList.add('active');
        }
    })
}

//images automatically slides after 4 seconds
setInterval(() => {
    currentIndex = (currentIndex == testimonial_images.length - 1) ? 0 : currentIndex + 1;
    slider(currentIndex)
}, 4000)




//loops that checks clicked questions to display the answer
questions.forEach((question,index) => {
    question.addEventListener('click', () => {

        //asign a variable with an answer that have active classname
        const currentlyActive = answers[index].classList.contains('active');

        //loops through to remove active clasname from all answer
        answers.forEach((answer) => {
            answer.classList.remove('active');
        })

        //loop that add image-active to the plus icon, the classname have been style in css
        question_buttons.forEach((btn) => {
            btn.classList.remove('img-active');
        })

        //checks if current active variable is true or false
        if(!currentlyActive) {

            //adds this classnames to false current active variable
            answers[index].classList.add('active');
            question_buttons[index].classList.add('img-active');
        } else{

            //adds this classname to false current active variable
            answers[index].classList.remove('active');
            question_buttons[index].classList.remove('img-active');
        }
    })
})

// icons.forEach((icon) => {
//     icon.addEventListener('click', () => {
//         icons.forEach((r_icon) => {
//             r_icon.classList.remove('active');
//         })
//         icon.classList.add('active');
//     })
// })


//looped through and then added a click event to all icon in the menu bar
icons.forEach((icon, index) => {
    icon.addEventListener('click', () => {

        //loops through again
        icons.forEach((r_icon) => {

            //removes active from all icons
            r_icon.classList.remove('active');
        })

        menu_texts.forEach((menu_text) => {
            menu_text.style.visibility = 'hidden'
        })

        //add active classname to the one been clicked
        icon.classList.add('active');

        //when been clicked, it scroll to the page according to the indexing when been looped
        //so it means if the icon 2 is clicked then it should take me to the page with the index of 2
        pages_in_view[index].scrollIntoView({
            behavior: 'smooth'
        })
    })
})

//checks when window is been scrolled above 730px 
window.addEventListener('scroll', () => {
    if(window.scrollY > 700){

        //shows menu if true
        menu.style.display = 'flex';
        menu.classList.remove('animate-out-menu')
        menu.classList.add('animate-in-menu')
    } else{

        //removes menu if false
        menu.classList.remove('animate-in-menu')
        menu.classList.add('animate-out-menu')
    }
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            const index = pagesArray.indexOf(entry.target);
            console.log(index)
            if(index !== -1) {
                icons.forEach((icon) => {
                    icon.classList.remove('active');
                })
                icons[index].classList.add('active');
            }
        } 
    })
})

const pagesArray = Array.from(pages_in_view)

pagesArray.forEach((page) => {
    observer.observe(page)
}) 





//scrolls to top when the arrow icon in the menu is been clicked
const scroll_top = icons[0]
scroll_top.addEventListener('click' , () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})


//removes active classname from all icon in the menu when been scrolled
// window.addEventListener('wheel' , () => {
//     icons.forEach((icon) => {
//         icon.classList.remove('active');
//     })
// })