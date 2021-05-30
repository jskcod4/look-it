import React from 'react';
import styles from './request-card.module.scss';

export const RequestCard: React.FC<{}> = () => {
  return (
    <div className={styles.requestContainer}>
      <h2 className="title" title="WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW">
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWwww
      </h2>

      <h4 className="sub-title">Fecha de publicacion: 30 May 2021</h4>

      <span className="other-title">Categoria/Articulos Electronicos</span>

      <img
        src="https://picsum.photos/200"
        alt="Imagenes de referencia de teclado"
      />

      <div className="container-options">
        <div className="container-option-left">
          <span>Precio de disposicion</span>

          <h1>$120</h1>
        </div>

        <div className="container-option-right">
          <button>Ver detalles</button>
        </div>
      </div>
    </div>
  );
};
