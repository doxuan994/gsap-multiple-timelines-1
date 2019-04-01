let water = document.getElementById('water');
let water2 = document.getElementById('water-2');
let cloud = document.getElementById('cloud');

let starOne = document.getElementById('star-one');
let starTwo = document.getElementById('star-two');
let starThree = document.getElementById('star-three');
let starFour = document.getElementById('star-four');



let snowTopLayer = document.getElementById('snow-top-layer');
let snowBottomLayer = document.getElementById('snow-bottom-layer');



let daytimeGradient = document.getElementById('daytime-gradient');
let daytimeGradientStops = daytimeGradient.getElementsByTagName('stop');

let nighttimeOverlay = document.getElementById('nighttime-overlay');

let sun = document.getElementById('sun');
let moon = document.getElementById('moon');





// Total animation time (in seconds).
let day_night_cycle_time = 15;

// Time the animation stops before playing in reverse.
let animation_delay = day_night_cycle_time / 4;

// Easing
let animation_ease = Linear.easeNone;

// Timeline Setups
let animation_toNight = new TimelineMax({ repeat: -1, yoyo: true, repeatDelay: animation_delay });
let animation_water = new TimelineMax({ repeat: -1, yoyo: true });
let animation_cloud = new TimelineMax({ repeat: -1, yoyo: true });
let animation_stars = new TimelineMax({ repeat: -1, yoyo: true });
let animation_snowTop = new TimelineMax({ repeat: -1, repeatDelay: 0 });
let animation_snowBottom = new TimelineMax({ repeat: -1, repeatDelay: 0 });

// Water animation
animation_water.to(water, 1, { y: -12, ease: animation_ease }, 0);
animation_water.to(water2, 1, { y: 12, ease: animation_ease }, 0);


// Cloud animation

animation_cloud.to(cloud, 1, { x: -2, y: 1, scale: 0.95, rotation: 1, ease: animation_ease}, 0);


// Stars animation
animation_stars
.to(starOne, 0.5, { opacity: 0.5, ease: animation_ease }, 0 )
.to(starTwo, 0.5, { opacity: 0.5, ease: animation_ease }, 1 )
.to(starThree, 0.5, { opacity: 0.5, ease: animation_ease }, 0.5 )
.to(starFour, 0.5, { opacity: 0.5, ease: animation_ease }, 1.5 );




// Snow animation

animation_snowTop.to(snowTopLayer, 7, { attr: { transform: "translate(24 -108)" }, ease: animation_ease }, 0);
animation_snowBottom.to(snowBottomLayer, 15, { attr: { transform: "translate(13 140)" }, ease: animation_ease }, 0);




// Night Time Animation

animation_toNight


    // Animate the background gradient
    .staggerTo(daytimeGradientStops, day_night_cycle_time, {
        cycle: {
            stopColor: ['#060414','#416584']
        },
        ease: animation_ease
    }, 0)


    // Animate the night time ovelay
    .to(nighttimeOverlay, day_night_cycle_time, { opacity: 1, ease: animation_ease}, 0)


    // Animate the sun
    .to(sun, day_night_cycle_time / 1.25, {
        scale: 0.9,
        attr: { cx: "753", cy: "697" },
        ease: animation_ease
    }, 0)


    // Animate the moon
    .to(moon, day_night_cycle_time / 2, {
        scale: 0.9,
        attr: { cx: "174.5", cy: "202.5" },
        ease: animation_ease
    }, 0)

    .to(moon, day_night_cycle_time / 2, {
        scale: 0.9,
        attr: { cx: "410.5", cy: "114.5" },
        ease: animation_ease
    }, day_night_cycle_time / 2)

    // Animate the Stars
    .to(stars, day_night_cycle_time / 2, {
        opacity: 1,
    }, day_night_cycle_time / 2)
    .from(stars, day_night_cycle_time - (day_night_cycle_time / 4), {
        y: 150,
        rotation: -15,
        ease: animation_ease
    }, day_night_cycle_time / 4);













































//
