export class Branch {
  constructor(startX, startY, endX, endY) {
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
    this.color = "#000000";
    this.lineWidth = 10;
  }

  draw = (ctx) => {
    ctx.beginPath();

    ctx.moveTo(this.startX, this.startY);
    ctx.lineTo(this.endX, this.endY);

    ctx.lineWidth = this.lineWidth;
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.color;

    ctx.stroke();
    ctx.closePath();
  };
}
