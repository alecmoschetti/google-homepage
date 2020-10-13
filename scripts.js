Zfont.init(Zdog);

let illo = new Zdog.Illustration({
    element: '.zdog-canvas',
    dragRotate: true,
});

let font = new Zdog.Font({
    src: 'Poppins-Regular.ttf'
});

let text = new Zdog.TextGroup({
    addTo: illo,
    font: font,
    value: 'Google',
    fontSize: 125,
    textAlign: 'center',
    textBaseline: 'middle',
    fill: true,
    stroke: 4,
});

let shadow = text.copy({
    addTo: illo,
    translate: {z: -6},
    color: '#aab',
  });

// Settings for the wave animation
let t = 0;
let tStep = 5;
let amplitude = 0.75;
let frequency = 80;

function wave(group) {
    group.children.forEach(shape => {
      let x = shape.translate.x + t;
      shape.translate.y += amplitude * Math.sin(x / frequency);
    });
}

function animate() {
    wave(text);
    wave(shadow);
    t += tStep; 
    illo.updateRenderGraph();
    requestAnimationFrame(animate);
}

animate();