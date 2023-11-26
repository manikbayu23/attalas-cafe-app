export default function TitleOne(props) {

    const { title, aos = "fade-up", aosDelay, customClass } = props;

    return (
        <h1 className={`title-1  ${customClass}`} data-aos={aos} data-aos-delay={aosDelay}  >{title}</h1>
    )
}