
import React, { useEffect, useState, useContext } from 'react'
import { TableContext } from '../providers/Table'

export default function TableSelect({ table, setPendingTable, pendingTable }) {

    var tableInfo = useContext(TableContext);
    var tables = [];

    function selectTable(e) {
        var chosenTable = e.target.childNodes[0].innerHTML;
        setPendingTable(chosenTable);
    }

    if (pendingTable) {
        console.log("pending table is valid")
        for (let i = 0; i < tableInfo.length; i++) {
            if (pendingTable == i) tables.push(<div onClick={selectTable} className="table selected-table" ><p className="table-number">{i}</p></div>)
            else tables.push(<div key={i} onClick={selectTable} className="table" ><p className="table-number">{i}</p></div>)
        }
    } else {
        console.log("pending table is null, it should show current table")
        for (let i = 0; i < tableInfo.length; i++) {
            if (table == i) tables.push(<div onClick={selectTable} className="table selected-table" ><p className="table-number">{i}</p></div>)
            else tables.push(<div key={i} onClick={selectTable} className="table" ><p className="table-number">{i}</p></div>)
        }
    }

    return (
        <div className="table-select">
            {tables}
        </div>
    )
}
