function AddTodo(){
    return    <div class="container text-center">
        <div class="row">
          <div class="col-sm-5">
            <input type="text" placeholder="Enter your task"/>
          </div>
          <div class="col-sm-5">
            <input type="date"/>
          </div>
          <div class="col-sm-2">
           <button type="button" class="btn btn-success">Add</button> 
          </div>
        </div>
      </div>
}
export default AddTodo;