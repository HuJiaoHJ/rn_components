import IconExample from './icon/example';
import NavbarExample from './navbar/example';
import ExceptionHandlerExample from './exception_handler/example';

const routerArr = [
    {
        key: 'Icon',
        path: '/icon',
        component: IconExample,
    },
    {
        key: 'Navbar',
        path: '/navbar',
        component: NavbarExample,
    },
    {
        key: 'Exception Handler',
        path: '/exception_handler',
        component: ExceptionHandlerExample,
    }
];

export default {
    routerArr,
    IconExample,
    NavbarExample,
    ExceptionHandlerExample,
}