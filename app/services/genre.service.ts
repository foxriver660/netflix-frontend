import { IGenre } from '@/shared/types/movies.types'
import { axiosClassic } from 'api/interceptors'

import { getGenresUrl } from 'config/api.config'

export const GenreService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
}
