class SliderComponent extends HTMLElement {
  constructor() {
    super();
    this.slider = this.querySelector(".scroll-container");
    this.slides = this.querySelectorAll(".nftimages");
    this.sliderTray = this.querySelector(".indicator-tray");
    this.sliderIndicator = this.querySelector(".indicator");

    const resizeObserver = new ResizeObserver((entries) => this.initialise());
    resizeObserver.observe(this.slider);

    this.slider.addEventListener("scroll", this.update.bind(this));
  }

  initialise() {
    const slidesToShow = Array.from(this.slides).filter(
      (element) => element.clientWidth > 0
    );

    this.sliderLastItem = slidesToShow[slidesToShow.length - 1];

    if (slidesToShow.length === 0) return;

    this.slidesPerPage = Math.floor(
      this.slider.clientWidth / slidesToShow[0].clientWidth
    );
    this.totalPages = slidesToShow.length - this.slidesPerPage + 1;
    this.update();
  }

  moveIndicator() {
    const indicatorWidth = 100 / this.totalPages;
    const scrollPercentage = Math.floor(
      100 *
        (this.slider.scrollLeft /
          (this.slider.scrollWidth - this.slider.clientWidth))
    );
    const left =
      (scrollPercentage / 100) *
      (this.sliderTray.clientWidth - this.sliderIndicator.clientWidth);

    this.sliderIndicator.style.width = `${indicatorWidth}%`;
    this.sliderIndicator.style.left = `${left}px`;
  }

  update() {
    this.currentPage =
      Math.round(this.slider.scrollLeft / this.sliderLastItem.clientWidth) + 1;
    requestAnimationFrame(() => this.moveIndicator());
  }

  onButtonClick(event) {
    event.preventDefault();
    const slideScrollPosition =
      event.currentTarget.name === "next"
        ? this.slider.scrollLeft + this.sliderLastItem.clientWidth
        : this.slider.scrollLeft - this.sliderLastItem.clientWidth;

    this.slider.scrollTo({
      left: slideScrollPosition,
    });
  }
}

customElements.define("slider-component", SliderComponent);
