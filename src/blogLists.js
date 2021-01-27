import { Link } from "react-router-dom";

const BlogList = ( { blogs, title, deleteBlog } ) => {
    
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            { blogs.map( (blog) => (
                <div className="blog-preview" key={ blog.id }>
                    <Link to={ `/blogs/${blog.id}` }>
                    <h2>{ blog.title }</h2>
                    <p>Written By { blog.author }</p>
                    </Link>
                    <button onClick= {
                        () => deleteBlog(blog.id) }>Delete</button>
                </div>
            )) }
        </div>
    );
}

export default BlogList;