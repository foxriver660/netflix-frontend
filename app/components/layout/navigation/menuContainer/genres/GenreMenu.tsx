import React from 'react'
import { usePopularGenre } from './usePopularGenre'
import Menu from '../menu/Menu'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
const GenreMenu = () => {
	const { isLoading, data } = usePopularGenre()

	return isLoading ? (
		<div className="mx-11 mb-6">
			<SkeletonLoader count={5} className="h-7 mt-6" />
		</div>
	) : (
		<Menu title="Popular Genres" items={data || []} />
	)
}

export default GenreMenu
