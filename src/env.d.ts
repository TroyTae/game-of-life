declare type Life = 0 | 1;

declare type LifeData = {
  title: string;
  life: Life[][];
};

declare module '*.json';
