import React from "react";
import { createPortal } from "react-dom";

function Modal({children}) {
    return createPortal(
        <div className="Form">
            {children}
        </div>,
        document.getElementById('form')
    )
}

export { Modal }