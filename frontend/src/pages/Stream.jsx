import React from "react";
import { useParams } from 'react-router-dom';
import StreamHeader from './../components/StreamHeader'
const Stream = () =>{
    const {streamID} = useParams();
    return (
        <div>Stream {streamID}
        <StreamHeader csID={streamID} />
        </div>
    )
}

export default Stream;