import axios from "axios";
import React from "react";
const baseURL = "http://localhost:4000/users/create" 



export default function App() {
  const [post, setPost] = React.useState(null);
  const [posts, setPosts] = React.useState(null);
  let x =""
  

  const handleSubmit = (e) => {
    e.preventDefault();
 };
  function createPost(x) {
    axios
      .post(baseURL, {
        id: "1",
        fname: "phongsakorn",
        lname: "yaemwong",
        username: "phongsakorn",
        email: "phongsakorn@gmail.com",
        thaigen: "testing"
      })
      .then((response) => {
        setPosts(response.data);
      });
  }
  return (
    <div onSubmit={handleSubmit}>
      <button value = {post} onClick={createPost(post)} >Create Post</button>
    
    </div>
  );
}