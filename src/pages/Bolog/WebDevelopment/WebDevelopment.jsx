import { useState, useEffect } from 'react'

import MarkDown from 'react-markdown'

const WebDevelopment = () => {
    const [mdData, setMdData] = useState("")
  
    useEffect(() => {
        fetch("/MyBolog/WebDevelopment.md")
        .then(res => res.text())
        .then(text => setMdData(text))
    },[])

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                // overflow: "auto",
                paddingLeft: "10%",
                paddingTop: "2%",
                paddingBottom: "2%",
            }}
        >
            <MarkDown children={mdData}/>
        </div>
    )
}

export default WebDevelopment