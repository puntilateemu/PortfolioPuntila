export type ActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
        ? {
              type: Key
          }
        : {
              type: Key
              payload: M[Key]
          }
}
export enum Types {
    Change = 'CHANGE_THEME',
}

type themePayload = {
    [Types.Change]: {
        theme: 'dark' | 'light'
    }
}

export type ThemeActions =
    ActionMap<themePayload>[keyof ActionMap<themePayload>]

export const themeReducer = (state: 'dark' | 'light', action: ThemeActions) => {
    switch (action.type) {
        case Types.Change:
            return action.payload.theme

        default:
            return state
    }
}
