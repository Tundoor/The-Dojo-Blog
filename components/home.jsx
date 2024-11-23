import {useState, useEffect } from 'react';
import BlogList from "../src/BlogList"

function Home () {
    
  // initializes our blogs as null
  const [blogs, setBlogs ] = useState(null)

   const handleDelete = (id) => {
     const newBlogs = blogs.filter( blog => blog.id !== id)
     setBlogs(newBlogs);
   }

  // fetches from our JSON-server 
   useEffect(() => {
    fetch("http://localhost:8000/blogs")
     .then(res => { return res.json() })
     .then((data) => {
      setBlogs(data)
     })
   }, [])

  return (
    <div className="home">
      { blogs && <BlogList blogs={blogs}  title="All Blogs" handleDelete={handleDelete} />}
  </div>
);
}

export default Home;