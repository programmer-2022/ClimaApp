import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'
import Buscador from '../components/buscador/buscador'
import Contenedor from '../components/contenedor/contenedor'

export default function Routes() {

    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Buscador} />
                <Route exact path="/noticias/:ciudad" component={Contenedor} />
            </Switch>
        </Router>
    )
}