import { GenreService } from '@/services/genre.service'
import { useQuery } from 'react-query'
import { IMenuItem } from '../menu/menuItem/menuItem.interface'
import { getGenreUrl } from 'config/url.config'

export const usePopularGenre = () => {
	const queryData = useQuery(
		'popular genre menu',
		() => GenreService.getAll(),
		{
			select: ({ data }) =>
				data
					.map((genre) => {
						console.log(genre)
						return {
							icon: genre.icon,
							link: getGenreUrl(genre.slug),
							title: genre.title,
						} as IMenuItem
					})
					.splice(0, 4),
			onError(error) {},
		}
	)
	return queryData
}
