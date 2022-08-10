import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './BeerCard.module.scss';

const BeerCard = ({ beer }) => {
   const router = useNavigate();

   const textReplace = useCallback((text) => {
      const str = text.replace(/\s/g, '');
      return str.length > 140 ? text.slice(0, 140) + '...' : text;
   }, []);

   const onClick = () => router(`/beers/${beer.id}`);

   return (
      <div className={styles.item} onClick={onClick}>
         <div className={styles.item__content}>
            <h4 className={styles.item__content__heading}>{beer.name}</h4>
            <div>
               {beer.beer_name}
               <div className={styles.item__description}>{textReplace(beer.description)}</div>
            </div>
         </div>

         <div>
            <img src={beer.image_url} className={styles.item__image} alt={`${beer.name} logo`} />
         </div>
      </div>
   );
};

export default React.memo(BeerCard);
