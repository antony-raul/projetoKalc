// teclas 
const keys = document.querySelectorAll(".buttons .numbers button:not(#clear)")
const clear = document.querySelector("#clear")

const ops = document.querySelectorAll(".buttons .operators button")


//visor
const screen = document.querySelector(".screen")


// eventos teclas

keys.forEach(function (key){
    key.addEventListener("click", function (){
         const keyValue = key.getAttribute("data-val")
         insertValue(keyValue)
    })
})

// eventos operações

ops.forEach(function (op){
    op.addEventListener("click", function (){
        if (op.innerText == "="){
            showResult(screen.innerText)
        }else{
            const opValue = op.getAttribute("data-val")
        insertValue(opValue)
        }
        
    })
})

clear.addEventListener("click", function (){
    screen.innerText = "0"
})

//inserir operação
const insertValue = function (value){
    if (screen.innerText.length > 13) {
        return
    }else if(screen.innerText == 0){
        screen.innerText = ""
    }
        screen.innerText = screen.innerText + value
    
}

//exe operação

const showResult= function (operation){
    screen.innerText = eval(operation)
}
