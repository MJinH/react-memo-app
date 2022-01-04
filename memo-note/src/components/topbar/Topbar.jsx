import React from 'react'
import "./topbar.css"
import SubtitlesIcon from '@mui/icons-material/Subtitles';

export default function Topbar({searchTitle}) {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="memoLogo">Jindocs</span>
            </div>
            <div className="topbarRight">
                <div className="topbarsearch">
                    <SubtitlesIcon className="searchIcon"/>
                    <input placeholder="search for the title..." className="search" onChange={(event) => searchTitle(event.target.value)}/>
                </div>
            </div>
        </div>
    )
}
