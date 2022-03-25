import React, { useState } from "react";
import StandardList from "./StandartList";
const App=()=>{
  const [inputList,setInputList]=useState("");
  const [items,setItems]=useState([]);
  const itemEvent=(event)=>{
    setInputList(event.target.value);
  }; 
  const listOfItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    });
    setInputList(" ");
  };

  const deleteItems=(id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>
      {
        return index !== id;
      });
    });
  }

  return(
<>
<div className="back">
  <div className="center">
    <br />
    <h1 className="setH">Curriculum Authoring</h1>
    <br />
    <h3 className="seth">Mathematics</h3>
    <input className="enter" type="text" placeholder="Add Standard" value={inputList} onChange={itemEvent}/>
    <button className="btn" onClick={listOfItems}>Add</button>
    <ol className="oll">
     { items.map((itemVal,index)=>{
     return  <StandardList 
         key={index} id={index}
         text={itemVal}
         onSelect={deleteItems}
       />;
      })
     }
    </ol>
  </div>
</div>
</>
  )
};
export default App;