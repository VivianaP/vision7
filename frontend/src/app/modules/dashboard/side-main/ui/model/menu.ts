import { NavItem } from './nav-item';

export let menu: NavItem[] = [
    {
        displayName: 'Inicio',
        iconName: 'home',
        route: './'
    },
    {
        displayName: 'Clientes',
        iconName: 'person',
        route: './cliente'
    },
    {
        displayName: 'Servicios',
        iconName: 'chair',
        route: './servicio'
    },
    {
        displayName: 'Operarios',
        iconName: 'people',
        route: './operario'
    }
];