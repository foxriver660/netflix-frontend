import { IGenre, IMovie } from '@/shared/types/movies.types'
import { axiosClassic } from 'api/interceptors'

import { getGenresUrl, getMoviesUrl } from 'config/api.config'

export const MovieService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
}
