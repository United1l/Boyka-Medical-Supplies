const Button = ({className, children}) => {
    const renderButton = () => (
        <button className={className}>
            <span className="w-full">
                {children}
            </span>
        </button>
    )

    return renderButton();
};

export default Button;