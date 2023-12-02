import { typeMaterialIconsName } from '@/shared/types/icons.types'
import React, { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

const MaterialIcon: FC<{ name: typeMaterialIconsName }> = ({
	name = 'MdDragIndicator',
}) => {
	const IconComponent = MaterialIcons[name]
	return <IconComponent /> || <MaterialIcons.MdDragIndicator />
}

export default MaterialIcon
