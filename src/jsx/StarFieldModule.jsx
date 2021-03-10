import Utils from "./Utils.jsx";

export default class StarFieldModule {
  constructor(starCount) {
    this.starCount = starCount;
  }

  build() {
    for (var i = 0; i < this.starCount; i++) {
      new StarElement().start();
    }
  }

  start() {
    this.build();
  }
}

class StarElement {
  constructor() {
    let sparkles = document.querySelector(".sparkles");
    this.el = document.createElement("div");
    this.el.className = "sparkle";
    this.x = Utils.randomBetween(1, sparkles.getBoundingClientRect().width);
    this.y = Utils.randomBetween(1, sparkles.getBoundingClientRect().height);
    sparkles.appendChild(this.el);
    var w = 1;

    TweenMax.set(this.el, {
      x: this.x,
      y: this.y,
      width: w,
      height: w,
      opacity: 0,
    });
  }

  start() {
    TweenMax.to(this.el, Utils.randomBetween(5, 10) / 10, {
      opacity: 1,
      ease: Quad.easeInOut,
      repeat: -1,
      yoyo: true,
      delay: Utils.randomBetween(1, 50) / 10,
    });

    // stop sparkling after 15 seconds
    TweenMax.to(this.el, 0.5, { delay: 15, opacity: 0, ease: Quad.easeInOut });
  }
}
