const helpers = {
    getAllRoutes: function(routes) {
        let routesArr = [];
        routes.forEach(route => {
            routesArr.push(route.path);

            if (route.children?.length) {
                route.children.forEach(child => {
                    routesArr.push(route.path + child.path);
                })
            }
        });

        return routesArr;
    },
    runMiddlewares(data, middlewares) {
        middlewares.length && middlewares.forEach(func => {
            func(data);
        })
    }
};

export default helpers;

