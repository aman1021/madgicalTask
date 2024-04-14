import { Link } from 'react-router-dom'
import ReactPlayer from '../ReactPlayer/ReactPlayer'
import './MovieCard.css'
import React from 'react'

const MovieCard = (props) => {

  const redirectionUrl = `/play/${props.id}`

  return (
    <div className='moviecard'>
        <div className="video-container">
        <video>
            <source src={props.src}/>
        </video>
    </div>
    <div className='card-name'>
            <div className='movie-name'><b>Movie Name:</b> {props.name}</div>
            <Link className='play-button' to={redirectionUrl}>Play</Link>
        </div>
    </div>
  )
}

export default MovieCard