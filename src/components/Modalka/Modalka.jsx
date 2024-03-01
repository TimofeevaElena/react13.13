import {useState} from 'react'
import Modal from 'react-modal'
import AddPage from '../../components/AddPage/Add'
import './Modalka.css'

export default function Modalka({modalIsOpen, setModalIsOpen}){
    function showModal(){
        setModalIsOpen(true)
    }

    function closeModal(){
        setModalIsOpen(false)
    }

    return(
        <>
            <button onClick={showModal} className="to-bag">Заказать</button>
            <Modal isOpen={modalIsOpen}>
                <div className="modalka">
                    <button onClick={closeModal} className="close to-bag">Закрыть</button>
                    <AddPage setModalIsOpen={setModalIsOpen}/>
                </div>
            </Modal>
        </>
    )
}