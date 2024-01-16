import React from 'react'

function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className='container'>
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">XRecipe</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Create Recipe</a></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar