import React, { useEffect, useState, createContext } from 'react'
import { database } from '../firebase'

export var TableContext = createContext(null);

export default function Table({ children }) {

    const [tables, setTables] = useState([])

    useEffect(() => {
        database.ref('tables').on('value', function updateTable(snapshot) {
            setTables(snapshot.val());
        })
    })

    return (
        <TableContext.Provider value={tables}>
            {children}
        </TableContext.Provider>
    )
}
