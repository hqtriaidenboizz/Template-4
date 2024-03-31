function toggleNavbar(type) {
    const navbar = document.getElementById("header-middle");
    if (type === 'open') {
        navbar.style.width = "100%";
        document.body.style.overflow="hidden"
    } else {
        navbar.style.removeProperty('width');
        document.body.style.removeProperty('overflow')

    }
}

function setActiveSocialMedia(event) {
    const socialMediaItems = document.getElementsByClassName("social-media__item");
    for (let i = 0; i < socialMediaItems.length; i++) {
        socialMediaItems[i].classList.remove("active");
    }
    event.currentTarget.classList.add("active");
}

const socialMediaItems = document.querySelectorAll(".social-media__item")
socialMediaItems.forEach(socialMediaItem => {
    socialMediaItem.addEventListener("click", setActiveSocialMedia)
})