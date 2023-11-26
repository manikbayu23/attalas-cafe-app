import { Head } from '@inertiajs/react';
import { useEffect } from 'react';
import { Parallax } from 'react-parallax';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../Assets/Css/style.css';
import ImgIntro from '../../Assets/Images/View/image-intro.png';
import Bar from '../../Assets/Images/View/foto-kopi.jpeg';
import TitleOne from '@/Components/Public/TitleOne';
import SliderContent from '@/Components/Public/SliderContent';
import CardMenu from '@/Components/Public/CardMenu';
import ColMenu from '@/Layouts/Public/ColMenu';
import Navbar from '@/Fragments/Navbar';


export default function Home() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        const targetElement = document.querySelector('#intro-home');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <Head title="Home" />
            <Navbar />
            <Parallax bgImage={Bar} bgImageAlt="bar-cafe" strength={-100}>
                <div className="slide-home" >
                    <div className="container mx-auto">
                        <TitleOne title="Attalas Cafe" aosDelay="100" />
                        <h2 className="title-2" data-aos="fade-up" data-aos-delay="200">COFFE AND DRINK</h2>
                        <p className="p-slide-home" data-aos="fade-up" data-aos-delay="300">Selamat datang di Attalas Cafe! Nikmati suasana yang hangat dan nyaman <br />
                            sambil menikmati segelas kopi yang segar dan berkualitas.</p>
                        <a href='#intro-home' className="link-learnmore" onClick={handleClick} data-aos="fade-in" data-aos-delay="500"> LEARN MORE</a>
                    </div>
                </div>
            </Parallax>
            <div className="intro-home" id='intro-home'>
                <div className="container mx-auto">
                    <div className="row-intro">
                        <div className="col-intro col-a">
                            <div className="card-intro" data-aos="fade-up">
                                <TitleOne title="Welcome To Attalas Cafe" aosDelay="100" />
                                <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco nisi laboris ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                                </p>
                            </div>
                        </div>
                        <div className="col-intro" data-aos="fade-up">
                            <img src={ImgIntro} alt='gambar-intro' className='gambar-intro' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu-home">
                <div className="container mx-auto">
                    <div className="row-menu">
                        <ColMenu>
                            <div className="card-menu">
                                <div className="title-menu">
                                    <h2 data-aos="fade-up" data-aos-delay="100" >Our Top Hits</h2>
                                    <p data-aos="fade-in" data-aos-delay="200">Part of the secret of success in life is to eat what you like and let the food fight it out inside.
                                        Part of the secret of success in life is to eat what you like and let the food fight it out inside.</p>
                                    <a data-aos="fade-up" data-aos-delay="300" href="/" className="link-readmore" >Read More</a>
                                </div>
                            </div>
                        </ColMenu>
                        <ColMenu aos="fade-up" aosDelay="100">
                            <CardMenu name="Latte" price="50K" alt="Coffee Latte" />
                        </ColMenu>
                        <ColMenu aos="fade-up" aosDelay="200" >
                            <CardMenu name="Latte" price="50K" alt="Coffee Latte" />
                        </ColMenu>
                        <ColMenu aos="fade-up" aosDelay="300">
                            <CardMenu name="Latte" price="50K" alt="Coffee Latte" />
                        </ColMenu>
                    </div>
                </div>
            </div>
            <div className="gallery-home">
                <TitleOne title="Gallery" aosDelay="100" customClass="mb-5" />
                <Slider  {...settings}>
                    <SliderContent />
                    <SliderContent />
                    <SliderContent />
                    <SliderContent />
                    <SliderContent />
                </Slider>
            </div>
        </>
    );
}