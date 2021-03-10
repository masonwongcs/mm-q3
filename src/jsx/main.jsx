"use strict";
import StarFieldModule from "./StarFieldModule.jsx";
import AnimationModule from "./AnimationModule.jsx";

class Banner {
  constructor() {
    window.clickTAG = "http://mediamonks.com/richmedia/work";
    const that = this;
    this.preloadImages().then(() => {
      that.setupEventListeners();
      that.setupStarfield();
    });
  }

  preloadImages() {
    return new Promise((resolve, reject) => {
      let images = document.querySelectorAll("img");
      let loaded = 0;
      let promiseQueue = [];

      // IE bug fix
      for (let i = 0; i < images.length; i++) {
        images[i].src = images[i].getAttribute("data-src");

        const promise = new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();

          img.src = images[i].src;
        });

        promiseQueue.push(promise);
      }

      Promise.all(promiseQueue).then(() => {
        resolve();
      });
    });
  }

  setupEventListeners() {
    document
      .getElementsByClassName("bannerClick")[0]
      .addEventListener("click", this.exit.bind(this));
    document
      .getElementsByClassName("bannerClick")[0]
      .addEventListener("mouseover", this.rollover.bind(this));
    document
      .getElementsByClassName("bannerClick")[0]
      .addEventListener("mouseout", this.rollout.bind(this));
  }

  setupStarfield() {
    let starfield = new StarFieldModule(300);
    starfield.start();
  }

  start() {
    this.animation = new AnimationModule();
    this.animation.start();

    const banner = document.querySelector("#banner");
    banner.classList.remove("hide");
  }

  rollover() {
    this.animation.playCtaIn();
  }

  rollout() {
    this.animation.playCtaOut();
  }

  exit() {
    this.animation.stop();
    window.open(window.clickTAG);
  }
}

window.addEventListener("load", () => {
  let banner = new Banner();
  banner.start();
});
