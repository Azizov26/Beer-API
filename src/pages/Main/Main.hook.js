import { useCallback, useEffect, useState } from 'react';

export const useMain = () => {
   const [beerData, setBeerData] = useState(null);
   const [currentPageBeerData, setCurrentPageBeerData] = useState(null);
   const [isLoading, setIsLoading] = useState(false);

   const [currentPageIndex, setCurrentPageIndex] = useState(1);
   const [allPagesCount, setAllPagesCount] = useState(null);

   const MAX_ITEMS_PER_PAGE = 9;

   useEffect(() => {
      if (!beerData) return;

      const pageCount = Math.ceil(beerData.length / MAX_ITEMS_PER_PAGE);
      setAllPagesCount(pageCount);

      const currentPageData = beerData.slice(0, 9);
      setCurrentPageBeerData(currentPageData);
   }, [beerData]);

   useEffect(() => {
      if (!beerData) return;

      const startItem = MAX_ITEMS_PER_PAGE * (currentPageIndex - 1);
      const finishItem = MAX_ITEMS_PER_PAGE * currentPageIndex;

      const pageBeerData = beerData.slice(startItem, finishItem);

      setCurrentPageBeerData(pageBeerData);
   }, [beerData, currentPageIndex]);

   const changePage = useCallback((pageIndex) => setCurrentPageIndex(pageIndex), []);

   return {
      beerData,
      isLoading,
      allPagesCount,
      currentPageIndex,
      currentPageBeerData,

      changePage,
      setBeerData,
      setIsLoading,
   };
};
