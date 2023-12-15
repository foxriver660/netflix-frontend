import React, { FC } from 'react'
import ProgressBar from 'nextjs-progressbar'
import { accentColor } from '@/config/constants'
import Head from 'next/head'
import Favicons from './Favicons'

const HeadProvider: FC<any> = ({ children }) => {
	return (
		<>
			<ProgressBar
				color={accentColor}
				startPosition={3}
				stopDelayMs={200}
				height={3}
			/>{' '}
			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1.0"
				/>
				<Favicons />
				<meta name="theme-color" content={'#18181E'} />
				<meta name="nsapplication-navbutton-color" content={'#18181E'} />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content={'#18181E'}
				/>
			</Head>
			{children}
		</>
	)
}

export default HeadProvider
