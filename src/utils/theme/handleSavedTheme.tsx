/* Change theme if user pref is different from the default dark mode */

export const handleSavedTheme = (theme: 'dark' | 'light') => {
    const savedTheme = localStorage.getItem('theme')
    const defaultDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
    ).matches

    if (!savedTheme) {
        if (!defaultDark) {
            localStorage.setItem('theme', 'light')
            return true
        }
        if (defaultDark) {
            localStorage.setItem('theme', 'dark')
            return
        }
        return
    }
    if (savedTheme === 'light' && theme === 'dark') {
        return true
    }
    return
}
