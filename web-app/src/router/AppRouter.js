import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import CursoContainer from '../cursos/CursoContainer';
import SobreCard from '../sobre/SobreCard';

const Cursos = () => <CursoContainer />
const Sobre = () => <SobreCard />
const CursoFiltrados = ({match}) => (<CursoContainer filtro={match.params.categoria} />)

const AppRouter = () => (
    <Router>
        <section>
            <nav>
                <ul>
                    <li><Link to="/">Cursos</Link>
                        <ul>
                            <li><Link to="/cursos/desenvolvimento">Desenvolvimento</Link></li>
                            <li><Link to="/cursos/design">Design</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/sobre/">Sobre</Link></li>
                </ul>
            </nav>
            <div>
                <Route path="/" exact component={Cursos} />
                <Route path="/sobre" component={Sobre} />
                <Route path="/cursos/:categoria" component={CursoFiltrados} />
            </div>
        </section>
    </Router>   
)

export default AppRouter;