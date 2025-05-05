
function Button({children, ...props}){
    return (
        <button className="btn-content" {...props}>
            {children}
        </button>
    )
}

export default Button;