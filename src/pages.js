import IconExample from './icon/example';
import ExceptionHandlerExample from './exception_handler/example';

const routerArr = [
    {
        key: 'Icon',
        path: '/icon',
        component: IconExample,
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
    ExceptionHandlerExample,
}