import React from 'react'
import style from './Search.module.scss'
import { useSearch } from './useSearch'
import SearchList from './seacrhList/SearchList'
import SearchField from '@/components/ui/search-field/SearchField'
const Search = () => {
	const { isSuccess, data, handleSearch, searchTerm } = useSearch()
	return (
		<div className={style.wrapper}>
			<SearchField handleSearch={handleSearch} searchTerm={searchTerm} />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	)
}

export default Search
