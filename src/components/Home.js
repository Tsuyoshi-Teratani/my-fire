import { useState, useEffect } from 'react';
// import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';

// --- Mock Data & Functions (Firebaseの代わり) ---
let mockPosts = [
  { id: '1', title: 'Reactの基本', content: 'ReactはUIを構築するためのライブラリです。', createdAt: new Date() },
  { id: '2', title: 'Firebaseとは', content: 'FirebaseはGoogleが提供するBaaSです。', createdAt: new Date() },
];
const db = {}; // dummy db object
const serverTimestamp = () => new Date(); // dummy timestamp function
// --- End of Mock Data ---


function Home(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchPosts = async () => {
            // const postsCollection = collection(db, 'posts');
            // const postsSnapshot = await getDocs(postsCollection);
            // const postList = postsSnapshot.docs.map(doc => ({ id:doc.id, ...doc.data() }))
            // setPosts(postList);
            // setLoading(false);
            setPosts(mockPosts);
            setLoading(false);
        };
    
        fetchPosts();
    }, []);
    
    if (loading) {
        return <div>読み込み中...</div>;
    }
    
    return (
        <div className="space-y-6">
        <h3>POSTS LIST</h3>
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <h2>{post.title}</h2>
                    <p>date: {new Date(post.createdAt?.toDate?.() || post.createdAt).toLocaleString('ja-JP')}</p>
                    {/* <p>{post.content}</p> */}
                    <Link to={`/post/${post.id}`} className="text-blue-500 hover:underline">
                        続きを読む→→→
                    </Link>
                </li>
            ))}
        </ul>
        </div>
    );
}

export default Home;