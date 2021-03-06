import { useScrollTrigger } from '@material-ui/core'

import React, { cloneElement } from 'react'

interface Props {
	children: React.ReactElement
}

export default function ElevationScroll(props: Props): JSX.Element {
	const { children } = props
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	})

	return cloneElement(children, {
		elevation: trigger ? 4 : 0,
	})
}
