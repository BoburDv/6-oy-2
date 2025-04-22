import { useState } from "react";
import pen from './img/pen.png'

export default function App() {
  const [todos, setTodos] = useState([])

  // QO'SHISH ===================>
  function addTodo(todo) {
    const result = [...todos, todo]
    setTodos(result)
  }

  // O'CHIRISH ===================>
  function removeTodo(id) {
    const result = todos.filter((el) => el.id != id)
    setTodos(result)
  }

  // YANGILASH ===================>
  function editTodo(id) {
    const result = todos.map((el) =>{
      if(el.id == id){
        return{title: prompt("yangi ma'lumot kiriting:"), id: el.id}
      }else{
        return el
      }
    })
    setTodos(result)
  }

  // MA'L/OLISH ===================>
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const res = { title: formData.get("title"), id: Date.now()}
    addTodo(res)
    e.target.reset()
  }

  return (
    <div className="wrapper">
      
      <form onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="Matn kiriting.."/>
        <button>Submit</button>
      </form>

      <ul>
        {todos.length > 0 ? (
          todos.map(({ title, id }) => {

            // Delete/Edit
            return (
              <li key={id}>
                <h3>{title}</h3>
                <button onClick={() => removeTodo(id)}>Delete</button>
                <button onClick={() => editTodo(id)}>Edit <img src={pen}/></button>
              </li>
            )
          })
        ) : (
          <h2>Ma'lumotlar bo'sh :(</h2>
        )}
      </ul>

    </div>
  )
}