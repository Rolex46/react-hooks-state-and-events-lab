import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [dark, setDark] = useState(false)
  const appClass = dark ? "App dark" : "App light"

  function handleDark(){
    setDark((dark)=> !dark)
  }

  return (
    <div className={dark ? "App dark":"App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDark}>{dark ? "Dark Mode": "LIght Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;