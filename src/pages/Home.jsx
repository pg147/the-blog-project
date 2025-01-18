// React imports
import { useEffect, useState } from 'react';

// Appwrite Services
import appwriteService from '../appwrite/config.js';

// Components
import Postcard from '../components/Postcard.jsx';

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getAllPosts()
            .then((posts) => {
                if (posts) {
                    setPosts(posts);
                }
            });  
    }, [posts]);

    if (posts.length === 0) return <div className='h-screen w-full flex items-center justify-center'>
        <h1 className='text-xl font-semibold'>Login to read <span>posts</span></h1>
    </div> 

    return (
        <div className='w-full'>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div className='w-1/4 p-2' key={post.$id}>
                        <Postcard {...post} />
                    </div>  
                ))}
            </div>
        </div>
    );
}
