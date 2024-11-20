import React from "react";
import { useParams } from 'react-router-dom';
import StreamHeader from './../components/StreamHeader'
import StreamComment from './../components/StreamComment'
import StreamSections from './../components/StreamSections'
const Stream = () =>{
    const {streamID} = useParams();
    return (
        <div className="flex center column full-width">
            <div className="flex column center stream">
                <StreamHeader csID={streamID} />
            </div>
            <StreamComment />
            <StreamSections />

        </div>
    )
}

export default Stream;