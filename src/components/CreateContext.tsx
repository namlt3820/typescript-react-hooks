import { createContext } from 'react'

interface ITheme {
    backgroundColor: string;
    color: string;
}

export const ThemeContext = createContext<ITheme>({
    backgroundColor: 'red',
    color: 'blue'
})

