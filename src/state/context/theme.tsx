'use client'

import { Dispatch, createContext, useEffect, useReducer } from 'react'
import { ThemeActions, Types, themeReducer } from '../reducer/theme'
import { handleSavedTheme } from '@/utils/theme/handleSavedTheme'

type InitialStateType = {
    theme: 'dark' | 'light'
}

const initialState: InitialStateType = {
    theme: 'dark',
}

const ThemeContext = createContext<{
    state: InitialStateType
    dispatch: Dispatch<ThemeActions>
}>({
    state: initialState,
    dispatch: () => null,
})

const mainReducer = ({ theme }: InitialStateType, action: ThemeActions) => ({
    theme: themeReducer(theme, action),
})

const Theme = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState)

    useEffect(() => {
        const theme = handleSavedTheme(state.theme)

        theme &&
            dispatch({
                type: Types.Change,
                payload: {
                    theme: 'light',
                },
            })
    }, [state.theme])

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            <div data-theme={state.theme}>{children}</div>
        </ThemeContext.Provider>
    )
}
export { Theme, ThemeContext }
