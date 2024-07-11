import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

    const navigation = [
        { path: "/", name: "List of Recipes" },
        { path: "/add", name: "Add New Recipe" }
    ]


    return (
        <header>
            <h1>Book of Recipes</h1>
            <nav>
                {navigation.map(nav => (
                        <NavLink key={nav.name}
                            to={nav.path} >
                            {nav.name}
                        </NavLink>
                    ))
                }
            </nav>
        </header>
    )
}

export default Header