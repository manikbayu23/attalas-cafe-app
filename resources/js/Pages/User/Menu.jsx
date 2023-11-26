import { Head } from '@inertiajs/react';
import { useEffect } from 'react';
import { useState } from 'react'
import { Parallax } from 'react-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../Assets/Css/style.css';
import bgImage from '../../Assets/Images/View/menu-page.png';
import Navbar from '@/Fragments/Navbar';
import ButtonMenu from '@/Components/Public/ButtonMenu';
import TitleTwo from '@/Components/Public/TitleTwo';
import { FaGlassMartiniAlt, FaCoffee, FaCookieBite, FaConciergeBell } from 'react-icons/fa';
import CardMenu from '@/Components/Public/CardMenu';


export default function Menus() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    return (
        <>
            <Head title="Menu" />
            <Navbar />
            <Parallax bgImage={bgImage} >
                <div className="slide-page">
                    <div className="container">
                        <TitleTwo title="Menu" aosDelay="100" />
                        <div className="nav-page" data-aos="fade-up" data-aos-delay="200" >Home - <span>Menu</span> </div>
                    </div>
                </div>
            </Parallax>
            <div className="page-layouts">
                <div className="container">
                    <nav className="nav-menu" data-aos="fade-up" data-aos-delay="300">
                        <ul>
                            <li><ButtonMenu onclick={() => handleTabClick(0)} change={activeTab === 0 ? 'active' : ''} ><FaCoffee className='icon-btn' /><span>Coffee</span></ButtonMenu></li>
                            <li><ButtonMenu onclick={() => handleTabClick(1)} change={activeTab === 1 ? 'active' : ''} ><FaGlassMartiniAlt className='icon-btn' /><span>Non Coffee</span> </ButtonMenu></li>
                            <li><ButtonMenu onclick={() => handleTabClick(2)} change={activeTab === 2 ? 'active' : ''} ><FaCookieBite /><span>Lunch</span>
                            </ButtonMenu></li>
                            <li><ButtonMenu onclick={() => handleTabClick(3)} change={activeTab === 3 ? 'active' : ''} ><FaConciergeBell /><span>More</span></ButtonMenu></li>
                        </ul>
                    </nav>

                    {activeTab === 0 && (
                        // <MenuCoffee />
                        <div className="list-menu">
                            <CardMenu name="Latte" price="50K" alt="Coffee Latte" />
                        </div>
                    )}
                    {activeTab === 1 && (
                        // <MenuNonCoffee />
                        <h1>hallo2</h1>

                    )}
                    {activeTab === 2 && (
                        // <MenuLunch />
                        <h1>hallo3</h1>

                    )}
                    {activeTab === 3 && (
                        // <MenuMore />
                        <h1>hallo4</h1>

                    )}
                </div>

            </div >
        </>
    )
}