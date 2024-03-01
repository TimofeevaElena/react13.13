import './Header.css'
import LogoImage from '/public/Header/logo.png'
import SearchImage from '/public/Header/search.png'
import CardImage from '/public/Header/card.png'
import LikeImage from '/public/Header/like.png'
import {Link} from 'react-router-dom'

export default function Header(){

    return(
        <header>
            <div className="container">
                <div className="header-content">
                    <div className="left">
                        <Link to="/" className="header-logo">
                            <img src={LogoImage} />
                        </Link>
                        <nav className="header-nav">
                            <p className="palka">|</p>
                            <li className="btn-nav">
                            <Link to="/">ГЛАВНАЯ</Link>
                            </li>
                            <p className="palka">|</p>
                            <li className="btn-nav">
                                <Link to="/katalog">КАТАЛОГ</Link>
                            </li>
                            <p className="palka">|</p>
                            <li className="btn-nav">
                                <Link to="/users">ПОЛЬЗОВАТЕЛИ</Link>
                            </li>
                            <p className="palka">|</p>
                            <li className="btn-nav">
                                <Link to="/add">ДОБАВЛЕНИЕ</Link>
                            </li>
                            <p className="palka">|</p>
                            <li className="btn-nav">
                                <Link to="/">ИНФОРМАЦИЯ</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="right">
                        <img src={SearchImage} />
                        <img src={CardImage} />
                        <img src={LikeImage} />
                    </div>
                </div>
            </div>
        </header>
    )
}