import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import "./listItem.scss"

export default function ListItem({index}) {
    const[isHovered, setIsHovered] = useState(false)
    const triler = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

    return (
        <div className="listItem" 
        style={{left: isHovered && index * 225 -50 + index*2.5}}
        onMouseEnter={()=>setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}>
            <img src="https://media.istockphoto.com/photos/digital-artist-working-at-home-picture-id1069861272?s=612x612" 
            alt="" 
            />

            {isHovered && (

                <>{/* react fragments */}
                    <video src={triler} autoPlay={true}> loop</video>
                    <div className="itemInfo">
                        <div className="icons">

                            <PlayArrow className="icon"/>
                            <Add className="icon"/>
                            <ThumbUpAltOutlined className="icon"/>
                            <ThumbDownAltOutlined className="icon"/>
                            
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hour 14 mins</span>
                            <span className="limit">+16</span>
                            <span>1999</span>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet Aliquid ipsam voluptatem 
                            mollitia corrupti aperiam?
                        </div>
                        <div className="genre">Action</div>

                    </div>
                </>
            )}
            
        </div>
        
    )
}
