import router from '../../router';
import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom';

import { getAllRoutes } from '../../helpers/helpers';
import { MODE }  from '../../config/env';

import ReactRoute from "../react-route/ReactRoute";
import NotFound from "../not-found/NotFound";


export default function RouterView() {
    useEffect(() => {
        if(MODE === 'development') {
            console.group('Router');
            console.log(router);
            console.groupEnd();
        }
    }, []);

    if (!getAllRoutes(router.routes).includes(window.location.pathname)) {
        return <NotFound />;
    }

    return (
        <BrowserRouter>
            <h1>Header</h1>
            {
                router.routes.map((route, index) => {
                    return (
                        <ReactRoute
                            route={ route }
                            key={ index }
                            index={index}
                        />
                   )
                })
            }
        </BrowserRouter>
    )
}