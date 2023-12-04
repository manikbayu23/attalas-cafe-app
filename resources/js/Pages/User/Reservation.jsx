import { Head, router } from '@inertiajs/react';
import { useEffect } from 'react';
import { useState } from 'react'
import { Parallax } from 'react-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../Assets/Css/style.css';
import bgImage from '../../Assets/Images/View/menu-page.png';
import Navbar from '@/Fragments/Navbar';
import TitleTwo from '@/Components/Public/TitleTwo';
import { FaCartPlus, FaUsers } from "react-icons/fa";
import tableImg from '../../Assets/Images/View/table.png';
import { Dropdown } from 'flowbite-react';


const Reservation = ({ reservation }) => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    console.log(reservation);

    return (
        <>
            <Head title="Meja" />
            <Navbar />
            <Parallax bgImage={bgImage} >
                <div className="slide-page">
                    <div className="container">
                        <TitleTwo title="Reservasi" aosDelay="100" />
                        <div className="nav-page" data-aos="fade-up" data-aos-delay="200" >Home - <span>Reservasi</span> </div>
                    </div>
                </div>
            </Parallax>
            <div className="page-layouts">
                <div className="container">
                    {reservation.map((data, index) =>
                        <div className="w-full bg-white py-4 px-6 mb-3 flex items-center" key={index}>
                            <div className='basis-auto flex justify-center'>
                                <img src={tableImg} alt="table" width={'50%'} srcset="" />
                            </div>
                            <div className='basis-4/5'>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Meja {data.table.table_no}
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    Kapasistas Meja : 10 </p>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    Waktu reservasi : 10AM </p>

                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    Status :belum dibayar</p>

                            </div>
                            <div className="basis-auto">
                                <Dropdown label="Aksi">
                                    <Dropdown.Item>Bayar</Dropdown.Item>
                                    <Dropdown.Item>Detail Reservasi</Dropdown.Item>
                                    <Dropdown.Item>Batalkan</Dropdown.Item>
                                </Dropdown>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Reservation;