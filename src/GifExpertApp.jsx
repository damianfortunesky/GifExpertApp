// API KEY 6mmOgw1HsTUeuULw78v5sAJA6ayymzwG  // api.giphy.com/v1/gifs/search



import { useState } from "react";
//Components
import { AddCategory } from "./Componentes/AddCategory/AddCategory";
import { GifGrid } from "./Componentes/GifGrid/GifGrid";

export const GifExpertApp = () => {

  /* Voy a necesitar tener un listado, almacenarlo y que los datos persistan, si este listado cambia, se tiene que actualizar mi HTML.
  *  Para esto necesito utilizar Hooks para mantener el estado --> UseEstate 
  *  En los eventos es comun usar nombre que empiezen con on-nombreevento - Ej: onClick, onChange
  */
 
  const [categories, setcategories] = useState(['Categoria-1']);

  // const onAddCategory = () => {
  //   setcategories([...categories, 'Categoria-4']);
  // }

  //console.log(categories);

  const onAddCategory = (newCategory) => {

    if(categories.includes(newCategory)) return;
    //console.log(newCategory);
    setcategories([newCategory, ...categories]);
  }

  return (
    <div>
    
      <h1>GifExpertApp</h1>
      <AddCategory
        //setcategories={ setcategories } 

        onNewCategory={ (evento) => onAddCategory(evento)}
      />

      <ol>
        {
          categories.map( category => (<GifGrid key={category} category={category}/>) ) 
        }
      </ol>

      {/* <button onClick={onAddCategory}>Agregar</button> */}

    </div>
  );
}

