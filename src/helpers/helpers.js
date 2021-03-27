module.exports =  {
    getAllRoutes: function(routes) {
        const routesArr = [];
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
    emitMiddlewares(hystory, middlewares) {
        middlewares.length && middlewares.forEach(func => {
            func(hystory);
        })
    }
};
