const header = document.querySelector("header");
let lastScroll = 0;

const throttle = (func, time = 100) => {
  let lastTime = 0;
  return () => {
    const now = new Date();
    if (now - lastTime >= time) {
      func();
      time = now;
    }
  };
};

const validateHeader = () => {
  const windowY = window.scrollY;
  const windowH = window.innerHeight;
  if (windowY > windowH) {
    // We passed the first section, set a toggable class
    header.classList.add("is-fixed");
    // Determine is we ready to animate
    if (windowY > windowH + 10) {
      header.classList.add("can-animate");
      if (windowY < lastScroll) {
        // Determine if we scrolling up
        header.classList.add("scroll-up");
      } else {
        header.classList.remove("scroll-up");
      }
    } else {
      header.classList.remove("scroll-up");
    }
  } else {
    header.classList.remove("is-fixed", "can-animate");
  }
  lastScroll = windowY;
};

window.addEventListener("scroll", throttle(validateHeader, 100));
