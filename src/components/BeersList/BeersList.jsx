import React from 'react';

import { BeerCard } from '../BeerCard';
import styles from './BeersList.module.scss';

export const BeersList = ({ beers }) => (
   <div className={styles.beersList}>
      <div className={styles.beersList__content}>
         {beers.map((beer) => (
            <BeerCard key={beer.id} beer={beer} />
         ))}
      </div>
   </div>
);
