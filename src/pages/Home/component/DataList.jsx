import { useNavigate } from 'react-router-dom'

import data from '../../../data'
import '../style/DataList.css'

const DataList = ({
  dataType="nullData"
}) => {

  const navigate = useNavigate()

  return (
    <div
      style={{ 
        width: "40%",
        minWidth: "280px",
        height: "100%",
       }}
    >
      {
        data.listData[dataType].map(item => {
          return(
            <div
              className="page"
              key={item.header}
              onClick={() => {
                navigate(item.url)
              }}
            >

              <p
                style={{
                  fontSize: "1.2em"
                }}
              >
                {item.header}
              </p>

              <p style={{
                marginTop: "10px",
                fontSize: "0.8em",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}>
                {item.info}
              </p>

              <p style={{
                marginTop: "10px",
                fontSize: "0.8em",
                color: "rgb(180, 180, 180)",
                alignSelf: "flex-end"
              }}>
                {item.date}
              </p>
            </div>
          )
        })
      }
    </div>
  )
}

export default DataList