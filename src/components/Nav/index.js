import React from 'react';

const Nav = () => {

    const categories = [
        {
            name: "About"
        },
        {
            name: "Portfolio"
        },
        {
            name: "Contact"
        },
        {
            name: "Resume"
        }
    ];

    const categorySelected = (name) => {
        console.log(name)
    };

    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="set your heart ablaze">❤️‍🔥</span> Jaryd Knight
                </a>
            </h2>
            <nav>
                <ul>
                    {categories.map((category) => (
                    
                        <li key={category.name}>
                            <span onClick={() => categorySelected(category.name)}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;