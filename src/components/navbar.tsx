import logo from '../assets/Imagem.png';
import { Dropdown } from './dropdown';
import { useNavigate } from 'react-router-dom';
export function Navbar() {
    const navigate = useNavigate();

    const aboutNavItems = [
        { title: 'Nossa Academia', path: '/nossa-academia' },
        { title: 'Nossos atletas', path: '/nossos-atletas' },
        { title: 'Horário de aula', path: '/horarios' },
        { title: 'Preços', path: '/precos' },
        { title: 'FAQ', path: '/faq' },
    ]

    const programsNavItems = [
        { title: 'Aula para adultos', path: '/aulas-adultos' },
        { title: 'Aulas infantis', path: '/aulas-infantis' },
    ];

    return (
        <nav className="flex justify-between text-white p-4 mx-64 my-">
            <img src={logo} alt="logo-bpt" width={100} />
            <ul className='flex items-center gap-2'>
                <li className='cursor-pointer' onClick={() => navigate('/')}>Home</li>
                <li>
                    <Dropdown
                        title='Sobre'
                        items={aboutNavItems}
                    />
                </li>
                <li>
                    <Dropdown
                        title='Programas'
                        items={programsNavItems}
                    />
                </li>
                <li className='cursor-pointer' onClick={() => navigate('/contactos')}>Contactos</li>
            </ul>
        </nav>
    );
}