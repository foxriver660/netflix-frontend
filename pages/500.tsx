import Heading from '@/components/ui/heading/Heading'
import Meta from '@/utils/meta/Meta'
import React from 'react'

const error500 = () => {
	return (
		<Meta title="Server-side error">
			<Heading title="500 - Server-side error" />
		</Meta>
	)
}

export default error500
