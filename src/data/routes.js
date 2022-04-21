import App from '../views/App';

const routes = [
	{ path: '/welcome', name: 'Welcome', component: App },
	{ path: '/', name: 'Home', component: App, private: true, redirect: '/welcome' },
];

export default routes;
