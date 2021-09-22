import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import React from 'react'
import "./listItem.scss"

export default function ListItem() {
    return (
        <div className="listItem">
            <img src="https://media.istockphoto.com/photos/digital-artist-working-at-home-picture-id1069861272?s=612x612" 
            alt="" 
            />

            <div className="itemInfo">
                <div className="icons">

                    <PlayArrow/>
                    <Add/>
                    <ThumbUpAltOutlined/>
                    <ThumbDownAltOutlined/>
                    
                </div>

            </div>
            
        </div>
        
    )
}
