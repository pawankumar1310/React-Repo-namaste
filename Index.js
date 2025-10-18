import ReactDOM from 'react-dom/client';
import AppLayout from './src/components/AppLayout';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from './src/components/About';
import Contact from './src/components/Contact';
import Error from './src/components/Error';
import Body from './src/components/Body';
import RestaurantMenu from './src/components/RestaurantMenu';
// import { Grocery } from './src/components/Grocery';
import { lazy,Suspense } from 'react';

const Grocery = lazy(()=> import('./src/components/Grocery'));

const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    path : "/",
                    element : <Body />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "/restaurant/:resId",
                    element: <RestaurantMenu />
                },
                {
                    path: "/grocery",
                    element:<Suspense fallback={<h1>Loading..</h1>}><Grocery /></Suspense>
                }
            ],
            errorElement: <Error />
        }

    ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />)