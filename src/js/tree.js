import { Branch } from "./branch.js";

export class Tree {
  constructor(ctx, posX, posY) {
    this.ctx = ctx;
    this.posX = posX;
    this.posY = posY;
    this.branches = [];
    this.depth = 5;

    this.init();
  }

  init = () => {
    this.createBranch(this.posX, this.posY, -90, 0);
    this.draw(this.ctx);
  };

  createBranch = (startX, startY, angle, depth) => {
    if (depth === this.depth) return;

    const len = 100; // 길이 100으로 변경
    const endX = startX + this.cos(angle) * len;
    const endY = startY + this.sin(angle) * len;

    this.branches.push(new Branch(startX, startY, endX, endY));

    this.createBranch(endX, endY, angle - 30, depth + 1);
    this.createBranch(endX, endY, angle + 30, depth + 1);
  };

  draw = (ctx) => {
    for (let i = 0; i < this.branches.length; i++) {
      this.branches[i].draw(ctx);
    }
  };

  cos = (angle) => {
    return Math.cos(this.degToRad(angle));
  };
  sin = (angle) => {
    return Math.sin(this.degToRad(angle));
  };
  degToRad = (angle) => {
    return (angle / 180.0) * Math.PI;
  };
}
