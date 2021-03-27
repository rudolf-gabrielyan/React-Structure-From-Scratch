import { Route, useHistory } from 'react-router-dom';
import router from "../../router";
import { emitMiddlewares } from "../../helpers/helpers";

export default function ReactRoute({ route, index }) {
    const { path, name, component: Component, children, meta = {} } = route;
    const { layout: Layout } = meta;

    const history = useHistory();

    console.log(history)
    
    return (
        <Route
            path={ path }
            name={ name }
            render={({ match: { url } }) => ([
                <Route
                    path={`${url}/`}
                    key={index}
                    render={() => {
                        if (route?.meta?.middleware) {
                            emitMiddlewares(history, route.meta.middleware);
                        }

                        return ([
                            Layout && <Layout key={index + 1} />,
                            <Component key={index + 2} />
                        ])
                    }}
                />,
                children?.length &&
                children.map(({ path, component: ChildComponent}, childIndex ) =>
                    <Route
                        exact
                        path={ url + path }
                        key={ childIndex + router.routes.length + 2 }
                        component={ChildComponent}
                    />)
            ])}
        />
    )
}