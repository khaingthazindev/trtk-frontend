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

      <button type={"button"} onClick={() => onDelete(artist.id)}>Delete</button>
   </div>;
}

function ArtistList({artists, onDelete, onUpdate}) {
   return <div>
      {artists.map(artist => (
         <Artist key={artist.id} artist={artist} onDelete={onDelete} onUpdate={onUpdate}/>
      ))}
   </div>;
}

function ArtistEntry({onSave}) {
   const [name, setName] = useState('');
   let newArtist = {
      name
   }
   return <div>
      <input
         value={name}
         onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => onSave(newArtist)}>Add
      </button>
   </div>;
}

export default function UpdateArray() {
   const [artists, setArtists] = useState([]);

   const onSaveHandler = (artist) => {
      let newArtist = {
         ...artist,
         id: artists.length + 1
      };
      setArtists([...artists, newArtist]);
   }
   const onDeleteHandler = (artistId) => {
      setArtists([...artists.filter(artist => artist.id !== artistId)]);
   }

   const onUpdateHandler = (artist) => {
      setArtists([...artists.map(item => item.id === artist.id ? artist : item)]);
   }

   return (
      <>
         <h1>Inspiring sculptors:</h1>
         <ArtistEntry onSave={onSaveHandler} />

         <ArtistList artists={artists} onDelete={onDeleteHandler}
                     onUpdate={onUpdateHandler}/>
      </>
   );
}
