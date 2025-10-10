import { useState } from "react"

function Theme({children}){
    
    let [theme, setTheme] = useState('light');

    let light = {
        backgroundColor : 'white',
        color : 'dark'
    }

    let dark = {
        backgroundColor : 'dark',
        color : 'white'
    }
    
    return(
        <div style={(theme==='light')? light :dark}>
            {children}
        </div>
    )
}