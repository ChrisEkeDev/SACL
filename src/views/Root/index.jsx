import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from '../../constants';
import { NavLink, Outlet } from 'react-router-dom';
import "./styles.scss";

function Root() {

  return (
    <motion.div className='app--wrapper'>
      <header className='app--header'>
        <h1 className="app--title">Component Library</h1>
      </header>
      <nav className='app--navigation'>
        <ul className='navigation--list'>
          {NAV_LINKS.map(link => (
            <NavLink
              className={({isActive}) => ['navigation--link', isActive && 'active--link'].join(" ")}
              key={link.id}
              to={link.href}>
                {link.label}
            </NavLink>
          ))}
        </ul>
      </nav>

        <AnimatePresence mode="wait">
            <Outlet/>
        </AnimatePresence>

    </motion.div>
  )
}

export default Root
