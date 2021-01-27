import Navbar from './Navbar';
import Home from './Home'
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/ReactFirstBlogApp/">
              <Home/>
            </Route>
            <Route exact path="/create">
             <Create/>
            </Route>
            <Route path="/blogs/:id">
             <BlogDetails/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
https://kkknight-12.github.io/
// //////////////////
/* without rout */ //
/////////////////////

// import Navbar from './Navbar';
// import Home from './Home'

// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <div className="content">
//         <Home/>
//       </div>
//     </div>
//   );
// }

// export default App;
