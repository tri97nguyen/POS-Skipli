import React, { useState } from 'react'
import Modal from './Modal'
import TableSelect from './TableSelect'

export default function Footer() {
    var [modalOpen, setModalOpen] = useState(false);
    const [table, setTable] = useState(null);
    var [pendingTable, setPendingTable] = useState(null);

    function toggleTable(e) {
        e.stopPropagation();
        setPendingTable(null);
        console.log("pending table will be set to null", pendingTable)
        setModalOpen(!modalOpen);
    }

    function selectTable(e) {
        e.stopPropagation();

        setTable(pendingTable)
        toggleTable(e);
    }

    return (
        <div className="footer">
            <div className="current-table">Current Table: {table ? table : "No table selected"}</div>
            <button className="btn table-btn" onClick={toggleTable}>Choose Table</button>
            {modalOpen ?
                <Modal>
                    <div onClick={toggleTable} className="modal-backdrop">
                        <div onClick={e => e.stopPropagation()} className="modal-content">
                            <div className="modal-header">
                                <div>Choose Table</div>
                                <div onClick={toggleTable} id="modal-close-btn" className="close-btn">&times;</div>
                            </div>
                            <div className="modal-body">
                                <TableSelect pendingTable={pendingTable} setPendingTable={setPendingTable} table={table} setTable={setTable} />
                            </div>
                            <div className="modal-footer">
                                <button onClick={selectTable}>Confirm</button>
                                <button onClick={toggleTable}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </Modal>
                : <></>
            }
        </div>
    )
}

