import React from 'react';
import FilmItem from './FilmItem';


const FilmList = ({films}) => {
  const filmItems = films.map((film) => {
    return (
      <FilmItem film={film} key={film.id}/>
    );
  });

  return (
    <div className='film-list'>
      <ul>
        {filmItems}
      </ul>
    </div>
  );

}

export default FilmList;