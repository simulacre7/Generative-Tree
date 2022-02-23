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

    ctx.moveTo(this.startX, this.startY); // 선의 시작 위치 지정
    ctx.lineTo(this.endX, this.endY); // 선의 끝 위치 지정

    ctx.lineWidth = this.lineWidth; // 선의 두깨
    ctx.fillStyle = this.color;
    ctx.strokeStyle = this.color;

    ctx.stroke();
    ctx.closePath();
  };
}
