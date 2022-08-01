import { useState } from 'react';
import './App.css';

function App() {
  // Setting the tasks and priorities in a dict in an array
  const [items, setItems] = useState  ([
    {name: "Get Diesel for the car", priority: "High"},
    {name: "Get shopping", priority: "High"},
    {name: "Get hair done", priority: 'High'},
  ]);
  // Defining what default for new Item will be 
  const [newItem, setNewItem] = useState("");
  // Defining what the default priority is when opening form 
  const [newPriority, setNewPriority] = useState("low");
  

  const itemNodes = items.map( (item, index) => {
    return (
      <li>
        { item.name } | {item.priority}
      </li>
    )
  });
  // The function for new event
  const handleItemInput = (event) => {
    setNewItem(event.target.value);
  };
  // The function for new priority
  const handleNewPriority = (event) => {
    setNewPriority(event.target.value);
  }

  // This is where the pushing of the data onto the new list occurrs. 
  const saveNewItem = (event) => {
    event.preventDefault();
    const copyItems = [...items]
    copyItems.push({
      name: newItem,
      priority: newPriority
    })

    setItems(copyItems);
     // Resetting item and priority back to default
    setNewItem("");
    setNewPriority("low")
  };

  // All the html to link it up
  return (
    <div className="App">
    <h1> To - Do List</h1>
    <hr></hr>

    <ul>
      {itemNodes}
    </ul>

    <form onSubmit={saveNewItem}>
      <label htmlFor= "new-items">Add new task:</label>
      <input
      id= "new-item"
      type= "text"
      value={newItem}
      onChange= {handleItemInput}/>
      <label for="low_priority">
        <input id="low_priority" 
          name= "priority" 
          type= "radio" 
          value="low" 
          checked={newPriority === "low"}
          onChange={handleNewPriority}/>
        Low
      </label>
      <label for="high_priority">
        <input id="high_priority"
          name= "priority" 
          type= "radio" 
          value="high"
          checked={newPriority === "high"}
          onChange={handleNewPriority}/>
        High
      </label>
      <input type= "submit" value="Save new task" />
      </form>
  </div>
  );
}

export default App;
