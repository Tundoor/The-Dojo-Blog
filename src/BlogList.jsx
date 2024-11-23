
function BlogList (props) {

    const blogs = props.blogs;
    
  return ( <div className="blog-list">
     {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h1>{blog.title}</h1>
          <p>By {blog.author}</p>
        </div>
      ))}

  </div>) }

  export default BlogList;