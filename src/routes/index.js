// Layouts
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/followings', component: Following },
    { path: '/profile', component: Profile },
    // Vì upload là 1 layout khác 3 cái trước, nó có content khác và ko có sidebar
    // nên ta quy ước layout: HeaderOnly để có điều kiện set route khi chuyển trang
    // sẽ render ra trang HeaderOnly
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Upload, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
