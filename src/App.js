import logo from './logo.svg';
import './App.css';

// import { db } from './firebase';
// import { collection, getDocs } from 'firebase/firestore';
// import { useState, useEffect } from 'react';
import { BrowserRouter as Router,Routes,Route,Link,useParams,useNavigate } from 'react-router-dom';
import Home from './components/Home';
import PostDetail from './components/PostDetail';
import PostCreate from './components/PostCreate';
import PostEdit from './components/PostEdit';

function App() {
  // const [posts, setPosts] = useState([]);

  // useEffect(()=>{
  //   const fetchPosts = async () => {
  //     const postsCollection = collection(db, 'posts');
  //     const postsSnapshot = await getDocs(postsCollection);
  //     const postList = postsSnapshot.docs.map(docs => ({ }))
  //     setPosts(postList);
  //   }
  //   fetchPosts();
  // },[]);
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-white shadow-mb">
          <nav className="container mx-auto py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">MyFire Blog</Link>
            <Link to="/create" className="text-blue-500 hover:underline">新規投稿</Link>
          </nav>
        </header>
        <main className="container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:postId" element={<PostDetail />} />
            <Route path="/create" element={<PostCreate />} />
            <Route path="/edit/:postId" element={<PostEdit />} />
          </Routes>
        </main>
      </div>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>Hello React World and firebase</h1>
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   <div>
    //     <h2>Posts</h2>
    //     <ul>
    //       {posts.map(post=>(
    //         <li key={post.id}>
    //           <h2>{post.title}</h2>
    //           <p>{post.content}</p>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>
  );
}

export default App;
