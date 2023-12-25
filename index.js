let InputBox = document.getElementById("InputBox");
let Ul = document.getElementById("ul");
let AddBtn = document.getElementById("Add-Button");
let Remove = document.getElementById('Remove-Button');


function removing(){
   
    let lis=document.querySelectorAll('li');
    lis.forEach((i)=>{
        i.addEventListener('dblclick',(e)=>{
         e.target.remove()
        })
    })

}

AddBtn.addEventListener("click", (e) => {

    const li = document.createElement('li');
    const LiInput = document.createElement('p');
    const p = document.createTextNode(InputBox.value)
    LiInput.appendChild(p)
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox"; 

    checkbox.addEventListener('click',()=>{
        if(checkbox.checked){
            li.classList.add('complete')
        }
        else{
            li.classList.remove('complete');
        }
       
    })

    li.appendChild(checkbox)
    li.appendChild(LiInput);
    Ul.appendChild(li)

    InputBox.value = "";
   
    removing();

})

Remove.addEventListener('click',(e)=>{
    Ul.removeChild(Ul.children[0])
})
removing();