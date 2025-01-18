import { Loader2 } from "lucide-react";

export default function Loader() {
    return (
        <div className="h-screen w-full bg-white flex items-center justify-center">
            <Loader2 className="text-primary size-8 md:size-10 animate-spin" />
        </div>
    )
}
