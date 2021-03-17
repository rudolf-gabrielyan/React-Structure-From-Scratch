import { Route, useHistory } from 'react-router-dom';
import router from "../../router";
import helpers from "../../helpers/helpers";

export default function ReactRoute({ route, indexKey }) {
    const { path, name, component: Component, children, meta = {}  } = route;
    const { layout: Layout } = meta;

    const history = useHistory();

    return (
        <Route
            path={ path }
            name={ name }
            render={({ match: { url } }) => ([
                <Route
                    path={`${url}/`}
                    key={indexKey}
                    render={() => {
                        if (route?.meta?.middleware) {
                            helpers.runMiddlewares({ history }, route.meta.middleware);
                        }

                        return ([
                            Layout && <Layout key={indexKey + 1} />,
                            <Component key={indexKey + 2} />
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