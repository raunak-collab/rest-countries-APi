import { createRoot } from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './components/Home';
import Contact from './components/Contact';
import ErrorPage from './components/Error';
import CountryDetail from './components/CountryDetail';

const root = createRoot(document.querySelector('#root'))

let router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        ErrorBoundary: ErrorPage,
        children: [
            {
                path: "/",
                Component: Home,
            },
            {
                path: "/contact",
                Component: Contact,
            },
            {
                path: "/:country",
                Component: CountryDetail,
            }
        ]
    },
    {
        path: "/home",
        Component: App,
    },
]);

root.render(<RouterProvider router={router} />)