const Button = ({className, children}) => {
    const renderButton = () => (
        <button className={className}>
            <span>{children}</span>
        </button>
    )

    return renderButton();
};

export default Button;