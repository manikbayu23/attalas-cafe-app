import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { Button } from 'flowbite-react';


const Navbar = () => {
    const [isNavbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(!isNavbarOpen);
    };
    const closeNavbar = () => {
        setNavbarOpen(false);
    };

    return (
        <div className="header">
            <nav className='navbar-cafe'>
                <Link className='logo-cafe'>Attalas Cafe</Link>
                <ul className={isNavbarOpen ? 'nav-list' : 'nav-list-close'}>
                    <li><Link onClick={closeNavbar} href={route('home')} className='nav-link'>HOME</Link></li>
                    <li><Link onClick={closeNavbar} href={route('home.menu')} className='nav-link'>MENU</Link></li>
                    <li><Link onClick={closeNavbar} href={route('home.table')} className='nav-link'>MEJA</Link></li>
                    <li><Link onClick={closeNavbar} href={route('home.reservation.dashboard')} className='nav-link'>RESERVASI</Link></li>
                    <li><Link onClick={closeNavbar} className='nav-link'>GALLERY</Link></li>
                    <li><Link onClick={closeNavbar} className='nav-link'>CONTACT US</Link></li>
                </ul>
                <div className='togglres' >
                    <div className={isNavbarOpen ? 'btn-toggle' : ''}
                    >
                        <input
                            type="checkbox"
                            id='checkbox'
                            checked={isNavbarOpen}
                            onChange={toggleNavbar}
                        />
                        <label htmlFor="checkbox" className='toggle'>
                            <div className="bars" id='bar1'></div>
                            <div className="bars" id='bar2'></div>
                            <div className="bars" id='bar3'></div>
                        </label>
                    </div>
                </div>

                <Button className='hidden md:block' color='light' pill>Login</Button>

            </nav>
        </div>
    )
}

export default Navbar;
