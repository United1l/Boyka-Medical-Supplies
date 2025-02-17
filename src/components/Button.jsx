const Button = ({className, children, onClick}) => {
    const renderButton = () => (
        <button className={`${className} rounded-tr-xl`} onClick={onClick}>
            <span className="w-full">
                {children}
            </span>
        </button>
    )

    return renderButton();
};

export default Button;