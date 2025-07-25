import { useState, useEffect, use } from 'react';
// import { db } from './firebase';
import { collection, getDoc, doc, deleteDoc } from 'firebase/firestore';
import { Link,useParams,useNavigate } from 'react-router-dom';

// --- Mock Data & Functions (Firebaseの代わり) ---
let mockPosts = [
  { id: '1', title: 'Reactの基本', content: 'ReactはUIを構築するためのライブラリです。', createdAt: new Date() },
  { id: '2', title: 'Firebaseとは', content: 'FirebaseはGoogleが提供するBaaSです。', createdAt: new Date() },
];
const db = {}; // dummy db object
const serverTimestamp = () => new Date(); // dummy timestamp function
// --- End of Mock Data ---


function PostDetail(){
    const [post, setPost] = useState(null);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const { postId } = useParams();
    
    useEffect(() => {
        const fetchPost = async () => {
            // const postDoc = doc(db, 'posts',postId);
            // const postSnapshot = await getDoc(postDoc);
            // if(postSnapshot.exists()){
            //     setPost({id: postSnapshot.id, ...postSnapshot.data()});
            // }else{
            //     console.error("No such document!"); // エラーハンドリング
            // }
            // ダミー
            const dummyPost = mockPosts.find(p => p.id === postId);
            setPost(dummyPost);
            console.log("TEST!");
            setLoading(false);
        };
    
        fetchPost();
    }, [postId]);
    
    //削除ハンドル
    const handleDelete = async () => {
        if(window.confirm("本当にこの記事を削除しますか？")){
            try{
                //本番用
                // const postDoc = doc(db, 'posts', postId);
                // await deleteDoc(postDoc);
                mockPosts = mockPosts.filter(p => p.id !== postId); // ダミー削除
                console.log("記事が削除されました");
                navigate('/')
            } catch (error) {
                console.error("Error deleting document: ", error);
            }
        }
    }
    if (loading) {
        return <div>読み込み中...</div>;
    }
    
    return (
        <div className="space-y-6">
        <h3>POSTS DETAIL</h3>
            <p>HERE IS:{postId}</p>
            <p>date: {new Date(post.createdAt?.toDate?.() || post.createdAt).toLocaleString('ja-JP')}</p>
            <p>{post.title}</p>
            <p>{post.content}</p>
            <div className="mt-8 bg-dark-100 p-4 rounded-lg">
                <Link to={`/edit/${post.id}`} className="text-blue-500 hover:underline">
                    編集する
                </Link>
                <button onclick={handleDelete} className="ml-4 text-red-500 hover:underline">
                    削除する
                </button>
            </div>
        </div>
    );
}

export default PostDetail;