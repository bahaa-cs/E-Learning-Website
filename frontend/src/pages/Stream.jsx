import React from "react";
import { useParams } from 'react-router-dom';
const Stream = () =>{
    const {streamID} = useParams();
    return (
        <div>Stream</div>
    )
}

export default Stream;