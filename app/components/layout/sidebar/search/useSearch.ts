import { useDebounce } from '@/hooks/useDebounce'
import { MovieService } from '@/services/movie.service'
import { useState, ChangeEvent } from 'react'
import { useQuery } from 'react-query'

export const useSearch = () => {
	const [searchTerm, setSearchterm] = useState('')
	const debounceSearch = useDebounce(searchTerm, 500)
	const { isSuccess, data } = useQuery(
		['search movie list', debounceSearch],
		() => MovieService.getAll(debounceSearch),
		{
			select: ({ data }) => data,
			enabled: !!debounceSearch,
		}
	)
	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchterm(e.target.value)
	}
	return { isSuccess, data, handleSearch, searchTerm }
}
