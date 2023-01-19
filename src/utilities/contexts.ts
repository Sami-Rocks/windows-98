import { createContext } from 'react'


export const StartMenuContext = createContext<IStartMenuContext>({startMenu: false})
export const ActiveWindowContext = createContext<any>(null)

