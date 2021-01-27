import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
    <nav className ="navbar">
        <h1> Blog</h1>
        <div className="links"></div>
        <div className="links">
            <Link to="/ReactFirstBlogApp/">Home</Link>
            <Link to="/create" style={
            {
                color: "white",
                backgroundColor: '#f1356d',
                borderRadius: '8px'
            } } >New Blog</Link>
        </div>
    </nav>
    );
}
/* outer curly bracket are for dynamic value,
inside curly bracket are javascript object in which you can do different key value pair
key - css property
value - css value for that property */
export default Navbar;


/* without link tag */
// const Navbar = () => {
//     return (  
//     <nav className ="navbar">
//         <h1> Blog</h1>
//         <div className="links"></div>
//         <div className="links">
//             <a href="/">Home</a>
//             <a href="/create" style={
//             {
//                 color: "white",
//                 backgroundColor: '#f1356d',
//                 borderRadius: '8px'
//             } } >New Blog</a>
//         </div>
//     </nav>
//     );
// }
// /* outer curly bracket are for dynamic value,
// inside curly bracket are javascript object in which you can do different key value pair
// key - css property
// value - css value for that property */
// export default Navbar;