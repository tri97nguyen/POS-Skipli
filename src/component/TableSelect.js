
import React, { useEffect, useState } from 'react'

export default function TableSelect({ table, setPendingTable, pendingTable }) {
    var tables = []

    function selectTable(e) {
        var chosenTable = e.target.childNodes[0].innerHTML;
        setPendingTable(chosenTable);
    }

    if (pendingTable) {
        console.log("pending table is valid")
        for (let i = 0; i < 20; i++) {
            if (pendingTable == i) tables.push(<div onClick={selectTable} className="table selected-table" ><p className="table-number">{i}</p></div>)
            else tables.push(<div key={i} onClick={selectTable} className="table" ><p className="table-number">{i}</p></div>)
        }
    } else {
        console.log("pending table is null, it should show current table")
        for (let i = 0; i < 20; i++) {
            if (table == i) tables.push(<div onClick={selectTable} className="table selected-table" ><p className="table-number">{i}</p></div>)
            else tables.push(<div key={i} onClick={selectTable} className="table" ><p className="table-number">{i}</p></div>)
        }
    }


    // useEffect(() => {
    //     console.log("pending table is ", pendingTable);
    //     for (let i = 0; i < 20; i++) {
    //         if (pendingTable == i) {
    //             console.log("pending table will be ", pendingTable);
    //             tables.push(<div onClick={selectTable} className="table selected-table" ><p className="table-number">{i}</p></div>)
    //         }
    //         else tables.push(<div key={i} onClick={selectTable} className="table" ><p className="table-number">{i}</p></div>)
    //     }
    //     var info = tables.map(table => table)
    //     console.log(info)
    // }, [pendingTable])
    return (
        <div className="table-select">
            {tables}
        </div>
    )
}
