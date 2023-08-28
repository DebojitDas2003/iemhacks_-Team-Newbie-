let navLinks = document.querySelectorAll('nav ul a');


window.onescroll = () => {
    sec.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let height = section.offHeight;
        let id = section.getattribute('id');

        if(top>= offset && top< offset + height){
            navLinks.forEach(link =>)
        }
    })
}


