import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <Formulaire Form={""}/>
      <Note ToDo={""}/>
    </>
  );
}
function Formulaire({Form}){
  return(
  <>
    <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Title</label>
    <input type="text" className="form-control"></input>
  </div>
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Desciption</label>
    <textarea className="form-control" rows="2"></textarea>
  </div>
  <select className="form-control">
  <option>To do</option>
  <option>Doing</option>
  <option>Done</option>
</select>
  <button type="submit" className="btn btn-primary">Save</button>
</form>
  </>
  )
}
function Note({ToDo}){
  return(
    <>
    <div className="card-group">
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">To do</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Doing</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
  </div>
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">Done</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  </div>
</div>
  {ToDo}
  </>
  )
}


export default App;
