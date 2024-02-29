import {createPortal} from "react-dom"
import React,{forwardRef} from "react";
import Button from "./Button";
const Modal= forwardRef(function Modal({children},ref)
{
    
    //create <div id="modal-root"></div> in html
    return createPortal(<dialog ref={ref} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
        {children}
        <form method="dialog" className="mt-4 text-right">
            <Button >Close</Button>
        </form>
    </dialog>,document.getElementById("modal-root"));
})

export default Modal;