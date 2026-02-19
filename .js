document.querySelectorAll(".slider-wrapper").forEach(wrapper => {

    const slider = wrapper.querySelector(".products-slider");
    const nextBtn = wrapper.querySelector(".slider-btn-next");
    const prevBtn = wrapper.querySelector(".slider-btn-prev");

    nextBtn.addEventListener("click", () => {
        slider.scrollBy({
            left: slider.clientWidth * 0.8,
            behavior: "smooth"
        });
    });

    prevBtn.addEventListener("click", () => {
        slider.scrollBy({
            left: -slider.clientWidth * 0.8,
            behavior: "smooth"
        });
    });

});
