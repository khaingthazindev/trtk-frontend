import {useDebugValue, useEffect, useState} from "react";

export default function useFetch(url) {

   useDebugValue(url ? url : 'no url');

   const [data, setData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

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