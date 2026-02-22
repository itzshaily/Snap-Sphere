import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Feed = () => {

    const [posts, setPosts] = useState([
        {
            _id: '1',
            image: ' https://images.unsplash.com/photo-1588979355313-6711a095465f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFtaWx5fGVufDB8fDB8fHww',
            caption: 'A beautiful famILY',
        }
    ]);

    useEffect(() => {
        
        axios.get('http://localhost:3000/posts')
        .then((res) => {
            setPosts(res.data.posts);
        })
    }, []);

  return (
    
    <section className="feed-section">
      
        {
            posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post._id} className="post-card">
                        <img src={post.image} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>
                ))
            ) : (
                <p>No posts available.</p>
            )
        }

    </section>
  )
}

export default Feed
