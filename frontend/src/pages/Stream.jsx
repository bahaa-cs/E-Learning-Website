import React, {createContext} from "react";
import { useParams } from 'react-router-dom';
import StreamHeader from './../components/StreamHeader'
import StreamInputComment from './../components/StreamInputComment'
import StreamSections from './../components/StreamSections'
import StreamContext from "./../contexts/StreamContext";

const Stream = () =>{
    const {streamID} = useParams();


    return (
        <div className="flex center column full-width">
            <StreamContext.Provider value={streamID}>
                <div className="flex column center stream">
                    <StreamHeader csID={streamID}/>
                </div>
                <StreamInputComment/>
                <StreamSections/>
            </StreamContext.Provider>

        </div>
    )
}

export default Stream;