import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import style from './Router.module.css';

import CursoContainer from '../cursos/CursoContainer';
import SobreCard from '../sobre/SobreCard';

const Cursos = () => <CursoContainer />
const Sobre = () => <SobreCard />
const CursoFiltrados = ({match}) => (<CursoContainer filtro={match.params.categoria} />)

const AppRouter = () => (
    <Router>
        <section>
            <nav className={style.menu}>
                <ul>
                    <li><Link to="/">Cursos</Link>
                            <li><Link to="/cursos/desenvolvimento">Desenvolvimento</Link></li>
                            <li><Link to="/cursos/design">Design</Link></li>
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