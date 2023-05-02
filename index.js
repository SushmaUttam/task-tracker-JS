console.log("this:", this);
let toDoList = document.getElementsByTagName('li');
console.log("toDoList:", toDoList);

let close = document.getElementsByClassName('close');
for (let i = 0; i < close.length; i++) {
    // close[i].onclick = (event) => {
    //     let div = this.parentElement;
    //     div.style.display = "none";
    // }
    close[i].addEventListener('click', () => {
        if (close[i]) {
            close[i].parentNode.remove();
        } else {
            close[i-1].parentNode.remove();
        }
    });
}

let addNewTask = () => {
    let inputVal = document.getElementById('input').value;
    let li = document.createElement("li");
    if (inputVal != '') {
        li.appendChild(document.createTextNode(inputVal));
        document.getElementById("ul-list").appendChild(li);
        document.getElementById('input').value = '';
        let span = document.createElement('span');
        let text = document.createTextNode('\u00D7');
        span.className = "close";
        span.appendChild(text);
        li.appendChild(span);

        // for (let i=0; i<close.length; i++) {
        //     close[i].onclick = () => {
        //         let div = this.parentElement;
        //         div.style.display = "none";
        //     }
        // }
        
        span.addEventListener('click', () => {
            li.remove();
        });
    }

}