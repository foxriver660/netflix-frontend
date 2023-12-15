import { IMovie } from '@/shared/types/movies.types'
import React, { FC } from 'react'
import style from './MovieItem.module.scss'
import Link from 'next/link'
import { getGenreUrl, getMovieUrl } from 'config/url.config'
import Image from 'next/image'
import { gerGenresListEach } from '@/utils/movie/gerGenresListEach'
import MaterialIcon from '@/components/ui/MaterialIcon'
const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={style.item}>
			<Link href={getMovieUrl(movie.slug)}>
				<Image
					src={movie.poster}
					priority
					alt={movie.title}
					width={65}
					height={97}
				/>
			</Link>
			<div className={style.info}>
				<div>
					<div className={style.title}>{movie.title}</div>
					<div className={style.genres}>
						{movie.genres.map((genre, idx) => (
							<Link key={genre._id} href={getGenreUrl(genre.slug)}>
								{gerGenresListEach(idx, movie.genres.length, genre.name)}
							</Link>
						))}
					</div>
				</div>
				<div className={style.rating}>
					<MaterialIcon name="MdStarRate" />
					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}

export default MovieItem
