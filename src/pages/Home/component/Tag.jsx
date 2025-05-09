import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import data from '../../../data'

const Tag = () => {

  const navigate = useNavigate()
  const [active, setActive] = useState(0)      // 当前被选中的标签

  return (
    <div>
        <ul 
          style={{
              display: "flex",
              flexDirection: "row",
              listStyleType: "none",
              userSelect: "none",
              cursor: "pointer",
              padding: 0,
          }}
        >
            {
              data.tagData.tagListData.map((item, index) => {
                return(
                  <li 
                    style={{
                      padding: "10px",
                      color: active === index ? "rgb(150,150,150)" : "",
                    }} 
                    key={item.header}
                    onClick={() => {
                      setActive(index)
                      navigate(item.href)
                    }}
                  >
                    <div
                      style={{
                        margin: "15px",
                      }}
                    >
                      {item.header}
                    </div>
                  </li>
                )
              })
            }
        </ul>
    </div>
  )
}

export default Tag