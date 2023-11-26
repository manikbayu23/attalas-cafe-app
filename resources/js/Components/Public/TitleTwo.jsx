export default function TitleTwo(props) {

    const { title, aos = "fade-up", aosDelay, customClass } = props;

    return (
        <h1 className={`title-2  ${customClass}`} data-aos={aos} data-aos-delay={aosDelay}  >{title}</h1>
    )
}