import React from "react";

function TodoInput({ children, searchValue, setSearchValue }) {
    return(
    <div>
        <input className="input-filtrar" placeholder='Escribe aqui para filtrar' value={searchValue}
        onChange={ (event) => {
            setSearchValue(event.target.value)
        } }
        />
        <div className="lista-filtrada">
            {children}
        </div>
    </div>
    );
}

export {TodoInput};