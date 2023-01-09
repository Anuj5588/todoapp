
   var task=0;
   var enter=document.getElementById("enter");

   
    var del;
    var check;


//Remove the item from the div

function removeFunction(){
   document.getElementById("disp")
    del.addEventListener('click', function(){
    // console.log(this.getAttribute("class"));
    this.parentElement.remove();
    task=task-1;
    disp.innerHTML=task;
    })}


   //  Adding the input items

function inputItem(){
document.getElementById("disp");
 task=task+1;
 disp.innerHTML=task;

 var ul =document.getElementById("list-item");
 check=document.createElement('input')
 check.type='checkbox';
 del= document.createElement("button")
  del.innerText="X";
   
 del.style.cssText='height:20px; width:25px'
   
    
   var li= document.createElement('li');
   li.setAttribute("id","list")

   li.style.cssText='  display:grid; grid-template-columns: 6fr 1fr 1fr;padding-left: 10px; padding-top: 5px;'
  // li.innerHTML=enter.value;
   var c=enter.value.trimStart();
   li.innerHTML=c;
   li.appendChild(check)
   ul.appendChild(li);
    li.append(del);
   del.addEventListener("click", removeFunction());
   check.addEventListener("click", changecolor());
   this.enter.value='';

  }


 // constraint othe input values
function addfunction(){

    if(enter.value!==' ' && enter.value.length>0)
     inputItem();
     else
    alert("plz write some task")
}



// Check and Uncheck

function changecolor(){
      
  check.addEventListener("click", function(){
 if(check.checked==true){

  this.parentElement.style.cssText='color:blue;display:grid; grid-template-columns: 6fr 1fr 1fr;padding-left: 10px; padding-top: 5px;'
 }

 if(check.checked==false)
 {
  this.parentElement.style.cssText='color:black;display:grid; grid-template-columns: 6fr 1fr 1fr;padding-left: 10px; padding-top: 5px;'
 }
  })

}
    
    







 
  
 




 

  

 
 









 


