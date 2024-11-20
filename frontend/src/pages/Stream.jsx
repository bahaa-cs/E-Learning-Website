import React from "react";
import { useParams } from 'react-router-dom';
import StreamHeader from './../components/StreamHeader'
const Stream = () =>{
    const {streamID} = useParams();
    return (
        <div className="flex center full-width">
            <div className="flex center stream">

                <StreamHeader csID={streamID} />
            </div>

        </div>
    )
}

export default Stream;