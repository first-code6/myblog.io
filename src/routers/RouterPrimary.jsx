import { 
    useRoutes,
 } from 'react-router-dom'

import Home from '../pages/Home/Home'
import DataList from '../pages/Home/component/DataList'
import TicTacToe from '../pages/Ganmes/Tic-Tac-Toe/TicTacToe'
import MyBolog0503080113 from '../pages/Bolog/2503180113/MyBolog0503080113'
import WebDevelopment from '../pages/Bolog/WebDevelopment/WebDevelopment'
import UE5 from '../pages/Bolog/UE5/UE5'
import PriceCheck from '../pages/app/priceCheck/PriceCheck'

const RouterPrimary = () => {

    return(useRoutes([
        {
            path: "*",
            element: <Home />
        },
        {
            path: "/",
            element: <Home />,
            children: [
                {
                    path: "/games",
                    element: <DataList dataType="gameData" />,
                },
                {
                    path: "/bolog",
                    element: <DataList dataType="BologData" />,
                },
                {
                    path: "/app",
                    element: <DataList dataType="appData" />
                },
                {
                    path: "/about",
                    element: <DataList dataType="nullData" />
                },
            ]
        },
        {
            path: "/tictactoe",
            element: <TicTacToe />
        },
        {
            path: "/2503180113",
            element: <MyBolog0503080113 />
        },
        {
            path: "/WebDevelopment",
            element: <WebDevelopment />
        },
        {
            path: "/UE5",
            element: <UE5 />
        },
        {
            path: "/pricecheck",
            element: <PriceCheck />
        },
    ]))
}

export default RouterPrimary