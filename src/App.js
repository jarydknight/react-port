import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Footer from './components/Footer'

function App() {

  const [categories] = useState([
    {
        name: "About",
        description: ""
    },
    {
        name: "Portfolio",
        description: "Applications I have created"
    },
    {
        name: "Resume",
        description: ""
    }
]);

const [currentCategory, setCurrentCategory] = useState(categories[0])
const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className="App">
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}>
      </Nav>

      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
          </>
        ) : (
          <>
            <ContactForm></ContactForm>
          </>
        )}
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
