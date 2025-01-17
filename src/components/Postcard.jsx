import { Link } from "react-router-dom";
import Service from '../appwrite/config.js';

export default function Postcard({ $id, featuredImage, title }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full h-fit rounded-2xl bg-white p-4 border border-stroke">
                <div className="w-full mb-4">
                    <img
                        src={Service.getFilePreview(featuredImage)}
                        className="rounded-lg"
                    />
                </div>
                <h2 className="font-semibold text-lg">{title}</h2>
            </div>
        </Link>
    )
}
