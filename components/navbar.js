import Link from 'next/link';
import classes from "../styles/navbar.module.css"

export default function Navbar() {
    return (
        <div className={classes.navbar}>
            <Link className={classes.link} href="/">
                Главная
            </Link>
            <Link className={classes.link} href="/counter">
                Счетчик
            </Link>
            <Link className={classes.link} href="/randomaizer">
                Рандомайзер
            </Link>
        </div>
    );
};