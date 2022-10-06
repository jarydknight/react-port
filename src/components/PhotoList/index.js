import React, { useState } from "react";

const PhotoList = ({ category }) => {
    const [photos] = useState([
      {
        name: "",
        category: "About",
        deployed: "",
        repo: "",
      },
      {
        name: "Travel Blog",
        category: "Portfolio",
        deployed: "https://cryptic-fortress-47050.herokuapp.com/home",
        repo: "https://github.com/jarydknight/travel-blog",
      },
      {
        name: "Music Box",
        category: "Portfolio",
        deployed: "https://beca-d.github.io/music-box/",
        repo: "https://github.com/jarydknight/music-box",
      },
      {
        name: "Text Editor",
        category: "Portfolio",
        deployed: "https://mighty-brushlands-68890.herokuapp.com",
        repo: "https://github.com/jarydknight/text-editor",
      },
      {
        name: "Note Taker",
        category: "Portfolio",
        deployed: "https://note-taker-no-jutsu.herokuapp.com/",
        repo: "https://github.com/jarydknight/note-taker",
      },
      {
        name: "",
        category: "Resume",
        deployed: "",
        repo: "",
      },
    ]);
  
    const currentPhotos = photos.filter((photo) => photo.category === category);
  
    if (category === "About") {
      return (
        <div>
          <div className="">
            {currentPhotos.map((image, i) => (
              <div key={image.name}>
                <img
                  src={require(`../../assets/images/${category}/${i}.jpg`).default}
                  alt={image.name}
                  className=""
                />
                <h1 id="about">Hi, I'm Jaryd</h1>
                <p>I love to build web apps</p>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (category === "Portfolio") {
      return (
        <div>
          <div>
            {currentPhotos.map((image, i) => (
              <div key={image.name}>
                <h2>{image.name}</h2>
                <h6>
                  <a href={image.deployed}> Deployed Application </a>|
                  <a href={image.repo}> GitHub Repository </a>
                </h6>
                <img
                  src={require(`../../assets/images/${category}/${i}.jpg`).default}
                  alt={image.name}
                  className="img-thumbnail mx-1"
                />
              </div>
            ))}
          </div>
        </div>
      );
    } else if (category === "Resume") {
      return (
        <div>
          <div>
            {currentPhotos.map((image, i) => (
              <div key={image.name}>
                <h5>Proficiencies</h5>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Template Engines</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>Git</li>
                </ul>
                <p>
                <a href="TODO" target="_blank" rel="noopener noreferrer">Downloadable Resume</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };
  
  export default PhotoList;