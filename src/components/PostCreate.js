import { useState, useEffect, use } from 'react';
import PostForm from './PostForm';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Link,useParams,useNavigate } from 'react-router-dom';

function PostCreate(){
    const navigate = useNavigate();
    const handleCrete = async (postData) => {
        try{
            await addDoc(collection(db, 'posts'),{
                ...postData,
                createdAt: serverTimestamp()
            });
            navigate('/');
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    }
    
    return (
        <div className="space-y-6">
            <h3>POSTS CREATE</h3>
            <PostForm onSubmit={handleCrete} />
        </div>
    );
}
export default PostCreate;