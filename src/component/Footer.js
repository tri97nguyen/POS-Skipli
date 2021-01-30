import React from 'react'

export default function Footer() {
    return (
        <div className="footer">
            <div>footer</div>
            <button className="btn table-btn" onClick={toggleTable}>Table</button>
        </div>
    )
}

function toggleTable(e) {
    e.stopPropagation();
    
}