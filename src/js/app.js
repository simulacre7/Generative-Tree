import "../css/style.css";
import { Tree } from "./tree.js";

class App {
  constructor() {
    this.initCanvas();
    this.resizeCanvas();
    window.addEventListener("resize", this.resizeCanvas, false);
    window.addEventListener("click", this.click, false);
    this.initTooltip();
    this.initReset();
  }
  initCanvas = () => {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");
    this.pixelRatio = window.devicePixelRatio > 1 ? window.devicePixelRatio : 1; // For retina display
  };

  resizeCanvas = () => {
    this.stageWidth = document.documentElement.clientWidth;
    this.stageHeight = document.documentElement.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
  };

  click = (event) => {
    const { clientX } = event;
    new Tree(this.ctx, clientX, this.stageHeight);
  };

  initTooltip = () => {
    const tooltip = document.getElementById("tooltip");
    window.onmousemove = (e) => {
      tooltip.style.top = e.clientY + "px";
      tooltip.style.left = e.clientX + "px";
    };
  };

  initReset = () => {
    const reset = document.getElementById("reset");
    reset.onclick = (e) => {
      this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
      e.stopPropagation();
    };
  };
}

window.onload = () => {
  new App();
};
