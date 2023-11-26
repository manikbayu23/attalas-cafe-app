export default function ColMenu(props) {
    return (
        <div className="col-menu" data-aos={props.aos} data-aos-delay={props.aosDelay}>{props.children}</div>
    )
}