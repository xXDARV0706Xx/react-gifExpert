import { useState } from "react"

export const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value )
    }

    const onSubmit = (event) => {
        event.preventDefault(); // Hace que no se refresque la pagina
        if( inputValue.trim().length <=1) return;

        onNewCategory( inputValue.trim() );
        setInputValue('');
        
    }


  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text" 
            placeholder="Buscar Gif's"
            value={inputValue}
            onChange={ onInputChange }
        />
    </form>
  )
}
