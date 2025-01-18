// React imports
import { useEffect, useState } from "react";

// Appwrite Service
import appwriteService from "../appwrite/config.js";

// Components
import Postcard from "../components/Postcard.jsx";

export default function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getAllPosts()
            .then((posts) => {
                if (posts) {
                    setPosts(posts);
                }
            });
    }, [posts]);

    return (
        <div className="flex flex-wrap">
            {posts.map((post) => (
                <div key={post.$id}>
                    <Postcard post={post} />
                </div>
            ))}
        </div>
    )
}
