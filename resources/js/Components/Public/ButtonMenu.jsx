const ButtonMenu = (props) => {

    const { onclick, change, children } = props;
    return (
        <>
            <button onClick={onclick} className={`button-menu ${change} `}>{children}</button>
        </>
    );
}
export default ButtonMenu

