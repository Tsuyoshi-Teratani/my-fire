import { useState, useEffect, use } from 'react';

function PostForm({initialData, onSubmit}){
    const [title, setTitle] = useState(initialData?.title || '');
    const [content,setContent] = useState(initialData?.content || '');

    const handleSubmit = (e) => {
        e.prevemtDefault();
        if( !title.trim() || !content.trim()){
            alert("タイトルと内容を入れて下さい。");
            return;
        }
        onSubmit({title,content});
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
                                <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">タイトル</label>
            <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder='タイトルを入力してください'
            />
            </div>
            <div className="mb-4">
                <label htmlFor="content" className="block text-lg font-medium text-gray-700 mb-2">内容</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder='内容を入力してください'
                    rows="4"
                />
            </div>
            <div className="text-right">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {initialData ? '更新する' : '投稿する'}
                </button>
            </div>
        </form>
    );
}

export default PostForm;