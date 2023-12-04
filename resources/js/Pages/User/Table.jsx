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
import { Button, Modal, Radio, Textarea, Label, TextInput, Select, Alert, Card } from 'flowbite-react';


const Table = ({ tables, auth }) => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    const [openModal, setOpenModal] = useState(false);
    const [selectedTableId, setSelectedTableId] = useState(null);
    const [selectedTableNo, setSelectedTableNo] = useState(null);

    const [formData, setFormData] = useState({
        id_table: selectedTableId,
        name: "",
        phone: "",
        address: "",
        number_of_people: "",
        time_reservation: "",
        note: "",
        payment_method: "Cash",
    });

    useEffect(() => {
        if (selectedTableId !== null) {
            setFormData({
                ...formData,
                id_table: selectedTableId,
            });
        }
    }, [selectedTableId]);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handlePaymentMethodChange = (event) => {
        setFormData({
            ...formData,
            payment_method: event.target.value,
        });
    };

    const handleOpenModal = (id, no) => {
        setOpenModal(true);
        setSelectedTableId(id);
        setSelectedTableNo(no);

        console.log(id, no);
    };

    function onCloseModal() {
        setOpenModal(false);
        setSelectedTableId(null);
        setSelectedTableNo(null);
    }


    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);

        router.post('/home/add-reservation', formData);
        // setIsNotif(true)
        // setOpenModal(false);
        // setFormData('');
    }


    return (
        <>
            <Head title="Meja" />
            <Navbar />
            <Parallax bgImage={bgImage} >
                <div className="slide-page">
                    <div className="container">
                        <TitleTwo title="Meja" aosDelay="100" />
                        <div className="nav-page" data-aos="fade-up" data-aos-delay="200" >Home - <span>Meja</span> </div>
                    </div>
                </div>
            </Parallax>
            <div className="page-layouts">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {tables.map((table, index) =>
                            <Card
                                className="max-w-sm"
                                imgAlt="Meja"
                                imgSrc={tableImg}
                                key={index}
                            >
                                <a href="#">
                                    <h1 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                                        Meja {table.table_no}
                                    </h1>
                                </a>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-1"><FaUsers /> Capacity : {table.capacity} orang</span>
                                    <Button onClick={() => handleOpenModal(table.id_table, table.table_no)}><FaCartPlus /></Button>

                                </div>
                            </Card>
                        )}
                        <Modal show={openModal} onClose={onCloseModal}>
                            <Modal.Header>Reservasi Meja</Modal.Header>
                            <Modal.Body>
                                <div className="space-y-6">
                                    <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit} encType='multipart/form-data'>
                                        <div className='mb-3'>
                                            <div className="mb-2 block">
                                                <Label htmlFor="name" value="Nama Lengkap" />
                                            </div>
                                            <TextInput id="name" name='name' type="text" placeholder='Nama lengkap' onChange={handleInputChange} value={formData.name} required />
                                        </div>
                                        <div className='mb-3'>
                                            <div className="mb-2 block">
                                                <Label htmlFor="phone" value="Nomor Telepon" />
                                            </div>
                                            <TextInput id="phone" name='phone' type="text" placeholder='Nomor Telepon' onChange={handleInputChange} value={formData.phone} required />
                                        </div>
                                        <div className='mb-3'>
                                            <div className="mb-2 block">
                                                <Label htmlFor="addess" value="Alamat" />
                                            </div>
                                            <Textarea id="address" name='address' placeholder="Alamat lengkap" required rows={4} onChange={handleInputChange} value={formData.address} />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="table-no" value="Nomer Meja" />
                                            </div>
                                            <TextInput id="id-table" name='id_table' type="text" placeholder="Nomor meja" value={selectedTableNo}
                                                required disabled />
                                        </div>
                                        <div>
                                            <div className="mb-2 block">
                                                <Label htmlFor="number_of_people" value="Jumlah Orang" />
                                            </div>
                                            <TextInput id="number_of_people" name='number_of_people' type="number" placeholder="Jumlah orang" onChange={handleInputChange} value={formData.number_of_people} required />
                                        </div>
                                        <div className='mb-3'>
                                            <div className="mb-2 block">
                                                <Label htmlFor="capacity" value="Waktu Reservasi" />
                                            </div>
                                            <TextInput id="time-reservation" name='time_reservation' type="datetime-local" onChange={handleInputChange} value={formData.time_reservation} required />
                                        </div>
                                        <div className='mb-3'>
                                            <div className="mb-2 block">
                                                <Label htmlFor="note" value="Catatan" />
                                            </div>
                                            <Textarea id="note" placeholder="Note a comment..." name='note' required rows={4} onChange={handleInputChange} value={formData.note} />
                                        </div>
                                        <div className='mb-3'>
                                            <div className="mb-2 block">
                                                <Label htmlFor="capacity" value="Metode Pembayaran" />
                                            </div>
                                            <div className="flex gap-5">
                                                <div className="flex items-center gap-2">
                                                    <Radio id="cash" name="payment_method" value="Cash" checked={formData.payment_method === 'Cash'}
                                                        onChange={handlePaymentMethodChange} />
                                                    <Label htmlFor="cash">Cash</Label>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Radio id="transfer" name="payment_method" value="Transfer" checked={formData.payment_method === 'Transfer'}
                                                        onChange={handlePaymentMethodChange} />
                                                    <Label htmlFor="transfer">Transfer</Label>
                                                </div>
                                            </div>
                                        </div>
                                        <Button type="submit">Pesan</Button>
                                    </form>
                                </div>
                            </Modal.Body>
                            <Modal.Footer></Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Table;