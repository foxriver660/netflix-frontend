import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoImage from '@/assets/images/Netflix-Logo.wine.svg'
const Logo = () => {
	return (
		<Link href="/" className="px-layout mb-10 block">
			<Image
				src={LogoImage}
				width={247}
				height={34}
				alt="netflix"
				draggable={false}
			/>
		</Link>
	)
}

export default Logo
