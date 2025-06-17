import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
function App() {
  return (
    <center class="todo-conatiner">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div class="container text-center">
        <div class="row">
          <div class="col-sm-5">
           Buy Milk
          </div>
          <div class="col-sm-5">
           4/6/2025
          </div>
          <div class="col-sm-2">
           <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
      <div class="container text-center">
        <div class="row">
          <div class="col-sm-5">
            Read Book
          </div>
          <div class="col-sm-5">
            16/6/2025
          </div>
          <div class="col-sm-2">
           <button type="button" class="btn btn-danger">Delete</button> 
          </div>
        </div>
      </div>
    </center>
  );
}
export default App;
