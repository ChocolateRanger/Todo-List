
import './App.css';

function App() {


  function addmore() {
    console.log("Button was clicked, add more items")
    let inputtext = document.getElementById('name').value;
    document.getElementById('Error').innerHTML = "";
    if (inputtext === "") {
      console.log("Error");
      document.getElementById('Error').innerHTML = "Please enter any task";
    }
    else {
      console.log("No error")
      let box = document.getElementById('box');
      let li = document.createElement('li');
      let p = document.createElement('p');
      let div = document.createElement('div');
      li.className = "Tasks"
      div.className = "Tasktext"
      p.textContent = inputtext;
      div.appendChild(p)
      li.appendChild(div);
      let pos = box.firstElementChild;

      //Delete Button
      let delbtn = document.createElement("BUTTON");
      let text = document.createTextNode("\u00D7");
      delbtn.className = "close"
      delbtn.appendChild(text);
      li.appendChild(delbtn);
      delbtn.addEventListener('click', function () {
        console.log("Delete Button was clicked");
        let task = this.parentElement;
        task.style.display = "none";

      })

      //Save Button
      let Savebtn = document.createElement("BUTTON");
      let Savetxt = document.createTextNode('Save');
      Savebtn.className = "Save"
      Savebtn.appendChild(Savetxt);
      li.appendChild(Savebtn);
      Savebtn.addEventListener('click', function () {
        console.log("Edit Button was clicked");
        li.contentEditable = false;
      })

      //Edit Button
      let Editbtn = document.createElement("BUTTON");
      let Edittxt = document.createTextNode('Edit');
      Editbtn.className = "Edit"
      Editbtn.appendChild(Edittxt);
      li.appendChild(Editbtn);
      Editbtn.addEventListener('click', function () {
        console.log("Edit Button was clicked");
        li.contentEditable = true;
      })

      if (pos === "null") {
        box.append(li);
      }
      else {
        box.insertBefore(li, pos);
      }

    }
    document.getElementById('name').value = "";
  }


  return (
    <>
      <div>
        <h1>
          What's your Plan!
        </h1>
        <div>
          <div>
            <span id='Error'></span>
          </div>
          <div className='InputArea'>
            <input className='InputField' placeholder='Enter text' id='name' />
            <span>

          <button className='button' onClick={addmore}> + </button>
            </span>
          </div>

          <div id='box'>
          </div>
        </div>
      </div>
    </>

  );
}

export default App;
