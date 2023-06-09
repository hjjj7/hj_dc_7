const indicator =
  document.querySelector(".indicator");
const progressTaget =
  document.querySelector("main");

const progressBar = () => {
  const progressTagetBCR =
    progressTaget.getBoundingClientRect();
  const progress =
    1 -
    progressTagetBCR.bottom /
      progressTagetBCR.height;
  console.log(progress);
  if (progress >= 0 && progress <= 1) {
    indicator.style.cssText =
      "transform: scalex(" + progress + ")";
  } else if (progress < 0) {
    indicator.style.cssText =
      "transform: scalex(0)";
  }
};

document.onscroll = () => {
  progressBar();
};

let observerOption = {
  root: null,
  rootMargin: "0px",
  threshold: 0.75,
};

let observerCallback = (observingTargets) => {
  observingTargets.forEach(
    (eachObservingTarget) => {
      if (eachObservingTarget.isIntersecting) {
        eachObservingTarget.target.classList.add(
          "triggered"
        );
      } else {
        eachObservingTarget.target.classList.remove(
          "triggered"
        );
      }
    }
  );
};

let observer = new IntersectionObserver(
  observerCallback,
  observerOption
);

let elems = document.querySelectorAll(
  ".animTrigger"
);
console.log(elems);

elems.forEach((eachElem) => {
  observer.observe(eachElem);
});

// observer.observe();
