import { useEffect, useState } from "react"

import Button from '../../../component/Button'

const PriceCheck = () => {

  const [checkData, setCheckData] = useState([])

  const checkServer = async () => {
    try{
      const res = await fetch('https://free.xwteam.cn/api/gold/trade')
      const data = await res.json()
      console.log(data)
      setCheckData(data.data.LF)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    checkServer()
  },[])

  return (
    <div
      style={{
        padding: "50px"
      }}
    >
      <div>
        {
          checkData.map(item => {
            return(
              <div key={item.Symbol} style={{ margin: "10px" }}>
                {`${item.Name}: BP:${item.BP} SP:${item.SP} High:${item.High} Low:${item.Low} `}
              </div>
            )
          })
        }
      </div>
      
      <Button
        text="刷新"
        onClick={() => {
          checkServer()
        }}
      />

    </div>
  )
}

export default PriceCheck