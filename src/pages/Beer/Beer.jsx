import React from 'react';
import { RiReplyAllLine } from 'react-icons/ri';

import { Loader } from '../../components';
import styles from './Beer.module.scss';
import { useBeer } from './Beer.hook';

const Beer = () => {
   const { info, onClick } = useBeer();

   if (!info) {
      return (
         <div>
            <h1>Loading</h1>
            <Loader />
         </div>
      );
   }

   return (
      <div className={styles.page}>
         <div className={styles.exit} onClick={onClick}>
            <RiReplyAllLine />
         </div>

         <div>
            <div className={styles.list}>
               <h2 className={styles.list__heading}>{info.name}</h2>

               <div className={styles.list__tagline}>
                  <h3 className={styles.list__tagline__head}>{info.tagline}</h3>

                  <div className={styles.list__content}>
                     <img alt={`${info.name} beer`} className={styles.list__content__img} src={info.image_url} />
                     <div className={styles.list__content__description}>{info.description}</div>
                  </div>

                  <div className={styles.list__footer}>
                     <div className={styles.list__footer__food}> {info.food_pairing}</div>
                     <div className={styles.list__footer__abv}> ABV : {info.abv}</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default React.memo(Beer);
