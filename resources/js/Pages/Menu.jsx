import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, usePage } from '@inertiajs/react';
import { Button, Modal, FileInput, Label, TextInput, Select, Alert, Card } from 'flowbite-react';
import { useEffect, useState } from 'react';

export default function Menu({ auth, category, menus }) {

    const [openModal, setOpenModal] = useState(false);
    const [isNotif, setIsNotif] = useState(false);

    const { flash } = usePage().props

    function onCloseModal() {
        setOpenModal(false);
    }

    const handleKeyPress = (event) => {
        const keyCode = event.keyCode || event.which;
        if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
            event.preventDefault();
        }
    };

    const [formData, setFormData] = useState({
        name: "",
        id_category: "",
        price: "",
        image: "",
    });

    const handleInputChange = (e) => {
        if (e.target.type === "file") {
            // Jika input adalah file, gunakan e.target.files[0] untuk mendapatkan file
            setFormData({
                ...formData,
                [e.target.name]: e.target.files[0],
            });
        } else {
            // Jika bukan file, gunakan e.target.value
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
    };


    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);

        router.post('/admin/menu/store', formData);
        setIsNotif(true)
        setOpenModal(false);
        setFormData('');
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Menu</h2>}
        >
            <Head title="Menu" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6  text-gray-900">
                            {isNotif && (
                                <Alert color="success" className='mb-5' onDismiss={() => setIsNotif(false)}>
                                    <span className="font-medium">{flash.message}</span>
                                </Alert>
                            )}
                            <Button className='mb-5' onClick={() => setOpenModal(true)}>Tambah Menu</Button>
                            <Modal show={openModal} onClose={onCloseModal}>
                                <Modal.Header>Tambah Menu</Modal.Header>
                                <Modal.Body>
                                    <div className="space-y-6">
                                        <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit} encType='multipart/form-data'>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="menu-name" value="Nama Menu" />
                                                </div>
                                                <TextInput id="menu-name" name='name' type="text" placeholder="Menu Name" value={formData.name}
                                                    onChange={handleInputChange} required />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="menu-category" value="Kategori Menu" />
                                                </div>
                                                <Select id="menu-category" name='id_category' value={formData.id_category}
                                                    onChange={handleInputChange} required>
                                                    <option value="">Pilih Kategori Menu</option>
                                                    {category.map((cat, index) =>
                                                        <option key={index} value={cat.id_category}>{cat.name}</option>
                                                    )}
                                                </Select>
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="menu-price" value="Price" />
                                                </div>
                                                <TextInput id="menu-price" name='price' type="text" placeholder="Harga" addon="Rp" onKeyPress={handleKeyPress} value={formData.price}
                                                    onChange={handleInputChange} required />
                                            </div>
                                            <div>
                                                <div className="mb-2 block">
                                                    <Label htmlFor="file" value="Image" />
                                                </div>
                                                <FileInput id="file" name='image' helperText="Masukan gambar untuk menu"
                                                    onChange={handleInputChange} accept='image/*' required />
                                            </div>
                                            <Button type="submit">Submit</Button>
                                        </form>
                                    </div>
                                </Modal.Body>
                            </Modal>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
                                {menus.map((menu, index) =>
                                    <Card key={index}
                                        className="max-w-sm"
                                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                                        imgSrc={menu.image}
                                    >
                                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {menu.name}
                                        </h5>
                                        <h4 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{menu.price}</h4>
                                    </Card>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout >
    );
}
