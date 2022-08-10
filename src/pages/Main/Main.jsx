import React, { Fragment } from 'react';

import { SearchInput, BeersList, Pagination, Loader } from '../../components';

import styles from './Main.module.scss';
import { useMain } from './Main.hook';

const Main = () => {
   const {
      beerData,
      isLoading,
      allPagesCount,
      currentPageIndex,
      currentPageBeerData,

      changePage,
      setBeerData,
      setIsLoading,
   } = useMain();

   return (
      <div className={styles.cards}>
         <h1 className={styles.cards__heading}>Beers catalog</h1>

         <SearchInput page={currentPageIndex} setIsLoading={setIsLoading} setBeerData={setBeerData} />

         {isLoading ? (
            <Loader />
         ) : (
            <Fragment>
               {beerData && currentPageBeerData && (
                  <div>
                     <BeersList beers={currentPageBeerData} />
                     {beerData.length >= 9 && (
                        <Pagination
                           allPagesCount={allPagesCount}
                           currentPageIndex={currentPageIndex}
                           changePage={changePage}
                        />
                     )}
                     <div className={styles.cards__footer}>По вашему запросу нашлось {beerData.length} совпадений </div>
                  </div>
               )}
            </Fragment>
         )}
      </div>
   );
};

export default React.memo(Main);
