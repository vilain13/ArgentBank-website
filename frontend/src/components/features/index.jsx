import React from 'react';
import data from '../../datas/features-list.json'; 
import "./features.css";

function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {data.map(({ id, img, alt, title, paragraph }) => {
        const imageSrc = require(`../../assets/img/${img}`);  // require permet de définir la racine du chemin  sur src et non public pour les img
        return (
          <div key={id} className="feature-item">
            <img src={imageSrc} alt={alt} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{paragraph}</p>
          </div>
        );
      })}
    </section>
  );
}

export default Features;