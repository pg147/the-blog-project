
export default function Button({
    title = "button",
    variant = "outlined",
    className = "",
    ...props
}) {
    return <button
        className={`h-fit w-fit px-4 py-2 md:px-6 md:py-2.5 font-medium rounded-lg transition-colors ease-in-out duration-300 ${variant === 'outlined' ? 'border border-primary text-primary lg:hover:bg-primary/10' : 'bg-primary lg:hover:bg-primary/90 text-white'} ${className}`} {...props}>
        {title}
    </button>
}
