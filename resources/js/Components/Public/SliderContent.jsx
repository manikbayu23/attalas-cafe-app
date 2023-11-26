import { FaSearchPlus } from "react-icons/fa";

export default function SliderContent(props) {
    const { img, alt, aos = "fade-up", aosDelay = 100 } = props;
    return (
        <div className='gambar-slide' data-aos={aos} data-aos-delay={aosDelay}>
            <div className="slider-gallery">
                <img src={img} alt={alt} />
                <FaSearchPlus className="icon-plus" />
            </div>
        </div>
    )
}