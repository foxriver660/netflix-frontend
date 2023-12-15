import Heading from '@/components/ui/heading/Heading'
import Meta from '@/utils/meta/Meta'
import React from 'react'

const error404 = () => {
	return (
		<Meta title="Page not found">
			<Heading title="404 - Page not found" />
		</Meta>
	)
}

export default error404
