'use client';

import {useState} from 'react';

function Artist({artist, onDelete, onUpdate}) {
   const [isUpdating, setIsUpdating] = useState(false);
   const [name, setName] = useState(artist.name);
   const onEditHandler = () => {
      setIsUpdating(true);
   }
   const onUpdateHandler = () => {
      let updated = {
         ...artist,
         name: name
      };
      onUpdate(updated);
      setIsUpdating(false);
   }
   return <div>
      {isUpdating ? <input value={name} onChange={(e) => setName(e.target.value)}/> : artist.name}
      {
         isUpdating ? <button type={"button"} onClick={onUpdateHandler}>Update</button>
            : <button type={"button"} onClick={onEditHandler}>Edit</button>
      }

      <button type={"button"} onClick={onDelete}>Delete</button>
   </div>;
}

export default function UpdateArray() {
   const [name, setName] = useState('');
   const [artists, setArtists] = useState([]);

   const onDeleteHandler = (artistId) => {
      setArtists([...artists.filter(artist => artist.id !== artistId)]);
   }

   const onUpdateHandler = (artist) => {
      setArtists([...artists.map(item => item.id === artist.id ? artist : item)]);
   }

   return (
      <>
         <h1>Inspiring sculptors:</h1>
         <input
            value={name}
            onChange={e => setName(e.target.value)}
         />
         <button onClick={() => {
            setArtists([
               ...artists,
               {id: artists.length + 1, name: name}
            ]);
            setName('');
         }}>Add
         </button>
         {artists.map(artist => (
            <Artist key={artist.id} artist={artist} onDelete={() => onDeleteHandler(artist.id)}
                    onUpdate={onUpdateHandler}/>
         ))}
      </>
   );
}
