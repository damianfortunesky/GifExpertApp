// API KEY 6mmOgw1HsTUeuULw78v5sAJA6ayymzwG
import { useState } from "react";
//Components
import { AddCategory } from "./Componentes/AddCategory/AddCategory";

export const GifExpertApp = () => {

  /* Voy a necesitar tener un listado, almacenarlo y que los datos persistan, si este listado cambia, se tiene que actualizar mi HTML.
  *  Para esto necesito utilizar Hooks para mantener el estado --> UseEstate 
  */
 
  const [categories, setcategories] = useState(['Categoria-1', 'Categoria-2', 'Categoria-3']);

  // const onAddCategory = () => {
  //   setcategories([...categories, 'Categoria-4']);
  // }

  //console.log(categories);

  return (
    <div>
    
      <h1>GifExpertApp</h1>
      <AddCategory setcategories={ setcategories } />

      <ol>
        {
          categories.map( category => {
            return <li key={category}>{category}</li>
          }) 
        }
      </ol>

      {/* <button onClick={onAddCategory}>Agregar</button> */}

    </div>
  );
}

