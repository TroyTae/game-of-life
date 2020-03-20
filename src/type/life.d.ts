declare type Life = 0 | 1;

declare type LifePattern = {
  title: string;
  life: Life[][];
  deadColor?: string;
  surviveColor?: string;
  backgroundColor?: string;
}
