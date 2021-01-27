import  BlogList  from './blogLists'
import useFetch from './useFetch';

const Home = () => {

    const { data, setData, isPending, error } = useFetch(
                "http://localhost:8000/blogs" 
    );
    
    const deleteBlog = (id) => {
        console.log(id)
        
        // const newBlogs = data.filter( blogs => blogs.id !== id );
        // setData(newBlogs);

        fetch( "http://localhost:8000/blogs/" + id, {
            method: 'DELETE'
        }).then(()=> window.location.reload() )
       
    }

    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { data && < BlogList blogs={ data } 
            title= "All Blogs!" deleteBlog={ deleteBlog } /> }
        </div>
     );
}

export default Home;