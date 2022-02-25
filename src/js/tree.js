import { Branch } from "./branch.js";

export class Tree {
  constructor(ctx, posX, posY) {
    this.ctx = ctx;
    this.posX = posX;
    this.posY = posY;
    this.branches = [];
    this.depth = 14;

    this.cntDepth = 0; // depth별로 그리기 위해 현재 depth 변수 선언
    this.animation = null; // 현재 동작하는 애니메이션

    this.init();
  }

  init = () => {
    // depth별로 가지를 저장하기 위해 branches에 depth만큼 빈배열 추가
    for (let i = 0; i < this.depth; i++) {
      this.branches.push([]);
    }
    this.createBranch(this.posX, this.posY, -90, 0);
    this.draw(this.ctx);
  };

  createBranch = (startX, startY, angle, depth) => {
    if (depth === this.depth) return;

    // random 함수를 만들어 가지들의 길이를 랜덤으로 준다.
    // depth가 0 즉, 나무 기둥을 그릴땐 최소, 최대 길이를 달리한다.
    const len = depth === 0 ? this.random(10, 13) : this.random(0, 11);

    // 현재 depth와 나뭇가지의 길이가 반비례하도록 한다.
    const endX = startX + this.cos(angle) * len * (this.depth - depth);
    const endY = startY + this.sin(angle) * len * (this.depth - depth);

    this.branches[depth].push(
      new Branch(startX, startY, endX, endY, this.depth - depth)
    );

    this.createBranch(endX, endY, angle - this.random(15, 23), depth + 1);
    this.createBranch(endX, endY, angle + this.random(15, 23), depth + 1);
  };

  draw = (ctx) => {
    if (this.cntDepth === this.depth) {
      cancelAnimationFrame(this.animation);
    }

    for (let i = this.cntDepth; i < this.branches.length; i++) {
      let pass = true;

      for (let j = 0; j < this.branches[i].length; j++) {
        pass = this.branches[i][j].draw(
          this.ctx,
          this.cntDepth === this.depth - 1
        );
      }

      if (!pass) break;
      this.cntDepth++;
    }

    this.animation = requestAnimationFrame(() => this.draw(ctx));
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
  random = (min, max) => {
    return min + Math.floor(Math.random() * (max - min + 1));
  };
}
