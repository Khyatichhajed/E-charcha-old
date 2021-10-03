import React from 'react'
import VideoPlayer from './components/VideoPlayer';
import Notification from './components/Notification';
import Options from './components/Options';
const App = () => {
    return (
        <div class="main">
            <div id="title">E-charcha</div>
            <VideoPlayer/>
            <Options>
                <Notification/>
            </Options>
        </div>
    )
}

export default App
