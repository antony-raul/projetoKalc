




function printText(id, text){
    document.getElementById(id).onclick = function (){
        console.log(text)
    }
}

let btn = document.getElementsByTagName('button')

for (let i = 0; i < btn.length; i++) {
    let id = btn[i].id
    let text = btn[i].innerText

    printText(id,text)
}
