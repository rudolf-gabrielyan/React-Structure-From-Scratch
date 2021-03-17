import router from '../../router';
import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom';

import ReactRoute from "../react-route/ReactRoute";
import helpers from '../../helpers/helpers';
import NotFound from "../not-found/NotFound";

import { MODE }  from '../../config/env';

export default function RouterView() {
    useEffect(() => {
        if(MODE === 'development') {
            console.group('Router');
            console.log(router);
            console.groupEnd();
        }
    }, []);

    const { getAllRoutes } = helpers;
    if (!getAllRoutes(router.routes).includes(window.location.pathname)) {
        return <NotFound />;
    }

    return (
        <BrowserRouter>
            {
                router.routes.map((route, index) => {
                    return (
                        <ReactRoute
                            route={ route }
                            key={ index }
                            indexKey={index}
                        />
                   )
                })
            }
        </BrowserRouter>
    )
}