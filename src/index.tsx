import { h, render } from 'preact';
import Router from 'preact-router';
import { Link } from 'preact-router/match';
import Pattern from './pattern';
import life from './life.json'

const url = pat => '/' + pat.subcategory + '/' + pat.urlname

render((
    <Router>
        <article path='/'>
            <h1>Conway's Game of Life</h1>
            {life.map(pattern => (
                <nav><Link href={url(pattern)}>{pattern.title}</Link></nav>
            ))}
        </article>
        {life.map(pattern => (
            <Pattern path={url(pattern)} lifeData={pattern}/>
        ))}
    </Router>
), 
document.getElementById('app'));