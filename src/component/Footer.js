import React, { useState } from 'react'
import Modal from './Modal'

export default function Footer() {
    var [modalOpen, setModalOpen] = useState(false);

    function toggleTable(e) {
        e.stopPropagation();
        setModalOpen(!modalOpen);

    }
    return (
        <div className="footer">
            <div>footer</div>
            <button className="btn table-btn" onClick={toggleTable}>Table</button>
            {modalOpen ?
                <Modal>
                    <div onClick={toggleTable} className="modal-backdrop">
                        <div onClick={e => e.stopPropagation()} className="modal-content">
                            <div className="modal-header">
                                <div>Choose Table</div>
                                <div onClick={toggleTable} id="modal-close-btn" className="close-btn">&times;</div>
                            </div>
                        </div>
                    </div>
                </Modal>
                : <></>
            }
        </div>
    )
}

