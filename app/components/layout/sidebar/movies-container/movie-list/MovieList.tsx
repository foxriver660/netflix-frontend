import React, { FC } from 'react'
import style from './MovieList.module.scss'
import { IMovieList } from './movieList.interface'
import MovieItem from './movie-item/MovieItem'
import { MdMovie } from 'react-icons/md'
import Link from 'next/link'

const MovieList: FC<IMovieList> = ({ link, title, movies }) => {
	return (
		<div className={style.list}>
			<div className={style.heading}>{title}</div>
			{movies.map((movie) => (
				<MovieItem key={movie._id} movie={movie} />
			))}
			<Link href={link} className={style.button}>
				See more
			</Link>
		</div>
	)
}

export default MovieList
