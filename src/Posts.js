import React, { useEffect, useState } from 'react'
// import "./Posts.scss"

const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.error('Error fetching users:', error));
    }, []);
    
    return (
        <div className='user-container'>
            {posts.filter((post) => (post.userId >= 0 && post.userId <= 5)).map((post, index) => {
                return(
                    <div className='user-data'>
                        <div className='user-id'>User Id: {post.userId}</div>
                        <div className='user-id'>Post Id: {post.id}</div>
                        <div className='user-name'>Post Title: {post.title}</div>
                        <div className="username">Post Body: {post.body}</div>
                    </div>
                )
            }
            )}
            
        </div>
    )
}

export default Posts