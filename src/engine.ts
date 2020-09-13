enum DOTS_STYLE {
  WIDTH = 16,
  HEIGHT = 16,
  MARGIN = 2,
  DEAD_COLOR = '#FFF',
  SURVIVE_COLOR = '#000',
}

const BACKGROUND_COLOR = '#FFF';

const getCoordinateX = (x: number): number => {
  return (DOTS_STYLE.MARGIN + DOTS_STYLE.WIDTH) * x + DOTS_STYLE.MARGIN;
};

const getCoordinateY = (y: number): number => {
  return (DOTS_STYLE.MARGIN + DOTS_STYLE.HEIGHT) * y + DOTS_STYLE.MARGIN;
};

export class GameOfLifeEngine {
  public life: Life[][];
  public canvas: HTMLCanvasElement;
  public context: CanvasRenderingContext2D;
  private intervalKey: null | number = null;

  constructor(cvs: HTMLCanvasElement, life: Life[][]) {
    const ctx = cvs.getContext('2d');

    if (ctx) {
      cvs.width = getCoordinateX(life[0].length);
      cvs.height = getCoordinateY(life.length);

      this.life = life;
      this.canvas = cvs;
      this.context = ctx;
    } else {
      throw 'Failed to create context';
    }
  }

  public clear(): void {
    this.context.fillStyle = BACKGROUND_COLOR;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  public startLife(): void {
    if (!this.intervalKey) {
      this.drawDots();
      this.intervalKey = window.setInterval(() => {
        this.life = this.life.map((children, i) => children.map((isSurvive, j) => this.nextLife(j, i, isSurvive)));
        this.drawDots();
      }, 500);
    }
  }

  public stopLife(): void {
    if (this.intervalKey !== null) {
      clearInterval(this.intervalKey);
      this.intervalKey = null;
    }
  }

  protected drawDot(x: number, y: number): void {
    this.context.fillRect(getCoordinateX(x), getCoordinateY(y), DOTS_STYLE.WIDTH, DOTS_STYLE.HEIGHT);
  }

  protected drawDots(): void {
    this.clear();
    this.life.forEach((children, i) => {
      children.forEach((isSurvive, j) => {
        this.context.fillStyle = isSurvive ? DOTS_STYLE.SURVIVE_COLOR : DOTS_STYLE.DEAD_COLOR;
        this.drawDot(j, i);
      });
    });
  }

  protected isSurvive(x: number, y: number): Life {
    return this.life[y] && this.life[y][x] ? 1 : 0;
  }

  protected nextLife(x: number, y: number, isSurvive: Life): Life {
    const count = this.isSurvive(x - 1, y - 1) + this.isSurvive(x, y - 1) + this.isSurvive(x + 1, y - 1) + this.isSurvive(x - 1, y) + this.isSurvive(x + 1, y) + this.isSurvive(x - 1, y + 1) + this.isSurvive(x, y + 1) + this.isSurvive(x + 1, y + 1);
    return count === 3 || (isSurvive && count === 2) ? 1 : 0;
  }
}
