import React from 'react'
import { usePopularGenre } from './usePopularGenre'
import Menu from '../menu/Menu'

const GenreMenu = () => {
	const { isLoading, data } = usePopularGenre()
	console.log('TEST', data)
	return isLoading ? (
		<div className="mx-11 mb-6 text-primary">Loading...</div>
	) : (
		<Menu title="Popular Genres" items={data || []} />
	)
}

export default GenreMenu
