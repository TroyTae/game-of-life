import { h, render } from 'preact';
import Router from 'preact-router';
import { Link } from 'preact-router/match';
import Pattern from './pattern';
import life from './life.json'

// ===================== FULLTREE PARSE =====================

function organizeBySubcategory(sublife) {
    // Get unique subcategories
    let subcategories = sublife.map(pat => pat.subcategory)
    subcategories = new Set(subcategories)
    subcategories = Array.from(subcategories.values())

    // Organize patterns by subcategories
    return subcategories.map(cat => ({
        subcategory: cat,
        patterns: sublife.filter(pat => pat.subcategory === cat)
    }))
}

// Get unique categories
let categories = life.map(pat => pat.category)
categories = new Set(categories)
categories = Array.from(categories.values())

// Organize patterns by categories
let lifeTree = categories.map(cat => ({
    category: cat,
    subcategories: organizeBySubcategory(
        life.filter(pat => pat.category === cat)
    )
}))

// Get full tree
console.log(lifeTree)

// ==========================================================

const url = pat => '/' 
    + pat.category + '/' 
    + (pat.subcategory ? pat.subcategory + '/' : '')
    + pat.urlname

render((
    <Router>
        <article path='/'>
            <h1>Conway's Game of Life</h1>
            {lifeTree.map(category => (
                <div>
                    <h2>{category.category}</h2>
                    {category.subcategories.map(subcategory => (
                        <div>
                            {subcategory.subcategory && <h3>{subcategory.subcategory}</h3>}
                            {subcategory.patterns.map(pattern => (
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