import "../css/style.css";
import { Tree } from "./tree.js";
import { subscribe } from "./store.js";

class App {
  constructor() {
    this.initCanvas();
    this.resizeCanvas();
    window.addEventListener("resize", this.resizeCanvas, false);
    window.addEventListener("click", this.click, false);
    this.initReset();
    subscribe((state) => {
      state.isOn ? this.disableReset() : this.ableReset();
    });
    subscribe((state) => {
      state.isOn && this.hideGreeting();
    });
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

  initReset = () => {
    const reset = document.getElementById("reset");
    reset.onclick = (e) => {
      this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
      e.stopPropagation();
    };
  };

  disableReset = () => {
    const reset = document.getElementById("reset");
    reset.style.animation = "rotation 2s infinite linear";
    reset.onclick = (e) => {
      e.stopPropagation();
    };
    reset.style.cursor = "default";
    reset.style.opacity = "0.5";
  };

  ableReset = () => {
    const reset = document.getElementById("reset");
    reset.style.animationPlayState = "paused";
    reset.onclick = (e) => {
      this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
      e.stopPropagation();
    };
    reset.style.cursor = "pointer";
    reset.style.opacity = "1.0";
  };

  hideGreeting = () => {
    const greeting = document.getElementById("greeting");
    greeting.style.display = "none";
  };
}

window.onload = () => {
  new App();
};
