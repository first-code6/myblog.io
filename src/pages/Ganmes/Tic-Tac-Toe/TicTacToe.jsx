import React, {useEffect, useState} from 'react'

const TicTacToe = () => {
  
  const [minSize, setMinSize] = useState(0)
  const [box, setBox] = useState([
    ["","",""],
    ["","",""],
    ["","",""]
  ])
  const [playerO, setPlayerO] = useState(true)

  const getSize = () => {
    if(window.innerHeight < window.innerWidth){
      setMinSize(window.innerHeight * 0.8)
    } else {
      setMinSize(window.innerWidth  * 0.8)
    }
  }

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
  )
}

export default TicTacToe