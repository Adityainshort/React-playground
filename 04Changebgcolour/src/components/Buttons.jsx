import React from 'react';

function Buttons({ text = "Adii", colour = "purple" ,onClick}) {
    return (
        <>
            <div className='p-3 rounded-full flex text-white ' style={{ backgroundColor: colour }}
                onClick={() => onClick(colour)}
            >
                {text}  
            </div>
        </>
    )
}

export default Buttons;