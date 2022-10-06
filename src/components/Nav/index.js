import React, { useEffect } from 'react';

const Nav = (props) => {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected,
    } = props;

    useEffect(() => {
        document.title = currentCategory.name;
    }, [currentCategory])

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
                    
                        <li className={`${currentCategory.name === category.name && !contactSelected && 'navActive'}`} key={category.name}>
                            <span onClick={() => {
                                setCurrentCategory(category)
                                setContactSelected(false);
                            }}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                     <li className={`mx-2 ${contactSelected && "navActive"}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;