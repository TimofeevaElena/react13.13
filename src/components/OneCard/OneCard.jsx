import {useParams} from 'react-router-dom'
import {katalog} from '../../data'
import CardImage from '/public/Katalog/card.png'
import './OneCard.css'
import LikeImage from '/public/Katalog/like.png'

export default function OneCard(){

        const {id} = useParams();
        const tovar =katalog.find(tovar=> tovar.id===parseInt(id))
    return(
        <>
         <div className="one-card">
            <div className="container">
                <div className="links">
                    <p className="text">Главная\Каталог\{tovar.name}</p>
                </div>
                <div className="one-card-content">
                    <img src={CardImage} alt="" />
                    <div className="one-card-inf">
                        <div className="name-price">
                            <p className="name">{tovar.name}</p>
                            <p className="price col">{tovar.price} ₽</p>
                        </div>  
                        <select>
                            <option>Черный</option>
                            <option>Белый</option>
                        </select>    
                        <select>
                            <option>S</option>
                            <option>M</option>
                        </select>     
                        <div className="btn-like">
                            <div className="to-bag">ДОБАВИТЬ В КОРЗИНУ</div>
                            <img src={LikeImage} alt="" />
                        </div>  
                        <p className="text">{tovar.text}</p>            
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}