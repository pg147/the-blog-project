// React imports
import { useEffect, useState } from "react"

// React Router DOM
import { useNavigate, useParams } from "react-router-dom";

// Appwrite Services
import appwriteService from "../appwrite/config.js";

// Components
import { PostForm } from "../components/index.js";

export default function EditPost() {
    const [post, setPost] = useState();
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                }
            })
        } else {
            navigate("/");
        }
    }, [slug, navigate])

    return post ? <div>
        <PostForm post={post} />
    </div> : null;
}
