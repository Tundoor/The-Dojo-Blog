import {useState, useEffect } from 'react';
import BlogList from "../src/BlogList"

function Home () {
    
  // initializes our blogs as null
  const [blogs, setBlogs ] = useState(null)
  // If theres still loading happening
  const [ isLoading, setLoading ] = useState(true)


  // fetches from our JSON-server 
   useEffect(() => {
    fetch("http://localhost:8000/blogs")
     .then(res => { return res.json() })
     .then((data) => {
      setBlogs(data);
      setLoading(false)
     })
   }, [])

  return (
    <div className="home">
      { isLoading && <div>Loading...</div>}
      { blogs && <BlogList blogs={blogs}  title="All Blogs"  />}
  </div>
);
}

export default Home;