import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import StreamContext from "./../contexts/StreamContext";

const StreamComments = () => {
  const [comments, setComments] = useState([]);
  const streamID = useContext(StreamContext);

  useEffect(() => {
    if (streamID) {
      const data = new FormData();
      data.append("courses_streams_id", streamID);

      axios
        .post(
          "http://localhost:8080/e-learning-website/backend/selectPublicComments.php",
          data
        )
        .then((response) => {
          setComments(response.data);
        })
        .catch((error) => {
          console.error("Error fetching comments:", error);
        });
    }
  }, [streamID]);


  const listComments =
    comments.length > 0
      ? comments.map((comment, index) => (
          <div key={index}>{comment.comment}</div>
        ))
      : <p>No comments yet.</p>;

  return <div>Comments: {listComments}</div>;
};

export default StreamComments;
