function NavBar () {

    return (
      <nav className="navbar" >
        <h1 className="blogName">The Dojo Blog</h1>
        <div className="links">
            <a href="/" aria-label="Link to Home Page">Home</a>
            <a href="/create" aria-label="Link to page that allows you to create a new blog post">New Blog</a>
        </div>
      </nav>
    )
}

export default NavBar;