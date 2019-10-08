enum DOTS_STYLE {
  POSITIVE_COLOR = '#111',
  NEGATIVE_COLOR = '#FFF',
  WIDTH = 15,
  HEIGHT = 15,
  MARGIN = 3,
}

const BACKGROUND_COLOR = '#AAA';

const Util = {
  getCoordinateX(x: number) {
    return (DOTS_STYLE.MARGIN + DOTS_STYLE.WIDTH) * x + DOTS_STYLE.MARGIN;
  },
  getCoordinateY(y: number) {
    return (DOTS_STYLE.MARGIN + DOTS_STYLE.HEIGHT) * y + DOTS_STYLE.MARGIN;
  },
};

export class GameOfLifeEngine {
  x: number;
  y: number;
  intervalKey: null | number;
  life: Array<Array<boolean>>;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  constructor(life: Array<Array<boolean>>) {
    const cvs = document.createElement('canvas');
    const ctx = cvs.getContext('2d');
    const x = life
      .map((children) => children.length)
      .reduce((prev, next) => Math.min(prev, next))
    ;
    const y = life.length;

    if (ctx) {
      cvs.width = Util.getCoordinateX(x);
      cvs.height = Util.getCoordinateY(y);

      this.x = x;
      this.y = y;
      this.life = life;
      this.canvas = cvs;
      this.context = ctx;
    } else {
      throw 'Failed to create context';
    }
  }

  clear() {
    this.context.fillStyle = BACKGROUND_COLOR;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawDot(x: number, y: number) {
    this.context.fillRect(
      Util.getCoordinateX(x),
      Util.getCoordinateY(y),
      DOTS_STYLE.WIDTH,
      DOTS_STYLE.HEIGHT,
    );
  }

  drawDots() {
    this.clear();
    this.life.forEach((children, i) => {
      children.forEach((yn, j) => {
        this.context.fillStyle = yn ? DOTS_STYLE.POSITIVE_COLOR : DOTS_STYLE.NEGATIVE_COLOR;
        this.drawDot(j, i);
      });
    });
  }

  isSurviveNextGeneration(x: number, y: number, isSurvive: boolean) {
    const life = this.life;
    const edgeX = this.x - 1;
    const edgeY = this.y - 1;
    const count = (
      Number(0 < y && 0 < x && life[y - 1][x - 1])
      + Number(0 < y && life[y - 1][x])
      + Number(0 < y && x < edgeX && life[y - 1][x + 1])
      + Number(0 < x && life[y][x - 1])
      + Number(x < edgeX && life[y][x + 1])
      + Number(y < edgeY && 0 < x && life[y + 1][x - 1])
      + Number(y < edgeY && life[y + 1][x])
      + Number(y < edgeY && x < edgeX && life[y + 1][x + 1])
    );
    return (isSurvive && (count === 2 || count === 3)) || (!isSurvive && count === 3);
  }

  startLife() {
    this.stopLife();
    this.intervalKey = window.setInterval(() => {
      this.drawDots();
      const life = this.life;
      this.life = life.map((children, i) => (
        children.map((yn, j) => (
          this.isSurviveNextGeneration(j, i, yn)
        ))
      ));
    }, 500);
  }

  stopLife() {
    if (this.intervalKey !== null) {
      clearInterval(this.intervalKey);
      this.intervalKey = null;
    }
  }
}
