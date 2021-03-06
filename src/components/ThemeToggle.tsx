import { IconButton } from '@material-ui/core'
import { Brightness4, Brightness7 } from '@material-ui/icons'

import AppContext from './AppContext'

import React, { useContext } from 'react'

interface Props {
	className?: string
}

export default function ThemeToggle({ className = '' }: Props): JSX.Element {
	const { themeType, setThemeType } = useContext(AppContext)

	const toggleTheme = (): void => {
		// Toggle state
		if (setThemeType) {
			setThemeType(themeType === 'dark' ? 'light' : 'dark')
		}

		// TODO Save to a cookie, maybe make a custom useTheme hook?
	}

	return (
		<IconButton color="inherit" onClick={toggleTheme} className={className}>
			{themeType === 'dark' ? <Brightness7 /> : <Brightness4 />}
		</IconButton>
	)
}
