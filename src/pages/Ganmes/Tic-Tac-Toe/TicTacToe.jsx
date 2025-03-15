import React, {useEffect, useState} from 'react'

const TicTacToe = () => {
  
  const [minSize, setMinSize] = useState(0)
  const [box, setBox] = useState([
    ["","",""],
    ["","",""],
    ["","",""]
  ])
  const [playerO, setPlayerO] = useState(true)
  const [winBox, setWinBox] = useState(false)
  const [winnerStr, setWinnerStr] = useState("")

  const getSize = () => {
    if(window.innerHeight < window.innerWidth){
      setMinSize(window.innerHeight * 0.8)
    } else {
      setMinSize(window.innerWidth  * 0.8)
    }
  }

  // 初始化视窗大小(找到最短的边)
  useEffect(() => {

    getSize()

    window.addEventListener("resize", getSize)

    return(() => {
      window.removeEventListener("resize", getSize)
    })
  },[])

  // O形图标
  const Opic = () => {
    return (
      <div
        style={{
          width: "50%",
          height: "50%",
          border : "2px solid white",
          borderRadius: "50%",
        }}
      />
    )
  }

  // X形图标
  const Xpic = () => {
    return(
      <div
        style={{
          position: "relative",
          width: "50%",
          height: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div 
          style={{
            position: "absolute",
            width: "100%",
            height: "2px",
            backgroundColor: "white",
            transform: "rotate(45deg)"
          }}
        />
        <div 
          style={{
            position: "absolute",
            width: "100%",
            height: "2px",
            backgroundColor: "white",
            transform: "rotate(-45deg)"
          }}
        />
      </div>
    )
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      {/* 棋盘 */}
      <div
        style={{
          width: minSize+"px",
          height: minSize+"px",
          backgroundColor: "grey",
          position: "relative",
          top: "50%",
          left: "50%",
          translate: "-50% -50%",
          display: "grid",
          gridTemplateColumns: "repeat(3,33.33%)",
          gridTemplateRows: "repeat(3,33.33%)",
        }}
      >

        {
          box.map((item, index) => {
            let showList = []
            item.map((item1, index1) => {
              showList.push(
                <div
                  key={index+""+index1}
                  style={{
                    backgroundColor: "green",
                    borderTop: index === 0 ? "none" : "1px solid white",
                    borderBottom: index === 2 ? "none" : "1px solid white",
                    borderLeft: index1 === 0 ? "none" : "1px solid white",
                    borderRight: index1 === 2 ? "none" : "1px solid white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    userSelect: "none",
                  }}
                  onClick={() => {
                    let boxList = JSON.parse( JSON.stringify(box) )
                    if(playerO){
                      if(boxList[index][index1] === ""){
                        boxList[index][index1] = "O"
                        setBox(boxList)
                      } else {
                        console.log("ERROR: 该位置已经有棋子了!")
                      }
                    } else {
                      if(boxList[index][index1] === ""){
                        boxList[index][index1] = "X"
                        setBox(boxList)
                      } else {
                        console.log("ERROR: 该位置已经有棋子了!")
                      }
                    }
                    setPlayerO(!playerO)

                    let winner = ""

                    // 判断横竖胜利条件
                    boxList.map((item, index) => {
                      let picl = ""        // 判断横着的字符串
                      let piclCount = 0
                      let picr = ""        // 判断竖着的字符串
                      let picrCount = 0


                      for (let index1 = 0; index1 < 3; index1++) {
                        if(picl === ""){
                          picl = item[index1]
                        } else {
                          picl === item[index1] ? piclCount += 1 : ""
                        }
                        
                        if(picr === ""){
                          picr = boxList[0][index]
                        } else {
                          picr === boxList[index1][index] ? picrCount += 1 : ""
                        }
                      }

                      if(piclCount === 2){
                        winner = picl
                      }

                      if(picrCount === 2){
                        winner = picr
                      }
                    })

                    // 判断斜角胜利条件
                    if(boxList[0][0] === boxList[1][1] && boxList[1][1] === boxList[2][2] && boxList[2][2] !== ""){
                      winner = boxList[0][0]
                    }
                    if(boxList[0][2] === boxList[1][1] && boxList[1][1] === boxList[2][0] && boxList[0][2] !== ""){
                      winner = boxList[0][2]
                    }

                    if(winner !== ""){
                      setWinnerStr(winner)
                      setWinBox(true)
                    }

                  }}
                >
                  {
                    item1 === "O" &&
                    <Opic />
                  }
                  {
                    item1 === "X" &&
                    <Xpic />
                  }
                </div>
              )
            })
            return showList
          })
        }

      </div>

      {/* 胜利者弹窗 */}
      {
        winBox &&
        <div
          style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            zIndex: 100,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: 0,
            left: 0,
          }}
          onClick={() => {
            setWinnerStr("")
            setPlayerO(true)
            setBox([
              ["","",""],
              ["","",""],
              ["","",""]
            ])
            setWinBox(false)
          }}
        >
          <div
            style={{
              width: "50%",
              height: "20%",
              backgroundColor: "white",
              border: "1px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "black",
            }}
          >
            {`赢家是： ${winnerStr} !!`}
          </div>
        </div>
      }

    </div>
  )
}

export default TicTacToe