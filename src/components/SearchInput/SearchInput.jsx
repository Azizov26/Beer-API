import React, { useState, useCallback } from 'react';
import { GoSearch } from 'react-icons/go';
import axios from 'axios';

import styles from './SearchInput.module.scss';
import { BASE_URL } from '../../constants';

const SearchInput = ({ setBeerData, setIsLoading }) => {
   const [filter, setFilter] = useState('');

   const searchBeers = useCallback(async (e) => {
      if (e.key === 'Enter' || e.button === 0) {
         e.preventDefault()
         setIsLoading(true);

        await axios
            .get(`${BASE_URL}?beer_name=${filter}&per_page=${80}`)
            .then((res) => setBeerData(res.data))
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false));
      }
   }, [filter, setBeerData, setIsLoading]);

   return (
      <div className={styles.search}>
         <button className={styles.search__button} onClick={searchBeers}>
            <GoSearch />
         </button>

         <input
            className={styles.search__input}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search..."
            onKeyDown={searchBeers}
         />
      </div>
   );
};

export default React.memo(SearchInput);
