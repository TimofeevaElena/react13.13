import './Footer.css'
import LogoImage from '/public/Header/logo.png'

export default function Footer(){

    return(
        <header>
            <div className="container">
                <div className="header-content">
                    <div className="left">
                        <div className="header-logo">
                            <img src={LogoImage} />
                        </div>
                        <nav className="header-nav">
                            <p className="palka">|</p>
                            <li className="btn-nav">
                                <a href="">ГЛАВНАЯ</a>
                            </li>
                            <li className="btn-nav">
                                <a href="">КАТАЛОГ</a>
                            </li>
                            <p className="palka">|</p>
                            <li className="btn-nav">
                                <a href="">ИНФОРМАЦИЯ</a>
                            </li>
                        </nav>
                    </div>
                    <div className="right2">
                        <li className="btn-nav">
                            <a href="">Г.КАЗАНЬ, УЛ.БАРИ ГАЛЕЕВА 3А</a>
                        </li>
                        <li className="btn-nav">
                            <a href="">+7 (927) 482-09-82</a>
                        </li>
                        <li className="btn-nav">
                            <a href="">KUZMAROLOM@GMAIL.COM</a>
                        </li>
                    </div>
                </div>
            </div>
        </header>
    )
}