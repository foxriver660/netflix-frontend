import { FC } from 'react'
import { IHome } from './home.interface'
import Layout from '@/components/layout/Layout'
import Meta from '@/utils/meta/Meta'
import Heading from '@/components/ui/heading/Heading'
import { toastr } from 'react-redux-toastr'

const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch movies and TV shows online or stream rigth to your browser"
		>
			<Heading
				title="Watch movies online"
				className="text-gray-300 mb-8 text-xl"
			/>
		</Meta>
	)
}

export default Home
