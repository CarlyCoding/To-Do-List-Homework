import { useState } from 'react';
import './App.css';

function App() {

  const [items, setItems] = useState  ([
    {name: "Get Diesel for the car", priority: "high"},
    {name: "Get shopping", priority: "high"},
    {name: "Get hair done", priority: 'high'},
  ]);

  const [newItem, setNewItem] = useState("");

  const itemNodes = items.map( (item, index) => {
    return (
      <li>
        { item.name }
      </li>
    )
  });

  const handleItemInput = (event) => {
    setNewItem(event.target.value);
  };

  const saveNewItem = (event) => {
    event.preventDefault();
    const copyItems = [...items]
    copyItems.push({
      name: newItem
    })

    setItems(copyItems);
    setNewItem("");
  };


  return (
    <div className="App">
    <h1> To - Do List</h1>
    <hr></hr>

    <ul>
      {itemNodes}
    </ul>

    <form onSubmit={saveNewItem}>
      <label htmlFor = "new-items">Add new task:</label>
      <input
      id= "new-item"
      type= "text"
      value={newItem}
      onChange= {handleItemInput}/>
      <input type= "submit" value="Save new task" />
      </form>
  </div>
  );
}

export default App;
