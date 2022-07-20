console.log("JS working?")

function saveBook(){
    title = document.getElementById("newTitle").value
    author = document.getElementById("newAuthor").value
    description = document.getElementById("newDescription").value

  // see notes at bottom
    axios.post("", {title : title, author : author, description: description}).then((response) => {
        window.location.href = "../../"
        })

}

function editBook(){
    title = document.getElementById("newTitle").value
    author = document.getElementById("newAuthor").value
    description = document.getElementById("newDescription").value

    axios.post("", {title : title, author : author, description: description}).then((response) => {
        window.location.href = "../../../"
	})

}

    // having an empty string as the first param of the post request means that nothing will be appended to the current url
    // ex. if it was 'axios.post("add/", ...)' the url would become -> localhost:8000/genres/x/books/new/add
    // but we don't want that, we want it to stay on the same url that we are currently on, so we pass ""