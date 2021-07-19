// to add the parallex effect

document.addEventListener("mousemove", parallexEffect);

function parallexEffect(e) {
    document.querySelectorAll('.parallex_layer').forEach(layer => {
        let layerSpeed = layer.getAttribute('data-speed');
        let moveX = (window.innerWidth - e.pageX * layerSpeed) / 150;
        let moveY = (window.innerWidth - e.pageY * layerSpeed) / 150;
        layer.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`
    })
}

// wow js plugin
new WOW().init();

// navbar color change
$(window).scroll(function() {
    let top_scroll = $(this).scrollTop()
    if (top_scroll >= 500) {
        $('.navbar').css({
            "background-color": "#9d9c9c",
            "box-shadow": "0px 2px 14px 4px rgba(0,0,0,0.75)",
            "-moz-box-shadow": "0px 2px 14px 4px rgba(0,0,0,0.75)",
            "-webkit-box-shadow": "0px 2px 14px 4px rgba(0,0,0,0.75"
        })
    } else if (top_scroll < 500) {
        $('.navbar').css({
            "background-color": "transparent",
            "box-shadow": "none",
            "-moz-box-shadow": "none",
            "-webkit-box-shadow": "none"
        })
    }
})