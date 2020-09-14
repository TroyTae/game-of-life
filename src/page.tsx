import { h } from 'preact';
import { RoutableProps } from 'preact-router';
import { useRef, useEffect } from 'preact/hooks';
import { GameOfLifeEngine } from './engine';

const ISSUE_LINK = 'https://github.com/TroyTae/game-of-life/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22';

interface PageProps extends RoutableProps {
  lifeData: LifeData;
}

export default function Page({
  lifeData: {
    title,
    life,
  },
}: PageProps) {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvas.current) {
      const engine = new GameOfLifeEngine(
        canvas.current,
        life,
      );
      engine.startLife();
      return () => engine.stopLife();
    }
  }, [canvas]);

  return (
    <article>
      <h1>{title}</h1>
      {life.reduce((s, c) => s + c.reduce((s, c) => s + c, 0), 0) === 1 ? (
        <p>
          This pattern is not complete yet!<br />
          <a target='_blank' href={ISSUE_LINK}>Please help us :)</a>
        </p>
      ) : <canvas ref={canvas} />}
    </article>
  );
}
