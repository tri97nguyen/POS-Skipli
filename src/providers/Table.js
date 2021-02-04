import React, { useEffect, useState, createContext } from 'react'
import { database } from '../firebase'
import '../mockdata'

export var TableContext = createContext(null);

export default function Table({ children }) {

    const [tables, setTables] = useState([])

    useEffect(() => {
        const tableRef = database.ref('tables');

        tableRef.on('value', function updateTable(snapshot) {
            setTables(snapshot.val());
        });

        return () => {
            tableRef.off();
        }

    }, [])

    return (
        <TableContext.Provider value={tables}>
            {children}
        </TableContext.Provider>
    )
}
