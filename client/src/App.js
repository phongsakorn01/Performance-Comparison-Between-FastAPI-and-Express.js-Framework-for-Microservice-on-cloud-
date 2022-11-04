import axios from "axios";
import React from "react";

const baseURL = "http://localhost:4000/users" 

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  return (
    <div>
      
      <p>{post}</p>
    </div>
  );
}