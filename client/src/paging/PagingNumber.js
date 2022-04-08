import React from 'react';

function PagingNumber({page, number, handleClick}) {

    return (
        <>
            {
                page === number ?
                    <li className="page-item active">
                        <a className="page-link" data-page={''+number} onClick={() => handleClick(number)}>
                            {number}
                        </a>
                    </li>
                :
                    <li className="page-item">
                        <a className="page-link" data-page={''+number} onClick={() => handleClick(number)}>
                            {number}
                        </a>
                    </li>
            }
        </>
    )
}

export default PagingNumber;