import { Tree } from "./tree.js";

class App {
  constructor() {
    this.initCanvas();
    this.resizeCanvas();
    window.addEventListener("resize", this.resizeCanvas, flase);
    new Tree(this.ctx, this.stageWidth / 2, this.stageHeight);
  }

  initCanvas = () => {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.pixelRatio = window.devicePixelRatio > 1 ? window.devicePixelRatio : 1; // For retina display
  };

  resizeCanvas = () => {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
  };
}

window.onload = () => {
  new App();
};
