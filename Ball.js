class Ball extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    //ellipseMode(CENTER);
    ellipse(this.body.position.x, this.body.position.y, 50, 50);

    super.display();

  }
}