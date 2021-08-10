import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import { ROOT, ABOUT } from 'navigation/CONSTANTS';

export const RouterConfig = () => {
    return (
        <div>
            <Switch>
                <Route exact path={ROOT} component={Home} />
            </Switch>
        </div>
    );
}