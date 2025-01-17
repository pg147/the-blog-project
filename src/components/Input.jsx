import { LucideMail } from "lucide-react";
import { forwardRef, useId } from "react";

const Input = forwardRef(function Input({
    icon = <LucideMail />,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId();

    return <div className="relative w-full md:max-w-sm">
        {icon && <div className="absolute flex-1 left-4 pointer-events-none inset-y-0">
            <icon />
        </div>}
        <input
            type={type}
            ref={ref}
            id={id}
            className={`h-11 md:h-14 w-full pl-12 text-base font-medium border-2 border-stroke rounded-xl ${className}`}
            {...props}
        />
    </div>
});

export default Input;