'use client'

import { Dispatch, createContext, useReducer } from 'react'
import { ThemeActions, themeReducer } from '../reducer/theme'

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

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            <div data-theme={state.theme}>{children}</div>
        </ThemeContext.Provider>
    )
}
export { Theme, ThemeContext }
