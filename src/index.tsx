import { h, render } from 'preact';
import Router from 'preact-router';
import { Link } from 'preact-router/match';
import Pattern from './pattern';
import life from './life.json'

// ===================== FULLTREE PARSE =====================

function groupByKey(key, list) {
    // Get unique values of key
    let values = list.map(obj => obj[key])
    values = new Set(values)
    values = Array.from(values.values())

    // Organize list into groups by values of key
    return values.map(value => ({
        key: value,
        list: list.filter(obj => obj[key] === value)
    }))
}

let lifeTree = groupByKey('category', life)
lifeTree = lifeTree.map(cat => ({
    ...cat,
    list: groupByKey('subcategory', cat.list)
}))

// Get full tree
console.log(lifeTree)

// ==========================================================

const url = pat => '/' 
    + pat.category + '/' 
    + (pat.subcategory ? pat.subcategory + '/' : '')
    + pat.urlname

const title = name => name
    .split('-')
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join(' ')

render((
    <Router>
        <article path='/'>
            <h1>Conway's Game of Life</h1>
            {lifeTree.map(category => (
                <div key={category.key}>
                    <h2>{title(category.key)}</h2>
                    {category.list.map(subcategory => (
                        <div key={subcategory.key}>
                            {subcategory.key && <h3>{title(subcategory.key)}</h3>}
                            {subcategory.list.map(pattern => (
                                <nav>
                                    <Link href={url(pattern)}>{pattern.title}</Link>
                                </nav>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </article>
        {life.map(pattern => (
            <Pattern 
                path={url(pattern)}
                lifeData={pattern}/>
        ))}
    </Router>
), 
document.getElementById('app'));