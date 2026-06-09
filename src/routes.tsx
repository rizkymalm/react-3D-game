import { Navigate, useRoutes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NotFound from './pages/Page404';
// layouts

// ----------------------------------------------------------------------

export default function Router() {
    return useRoutes([
        {
            path: '/',
            children: [
                {
                    path: '',
                    element: <HomePage />,
                },
                { path: '404', element: <NotFound /> },
                { path: '*', element: <Navigate to="/404" /> },
            ],
        },
        { path: '*', element: <Navigate to="/404" replace /> },
    ]);
}
