import React, { useState, useEffect } from 'react'

import MarkDown from 'react-markdown'

const MyBolog0503080113 = () => {

  const [mdData, setMdData] = useState("")

  useEffect(() => {
    fetch("/MyBolog/MyBolog0503080113.md")
    .then(res => res.text())
    .then(text => setMdData(text))
  },[])

  return (
    <MarkDown children={mdData}/>
  )
}

export default MyBolog0503080113