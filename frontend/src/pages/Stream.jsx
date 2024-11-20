import React, {createContext} from "react";
import { useParams } from 'react-router-dom';
import StreamHeader from './../components/StreamHeader'
import StreamInputComment from './../components/StreamInputComment'
import StreamSections from './../components/StreamSections'

const streamContext = createContext();

const Stream = () =>{
    const {streamID} = useParams();


    return (

        
        
        
        <div className="flex center column full-width">
            <streamContext.Provider value={streamID}>
                <div className="flex column center stream">
                    <StreamHeader/>
                </div>
                <StreamInputComment/>
                <StreamSections/>
            </streamContext.Provider>

        </div>
    )
}

export default Stream;