import React  from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { checkedItem,addItem, clearCompletedItem, clearAll } from "./redux/action/listActions";
import { textToState } from "./redux/action/textActions";
import "./styles.css";



export default function App() {
  const list = useSelector(state=>state.listReducer)
  const text = useSelector(state=>state.textReducer)

  const dispatch = useDispatch()


  return (
    <div className="App">
      <h1>To do list</h1>
      <div className="form">
        <input value={text} placeholer="Write your task" onChange={(e)=>dispatch(textToState(e.target.value))}/>
        <button onClick={()=>dispatch(addItem(text))} >Add</button>
      </div>
      <div className="list">
        {list.map((item) => (
          <div onClick={()=>dispatch(checkedItem(item.id))} key={item.id} className={item.done ? "complete" : ""}>{item.title}</div>
        ))}
      </div>
      <button onClick={()=>dispatch(clearCompletedItem())} className="clear">Clear complted tasks</button>
      <br />
      <br />
      <button onClick={()=>dispatch(clearAll())} className="clear">Clear all</button>
    </div>
  );
}



