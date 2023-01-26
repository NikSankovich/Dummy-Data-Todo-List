// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
    {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
}

const populateTodos = () => {
    for (let i = 0; i < arrayOfTodos.length; i++) {

        // find the ol by ID and put it in a variable
        let todoList = document.getElementById('todo-list');

        //create an element for a list item - li
        let todoItem = document.createElement('LI');

        //create the text element for the title 
        let todoTitle = document.createTextNode(arrayOfTodos[i].title);

        //put the list item in the ol
        todoItem.appendChild(todoTitle);
        todoList.appendChild(todoItem);
    }

}

const getByUser = () => {
    //clear the previous todos from the list
    clearTodos();

    //need the value from the HTML input (num_input)
    const numInput = document.getElementById('num-input').valueAsNumber

    // console.log(numInput)

    //filter where userId = num-input
    //populate the li's with the filtered list 
    //stores the currently filtered todos in a variable 

    const filteredArray = arrayOfTodos.filter((arr) => arr.userId == numInput)

    for (let i = 0; i < filteredArray.length; i++) {

        // find the ol by ID and put it in a variable
        let todoList = document.getElementById('todo-list');

        //create an element for a list item - li
        let todoItem = document.createElement('LI');

        //create the text element for the title 
        let todoTitle = document.createTextNode(filteredArray[i].userId + " " + filteredArray[i].title);

        //put the list item in the ol
        todoItem.appendChild(todoTitle);
        todoList.appendChild(todoItem);
    }
}

const clearTodos = () => {

    const todos = document.getElementsByTagName("OL")

    // loops over the HTML Collection of LIs and clears out the todos
    for (i = 0; i < todos.length; i++) {

        // will log out the id of each todo as it loops over them.
        console.log(todos[i].id)

        // sets the innerHTML to null to replace the todos
        todos[i].innerHTML = null

    }
}
