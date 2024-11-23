import {useState} from 'react';
import BlogList from "../src/BlogList"

function Home () {
    
  const [blogs, setBlogs ] = useState([

    {
      id: 1,
      title: "Understanding JavaScript Closures",
      author: "Mario",
      content: "Closures are a powerful concept in JavaScript, enabling functions to access variables from their scope.",
      date: "2024-11-21",
      tags: ["JavaScript", "Programming", "Web Development"],
    },
    {
      id: 2,
      title: "10 Tips for Better Web Accessibility",
      author: "John Smith",
      content: "Creating accessible websites ensures inclusivity and a better user experience for everyone.",
      date: "2024-11-20",
      tags: ["Accessibility", "Web Development", "Best Practices"],
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox: When to Use Which",
      author: "Mario",
      content: "Both Grid and Flexbox are essential CSS tools, but knowing when to use each can streamline your layouts.",
      date: "2024-11-18",
      tags: ["CSS", "Web Design", "Frontend Development"],
    },
  ])


  return (
    <div className="home">
      <BlogList blogs={blogs}  title="All Blogs" />
      <BlogList blogs={blogs.filter((blog) => (blog.author === "Mario"))} title="Mario's Blogs"/>
  </div>
);
}

export default Home;