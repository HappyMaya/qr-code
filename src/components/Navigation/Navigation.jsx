//import { Link } from "react-router-dom";
import s from './Navigation.module.css';
import { NavLink } from "react-router-dom"

export const Navigation = () => {
    return (
        <nav className={s.container}>
            <NavLink to="/generate" className={s.navlink}>Генерировать QR код </NavLink>
            <NavLink to="/scan" className={s.navlink}>Сканировать QR код </NavLink>
            <NavLink to="/generateHistory" className={s.navlink}>История генерирования </NavLink>
            <NavLink to="/scanHistory" className={s.navlink}>История сканирования </NavLink>
        </nav>
    )
}