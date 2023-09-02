import {useState} from "react";

const AddTask = ({onAdd}) => {
  const [text , setText] = useState('')
  const [day , setDay] = useState('')
  const [reminder , setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (!text){
      alert('Please add a Task');
      return;
    }

    onAdd({text, day, reminder})

    setText('') 
    setDay('')
    setReminder(false)
  }
  
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control ">
        <label>Task</label>
        <input type="text" placeholder="Add Task" value={text} onChange={(e)=> setText(e.target.value)}></input>
      </div>
      <div className="form-control ">
        <label>Day & Time</label>
        <input
          className="form-control-check"
          type="text"
          placeholder="Add Day & Time     Eg- /Jen 10th at 4:45am/ " value={day} onChange={(e)=> setDay(e.target.value)}
        ></input>  
      </div> 
      <div className="form-control form-control-check   ">
        <label>Set Reminder</label>
        <input type="checkBox" value={reminder} checked = {reminder} onChange={(e)=> setReminder(e.currentTarget.value)}></input>
      </div> 
      <input type="submit" value="Save Task" className="btn btn-block" ></input>
    </form>
  );
};

export default AddTask;
