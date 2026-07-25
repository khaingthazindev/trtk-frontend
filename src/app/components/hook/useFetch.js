import {useEffect, useState} from "react";

export default function useFetch(url) {
   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   console.log('useFetch');

   useEffect(() => {
      fetch(url)
      .then(response => response.json())
      .then(json => {
         setIsLoading(false);
         setData(json);
      })
   }, []);

   return [data, isLoading];
}