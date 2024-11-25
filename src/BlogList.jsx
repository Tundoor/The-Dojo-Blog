
function BlogList ({ blogs, title}) {
    
  return ( <div className="blog-list">
     <h1>{ title }</h1>
     {blogs.map((blog) => (
       <div className="blog-preview" key={blog.id}>
          <h1>{blog.title}</h1>
          <p>By {blog.author}</p>
        </div>
      ))}

  </div>) }

  export default BlogList;