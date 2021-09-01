class CannonBall {
  constructor(x, y) {
    var options = {
      isStatic: true
    };
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("./assets/cannonball.png");
    this.trajectory = [];
    World.add(world, this.body);
  }

  shoot() {
    var newAngle = cannon.angle - 0.5;
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();

    // Additional Activity
    if (this.body.velocity.x > 0 && pos.x > 10) {
      var position = [pos.x, pos.y];
      this.trajectory.push(position);
    }

    for (var i = 0; i < this.trajectory.length; i++) {
      image(this.image, this.trajectory[i][0], this.trajectory[i][1], 5, 5);
    }
  }
}
