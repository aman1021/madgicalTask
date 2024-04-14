
import './index.css'
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import {createBrowserRouter , RouterProvider, Outlet} from "react-router-dom"
import ReactPlayer from "./components/ReactPlayer/ReactPlayer";

import WatchHistory from "./components/WatchHistory/WatchHistory";

const AppLayout = () =>  {
  return (
    <div className="app">
      <Header/> 
      <Outlet/>
    
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    children:[
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/play/:id",
        element: <ReactPlayer/>
      },
      {
        path:"/history",
        element: <WatchHistory/>
      }
    ],
  },
])


const root = ReactDOM.createRoot(document.getElementById("root")); 

root.render(<RouterProvider router={appRouter}/>);
