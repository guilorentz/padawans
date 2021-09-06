function modificar(id) {
  if (id == "home") {
    document.getElementById(id).src = "./img/home-on.svg";
  } else if (id == "posts") {
    document.getElementById(id).src = "./img/posts-on.svg";
  } else if (id == "album") {
    document.getElementById(id).src = "./img/album-on.svg";
  } else if (id == "todo") {
    document.getElementById(id).src = "./img/todo-on.svg";
  }
}

function voltar(id) {
  if (id == "home") {
    document.getElementById(id).src = "./img/home.svg";
  } else if (id == "posts") {
    document.getElementById(id).src = "./img/posts.svg";
  } else if (id == "album") {
    document.getElementById(id).src = "./img/album.svg";
  } else if (id == "todo") {
    document.getElementById(id).src = "./img/todo.svg";
  }
}
