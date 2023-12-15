import React from 'react'
import PopularMovies from './PopularMovies'
import FavoriteMovies from './favorit-movies/FavoriteMovies'

const MoviesContainer = () => {
	return (
		<div>
			<PopularMovies />
			<FavoriteMovies />
		</div>
	)
}

export default MoviesContainer
