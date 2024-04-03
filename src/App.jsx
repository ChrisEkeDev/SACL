
import { TbIceCream } from 'react-icons/tb';
import { NAV_LINKS } from './constants';
import * as ROUTES from './constants/routes'
import * as VIEWS from './views'
import "./App.scss";
import { NavLink, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app--wrapper'>
      <header className='app--header'>
        <span className='icon icon--big'><TbIceCream/></span>
        <h1>Component Library</h1>
      </header>
      <nav className='app--navigation'>
        <ul className='navigation--list'>
          {NAV_LINKS.map(link => (
            <NavLink className='navigation--item' key={link.id} to={link.href}>{link.label}</NavLink>
          ))}
        </ul>
      </nav>
      <main>
        <Routes>
          <Route
            exact
            path={ROUTES.BUTTONS}
            component={VIEWS.Buttons}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
