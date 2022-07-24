(function() {
    // JS loaded
    let body = document.body;
    body.classList.add('loaded');

    // Sidebar Swiper
    const sidebarSwiperID = document.getElementById('sidebarSwiper');
    if (sidebarSwiperID) {
        const sidebarSwiper = new Swiper('#sidebarSwiper', {
            direction: 'horizontal',
            slidesPerView: "auto",
            spaceBetween: 0,
            freeMode: true,
            mousewheel: true,
            breakpoints: {
                1023: {
                    direction: 'vertical',
                },
            },
        });
    }

    // Product Single Swiper
    const detailsSwiperID = document.getElementById('detailsSwiper');
    if (detailsSwiperID) {
        const detailsSwiper = new Swiper('#detailsSwiper', {
            slidesPerView: "auto",
            spaceBetween: 0,
            navigation: {
                nextEl: '#detailsSwiper .swiper-button-next',
                prevEl: '#detailsSwiper .swiper-button-prev',
            },
            breakpoints: {
                1023: {
                    slidesPerView: 1,
                },
            },
        });
    }

    // Checkout Swiper
    const checkoutSwiperID = document.getElementById('checkoutSwiper');
    if (checkoutSwiperID) {
        const checkoutSwiper = new Swiper('#checkoutSwiper', {
            slidesPerView: "auto",
            spaceBetween: 7,
            breakpoints: {
                1023: {
                    spaceBetween: 15,
                },
            },
        });
    }

    // Show Collapse without Wrapper JS 
    const showTogglerFunc = (collapseLinkID, collapseContentID) => {
        let collapseLinks = document.querySelectorAll(collapseLinkID),
            collapseContent = document.querySelectorAll(collapseContentID);

        if (collapseLinks && collapseContent) {
            const openCollapse = el => {
                let selectedLink = el.currentTarget,
                    showId = el.currentTarget.dataset.toggler,
                    currentCollapse = document.querySelector("#" + showId);

                if (selectedLink.classList.contains('active')) {
                    selectedLink.classList.remove("active");
                    currentCollapse.style.height = '0px';
                    currentCollapse.classList.remove('active');
                } else {
                    selectedLink.classList.add("active");
                    currentCollapse.style.height = currentCollapse.scrollHeight + "px";
                    currentCollapse.classList.add('active');
                }
            }
            collapseLinks.forEach(el => {
                el.addEventListener("click", openCollapse);
            });
        }
    }
    showTogglerFunc('[data-toggler]', '.collapse');

    // Close Cart Outside Click
    let cartItemID = document.querySelector("#cartItem");
    if (cartItemID) {
        cartItemID.onclick = (e) => {
            if (e.target.id == "cartItem") {
                cartItemID.classList.remove("active");
            }
        }
    }

    // Close Menu Outside Click
    let menuItemID = document.querySelector("#menuItem");
    if (menuItemID) {
        menuItemID.onclick = (e) => {
            if (e.target.id == "menuItem") {
                menuItemID.classList.remove("active");
            }
        }
    }

})();

// Open Cart
const openCart = () => {
    let cartItemID = document.querySelector("#cartItem");
    if (cartItemID) {
        cartItemID.classList.add("active");
    }
}

// Close Cart
const closeCart = () => {
    let cartItemID = document.querySelector("#cartItem");
    if (cartItemID) {
        cartItemID.classList.remove("active");
    }
}



// Open Menu
const openMenu = () => {
    let menuOpenID = document.querySelector("#menuItem");
    if (menuOpenID) {
        menuOpenID.classList.add("active");
    }
}


// Close Menu
const closeMenu = () => {
    let menuOpenID = document.querySelector("#menuItem");
    if (menuOpenID) {
        menuOpenID.classList.remove("active");
    }
}