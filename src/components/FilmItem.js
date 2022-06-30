import React from 'react';


const FilmItem = ({film}) => {

  return (
    <li className='film-item'>
      <a href={film.url}>{film.name}</a>
    </li>
  );
}

export default FilmItem;