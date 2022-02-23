import { Branch } from "./branch.js";

export class Tree {
  constructor(ctx, posX, posY) {
    this.ctx = ctx;
    this.posX = posX;
    this.posY = posY;
    this.branches = [];

    this.init();
  }

  init = () => {
    this.createBranch(this.posX, this.posY);
    this.draw(this.ctx);
  };

  createBranch = (startX, startY) => {
    const len = 200;
    const endX = startX;
    const endY = startY - len;

    this.branches.push(new Branch(startX, startY, endX, endY));
  };

  draw = (ctx) => {
    for (let i = 0; i < this.branches.length; i++) {
      this.branches[i].draw(ctx);
    }
  };
}
