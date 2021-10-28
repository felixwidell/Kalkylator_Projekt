let result=document.getElementById("inputext");

/* Stoppar in värdet på dom knapparna som klickas på skärmen då all knappar med ett värde 
har onClick="calculate" funktionen. */
let calculate=(number)=>{
    result.value+=number;
}

/* Om lika med knappen trycks anropas denna kod som först har try{} som kollar om 
det som stoppats in i räknaren är i giltig javascript format för matte och om det
inte är det så skickar den ett "Error" meddelande */
let Result=()=>{

    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("Enter a valid input");
    }
}

/* addEventListener !isNaN kravet om det inte inte är ett nummer alltså om det är ett nummer så 
läggs det till i kalkylatorn. Resten av symbolerna lades till manuellt så att man kan använda 
tangentbordet. */
window.addEventListener("keydown",(event)=>{
    console.log(event.key);
    if (!isNaN(event.key)) {
        result.value += event.key;
    }
    else if(event.key=="*" || event.key== "+"){
        result.value += event.key;
    }
    else if(event.key=="/" || event.key== "-"){
        result.value += event.key;
    }
    else if(event.key=="."){
        result.value += event.key;
    }
    else if(event.key=="Backspace"){
        result.value=result.value.slice(0,-1); 
    }
    else if(event.key=="Enter"){
        try{
            result.value=eval(result.value)
        }
        catch(err){
            alert("Enter a valid input");
        }
    }
    

});

/* Anropar funktionen för knappen C och sätter innhållet på räknaren till " " aka inget. */
function clr(){
    result.value= " ";
}

/* Anropar funktionen för knappen DEL och använder metoden slice då koden tar symbolen 
längst åt höger och tar bort den.  */
function del(){
    result.value=result.value.slice(0,-1); 
}