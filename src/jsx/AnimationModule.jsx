export default class AnimationModule {
  constructor() {
    this.build();
  }

  build() {
    this.ctaTimeline = new TimelineMax({ paused: true });
    this.mainTimeline = new TimelineMax();

    //Set inititial positions for elements
    TweenMax.set([bg, bg_planet], { scale: 0.8, transformOrigin: "0 0%" });
    TweenMax.set(".sparkles", {
      opacity: 1,
      scale: 0.8,
      y: -20,
      x: 20,
      transformOrigin: "0 0%",
    });

    //Main timeline
    this.mainTimeline
      .add("start", 0)
      .staggerFrom(
        ".bigcopy",
        0.6,
        { opacity: 0, y: 20, ease: Power1.easeOut },
        0.2,
        "start"
      )
      .to(couch, 15, { x: 80, rotation: 10, ease: Linear.easeNone }, "start")
      .to(
        pillow,
        15,
        { y: 10, x: -50, rotation: -20, ease: Linear.easeNone },
        "start"
      )
      .to(
        flowerBottle,
        15,
        { rotation: 5, y: 40, x: 70, ease: Linear.easeNone },
        "start"
      )
      .to(
        flowerStem,
        15,
        { rotation: 10, y: 50, x: 128, ease: Linear.easeNone },
        "start"
      )
      .to(
        flowerLeaf,
        15,
        { rotation: -25, y: 40, x: 110, ease: Linear.easeNone },
        "start"
      )
      .to(
        flowerPettle,
        15,
        { rotation: 10, y: 10, x: 30, ease: Linear.easeNone },
        "start"
      )
      .to(
        flowerPettle2,
        15,
        { rotation: 90, y: 20, x: 10, ease: Linear.easeNone },
        "start"
      )
      .to(
        flower1,
        15,
        { rotation: 80, y: -10, x: 40, ease: Linear.easeNone },
        "start"
      )
      .to(
        flower2,
        15,
        { rotation: -180, y: 50, x: -10, ease: Linear.easeNone },
        "start"
      )
      .to(
        flowerBig,
        15,
        { rotation: -360, x: 200, y: -20, ease: Linear.easeNone },
        "start"
      )
      .to(
        spoon,
        15,
        { rotation: -200, x: -100, ease: Linear.easeNone },
        "start"
      )
      .to(saucer, 15, { rotation: -40, x: -40, ease: Linear.easeNone }, "start")
      .to(coffee, 15, { rotation: -10, x: -30, ease: Linear.easeNone }, "start")
      .to(
        coffeeBubble,
        15,
        { x: -100, y: 50, rotation: -180, ease: Linear.easeNone },
        "start"
      )
      .to(
        coffeeBubble2,
        15,
        { x: -60, y: 20, rotation: -280, ease: Linear.easeNone },
        "start"
      )
      .to(
        coffeeBubble3,
        15,
        { x: -40, y: -20, rotation: 80, ease: Linear.easeNone },
        "start"
      )
      .from(
        copy1e,
        2,
        { opacity: 0, scale: 0.5, ease: Power1.easeInOut },
        "start+=0.5"
      )
      .add("frame2", 8)
      .to(coffee, 2.5, { y: 80, ease: Expo.easeIn }, "frame2")
      .to(
        coffeeBubble,
        2.5,
        { scale: 4, x: -150, y: 150, ease: Expo.easeIn },
        "frame2"
      )
      .to(".gravityAssets", 2.5, { scale: 4, ease: Expo.easeIn }, "frame2")
      .to(flowerBottle, 2.5, { scale: 2, y: 200, ease: Expo.easeIn }, "frame2")
      .to(flowerStem, 2.5, { scale: 2, y: 200, ease: Expo.easeIn }, "frame2")
      .to(flowerLeaf, 2.5, { scale: 1.8, y: 200, ease: Expo.easeIn }, "frame2")
      .to(
        flowerBig,
        1.7,
        { scale: 2.5, left: 160, ease: Expo.easeIn },
        "frame2"
      )
      .to(flower1, 2, { scale: 2, left: -10, ease: Expo.easeIn }, "frame2")
      .add("frame3", 8.4)
      .to(copy1e, 2, { opacity: 0, ease: Power1.easeInOut }, "frame3")
      .to(windowImg, 2, { scale: 2, ease: Expo.easeIn }, "frame3")
      .to(
        [bg, bg_planet],
        4.5,
        { scale: 1, x: -30, y: 5, rotateZ: 0.1, ease: Expo.easeInOut },
        "frame3"
      )
      .to(
        ".sparkles",
        4.5,
        { scale: 1, y: -15, x: 0, opacity: 1, ease: Expo.easeInOut },
        "frame3"
      )
      .staggerTo(
        ".bigcopy",
        0.6,
        { opacity: 0, y: -20, ease: Power1.easeIn },
        0.2,
        "frame3+=.5"
      )
      .to(
        ".shootingStarContainer",
        0.8,
        { rotation: -50, ease: Expo.easeOut },
        "frame3+=2.5"
      )
      .add("frame4", 10.4)
      .staggerFrom(
        [copy2, copy3, copy4],
        1.5,
        { y: 20, scale: 0.6, opacity: 0, ease: Expo.easeOut },
        0.2,
        "frame4"
      )
      .add("frame5", 10.8)
      .from(
        ctaButton,
        2,
        { opacity: 0, y: 20, ease: Power1.easeInOut },
        "frame5"
      )
      .timeScale(1);

    this.ctaTimeline
      .add("start", 0)
      .to(
        ctaButton,
        0.25,
        { scale: 1.2, className: "+=over", ease: Back.easeOut },
        "start"
      );
  }

  start() {
    this.mainTimeline.play(0);
  }

  playCtaIn() {
    this.ctaTimeline.play();
  }

  playCtaOut() {
    this.ctaTimeline.reverse();
  }

  // TODO: STOP THE ANIMATION
  stop() {
    this.mainTimeline.stop();
    this.ctaTimeline.stop();
  }
}
