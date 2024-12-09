let btn = document.getElementById("btn");

let arr = [];


if (localStorage.getItem("todo")) {
    arr = JSON.parse(localStorage.getItem("todo"));
  } else {
    arr = [];
  }
  

arr.map((e) => {
    createTodo(e)
});



btn.addEventListener("click", ()=>{
    let input = document.getElementById("input");
    if (input.value.trim() === "") {
      showAlert("Please enter a valid title");
      return;
  }
    
    createTodo(input.value)
    arr.push(input.value)
    localStorage.setItem("todo", JSON.stringify(arr));
    input.value = "";
    location.reload()
    

});



document.addEventListener('keydown', (e)=>{

  console.log(e.key);
  
  if (e.key == "Enter") {
    let input=document.getElementById("input")
    if (input.value.trim() === "") {
      showAlert("Please enter a valid title");
      return;
  }
    createTodo(input.value)
    arr.push(input.value)
    localStorage.setItem("todo", JSON.stringify(arr));
    input.value = "";
    location.reload()
  }
})







function createTodo(text){
    let ul = document.getElementById("listhead");

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
  
    let innerDiv = document.createElement("div");
    innerDiv.classList.add("charan");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    let button = document.createElement("button");
    button.className = "del-btn"
    button.textContent = "DEL"

  
    h3.textContent = text;
    p.textContent = "unchecked";

    checkbox.addEventListener("change", () => {
        if (p.textContent == "checked") {
          p.textContent = "unchecked";
        } else {
          p.textContent = "checked";
        }
      });

    innerDiv.appendChild(h3);
    innerDiv.appendChild(p);
    innerDiv.appendChild(button)
    let li = document.createElement("li");
    li.classList.add("vmc");
    li.appendChild(checkbox);
    li.appendChild(innerDiv);
  
    ul.appendChild(li);   
}



let btnarr = Array.from(document.getElementsByClassName("del-btn"))

btnarr.forEach((e)=>{
  e.addEventListener("click" , function(){ 
      let val = e.previousElementSibling.previousElementSibling.textContent



      let newArr = arr.filter((e)=>{
        return e!== val
      })

      arr = newArr
      localStorage.setItem('todo' , JSON.stringify(arr))  
      location.reload()   
      
  })
})



// function newTodo() {
//   let input = document.getElementById("input");
//   let ul = document.getElementById("listhead");

//   if (input.value.length === 0) return showAlert("enter valid title");

//   let checkbox = document.createElement("input");
//   checkbox.setAttribute("type", "checkbox");

//   let innerDiv = document.createElement("div");
//   innerDiv.classList.add("charan");
//   let h3 = document.createElement("h3");
//   let p = document.createElement("p");

//   h3.textContent = input.value;
//   p.textContent = "unchecked";
//   checkbox.addEventListener("change", () => {
//     if (p.textContent == "checked") {
//       p.textContent = "unchecked";
//     } else {
//       p.textContent = "checked";
//     }
//   });

//   innerDiv.appendChild(h3);
//   innerDiv.appendChild(p);

//   let li = document.createElement("li");
//   li.classList.add("vmc");
//   li.appendChild(checkbox);
//   li.appendChild(innerDiv);

//   ul.appendChild(li);
//   console.log(input.value);
//   arr.push(input.value);
//   localStorage.setItem("todo", JSON.stringify(arr));

//   input.value = "";
// }

function showAlert(message) {
  alert(message);
}

// function simpleAdd(){

//     let input = document.getElementById('input').value
//     let ul = document.getElementById("listhead")

//     ul.innerHTML =   ` <li class="vmc">
//     <input type="checkbox" name="" id="">
//     <div class="charan">
//         <h3>${input}</h3>
//         <p>checked</p>
//     </div>
// </li>`

//}

// <!-- <li class="vmc">
// <input type="checkbox" name="" id="">
// <div class="charan">
//     <h3>title</h3>
//     <p>checked</p>
// </div>
// </li>
// newTodo()
