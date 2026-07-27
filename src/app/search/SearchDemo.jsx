'use client';

import {Suspense, use, useDeferredValue, useState} from "react";
import {fetchData} from "@/app/search/data";

function ShowResult({searchQuery}) {
   const searchResult = use(fetchData(`/search?q=${searchQuery}`));

   if (searchResult.length === 0) {
      return <p>No matches for <i>{searchQuery}</i></p>;
   }

   return <ul>
      {
         searchResult.map(album => <li key={album.id}>{album.title}</li>)
      }
   </ul>;
}

export default function SearchDemo() {
   const [searchQuery, setSearchQuery] = useState('');
   const deferredQuery = useDeferredValue(searchQuery);

   return (<div>
      <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <Suspense fallback={<h2>Loading...</h2>}>
         <ShowResult searchQuery={deferredQuery}/>
      </Suspense>
   </div>)
}