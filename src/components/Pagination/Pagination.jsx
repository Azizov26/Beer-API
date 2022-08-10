import React from 'react';
import styles from './Pagination.module.scss';

export const Pagination = ({ allPagesCount, currentPageIndex, changePage }) => {
   const pagesArray = new Array(allPagesCount).fill('').map((_, index) => index + 1);

   return (
      <div className={styles.wrapper}>
         {pagesArray.map((pageNumber) => (
            <span
               key={pageNumber}
               onClick={() => changePage(pageNumber)}
               className={currentPageIndex === pageNumber ? styles.wrapper__current : styles.wrapper__page}>
               {pageNumber}
            </span>
         ))}
      </div>
   );
};
