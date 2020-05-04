const boids = [];

function setup() {
    createCanvas(800, 800);
    for (let i = 0; i < 100; i++) {
        boids.push(new Boid());
    }
}

function draw() {
    background(50);

    for (let boid of boids) {
        boid.spaceWrapping();
        boid.flock(boids);
        boid.update();
        boid.graphic();
    }
}
