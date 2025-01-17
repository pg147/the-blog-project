import { useId, forwardRef } from "react";

function Select({
    options = [],
    label,
    className = "",
    ...props
}, ref) {
    const id = useId();

    return (
        <div className="w-full">
            {label && <label htmlFor={id}>{label}</label>}

            <select
                {...props}
                id={id}
                ref={ref}
                className={`h-11 md:h-14 w-full text-base bg-white font-medium border-2 border-stroke rounded-xl ${className}`}
            >
                <options>
                    {options.length > 0 && options?.map((options) => (
                        <option key={id} value={options.value}>
                            {options.value}
                        </option>
                    ))}
                </options>
            </select>
        </div>
    )
}

export default forwardRef(Select);