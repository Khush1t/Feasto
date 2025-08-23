import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/frontend_assets/assets'

const AppDownload = () => {

    const imageClick = (() => {
        window.open('https://play.google.com/store/apps/', '_blank');

    })
    const imageClick1 = (() => {
        window.open('https://www.apple.com/in/app-store/', '_blank');

    })
    return (
        <div className='app-download' id='app-download'>
            <p>For Better Experience Download <br />Feasto</p>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="" onClick={() => imageClick()} />
                <img src={assets.app_store} alt="" onClick={() => imageClick1()} />
            </div>
        </div>
    )
}

export default AppDownload