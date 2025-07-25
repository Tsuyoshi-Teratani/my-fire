import { useState, useEffect, use } from 'react';
import PostForm from './PostForm';
import { db } from '../firebase';
import { collection, doc, getDoc, addDoc, serverTimestamp } from 'firebase/firestore';
import { Link,useParams,useNavigate } from 'react-router-dom';

function PostEdit(){
    const { postId } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);


    useEffect(() => {
        const fetchPost = async () => {
            const postDoc = doc(db, 'posts',postId);
            const postSnapshot = await getDoc(postDoc);
            if(postSnapshot.exists()){
                setPost({id: postSnapshot.id, ...postSnapshot.data()});
            }else{
                console.error("No such document!"); // エラーハンドリング
            }
        };
        fetchPost();
    }, [postId]);
    
    const handleUpdate = async (postData) => {
        try{
            await addDoc(collection(db, 'posts'),{
                ...postData,
                createdAt: serverTimestamp()
            });
            console.log("記事が更新されました");
            navigate(`/post/${postId}`);
        } catch (error) {
            console.error("Error updating document: ", error);
        }
    }
    if(!post){
        return <div className="text-center p-10">記事を読み込んでいます。</div>
    }

    return (
        <div className="space-y-6">
            <h3>POSTS EDIT</h3>
            <PostForm initialData={post} onSubmit={handleUpdate} />
        </div>
    );
}
export default PostEdit;