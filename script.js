let form = document.getElementById("event-importance-form");
let add_button = document.getElementById("addEvent");
let list = document.getElementById('events');
let curr_tasks = document.getElementsByTagName('li');
let input = document.getElementById('user-input');

let event_checkBoxes = document.getElementsByClassName('event-completetion');

add_button.addEventListener('click', () => {
    if (input.value != ""){
        createEvent();
        input.value = ""
    }
})

list.addEventListener('mouseenter', check_completion);




function check_completion(){
    console.log('Checking');
    for(checkbox of event_checkBoxes){
        console.log(checkbox.checked);
    }
}


function createEvent(){    
    let new_li= document.createElement('li');

    let txt_node = document.createTextNode(input.value);

    let importance = document.getElementById('Importance-val');

    switch(importance.value){
        case 'imp-2':
            new_li.classList.add('event','imp-2');
            break;
        case 'imp-3':
            new_li.classList.add('event','imp-3');
            break;
        default:
            new_li.classList.add('event','imp-1');
    }




    let checkbox = createCheckbox();



    new_li.append(txt_node);
    new_li.append(checkbox);

    list.append(new_li);
}

function createCheckbox(){
    // creates an input tag
    let input = document.createElement('input');
    // sets it to be a checkbox
    input.setAttribute('type','checkbox');
    input.setAttribute('class', 'event-completetion');
    return input;
}

function set_importance(){
    console.log(importance.forEach((item, index) =>{
        console.log(item);
        console.log(index);
    }
        )
        )
}
