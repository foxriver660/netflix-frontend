import { typeMaterialIconsName } from './icons.types'

export interface IGenre {
	name: string
	_id: string
	slug: string
	description: string
	icon: typeMaterialIconsName
}
export interface IParameters {
	year: number
	duration: number
	country: string
}
export interface IActor {
	_id: string
	photo: string
	name: string
	countMovies: number
	slug: string
}

export interface IMovie {
	_id: string
	poster: string
	bigPoster: string
	title: string
	parameters: IParameters
	genres: IGenre[]
	actors: IActor[]
	countOpened: number
	videoUrl: string
	rating: number
	slug: string
}
