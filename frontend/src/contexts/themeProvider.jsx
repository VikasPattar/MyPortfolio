import { useContext, useState } from "react"
import ThemeContext from "./themeContext"


const ThemeProvider =({children})=>{

    const [theme, setTheme] = useState('light')
    localStorage.setItem('theme', 'light');
    

    return(
        <ThemeContext.provider value={theme}>
            {children}
        </ThemeContext.provider>
    )
}

export default ThemeProvider;