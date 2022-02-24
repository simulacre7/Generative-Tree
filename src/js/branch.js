import { getState } from "./store.js";

export class Branch {
  constructor(startX, startY, endX, endY, lineWidth) {
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
    this.lineWidth = lineWidth;
    const { frame, color, endColor } = getState();
    this.color = color;
    this.endColor = endColor;

    // For animation
    this.frame = frame;
    this.cntFrame = 0;
    this.gapX = (this.endX - this.startX) / this.frame;
    this.gapY = (this.endY - this.startY) / this.frame;
    this.currentX = this.startX;
    this.currentY = this.startY;
  }

  draw = (ctx, isEnd) => {
    if (this.cntFrame === this.frame) return true;

    ctx.beginPath();

    this.currentX += this.gapX;
    this.currentY += this.gapY;

    ctx.moveTo(this.startX, this.startY);
    ctx.lineTo(this.currentX, this.currentY);

    if (this.lineWidth < 3) {
      ctx.lineWidth = 0.5;
    } else if (this.lineWidth < 7) {
      ctx.lineWidth = this.lineWidth * 0.7;
    } else if (this.lineWidth < 10) {
      ctx.lineWidth = this.lineWidth * 0.9;
    } else {
      ctx.lineWidth = this.lineWidth;
    }
    ctx.fillStyle = isEnd ? this.endColor : this.color;
    ctx.strokeStyle = isEnd ? this.endColor : this.color;

    ctx.stroke();
    ctx.closePath();

    this.cntFrame++;

    return false; // 가지를 다 안그렸으면 false를 리턴
  };
}
