import React from 'react'
import './Player.css'
import { useParams } from 'react-router-dom'
import movieList from '../../utils/Constants'
import { useEffect } from 'react'



const ReactPlayer = () => {
    let { id } = useParams();
    const historyData = JSON.parse(localStorage.getItem("history")) || [];
    console.log(id)
    const movieData = movieList.filter((item)=> item.id==id)
    useEffect(() => {
        if(historyData.length>0){
            const isExist = historyData.some((item)=> item.id == id)
            if(!isExist){
                historyData.push(movieData[0])
                localStorage.setItem("history", JSON.stringify(historyData))
            }
        }else{
            historyData.push(movieData[0])
            localStorage.setItem("history", JSON.stringify(historyData))
        }
    }, [])
    
  return (
    <div className='video-player'>
       <div className='player'>
            <video controls>
                    <source src={`../${movieData[0].src}`} type="video/mp4"/>
            </video>
       </div>
    </div>
  )
}

export default ReactPlayer