import { BASE_URL } from '../../constants';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const useBeer = () => {
   const router = useNavigate();
   const { id: beersId } = useParams();
   const [info, setInfo] = useState(null);

   useEffect(() => {
      const request = async () =>
         await axios
            .get(`${BASE_URL}/${beersId}`)
            .then(({ data }) => setInfo(data[0]))
            .catch((error) => console.log(error));

      request();
   }, [beersId, setInfo]);

   const onClick = () => router(`/`);

   return {
      info,
      onClick,
		
   };
};
