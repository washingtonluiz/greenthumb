 /* Imports */
 import { Loading } from "../components";
 
 /* Toggle Select */
  function toggleSelect(category) {
    const parent = document.getElementById(category);
    parent.classList.toggle("active");
  };

  /* Toggle Option */
  function toggleOption(id) {
    const idOption = document.querySelectorAll(`#${id} li`);
    idOption.forEach(option => option.classList.remove("active"))
  }

  /* Loading */
  function toggleLoading(status){
    const elementTarget = document.getElementById("loading");
    elementTarget.innerHTML = status ? Loading : "";
  }

  export { toggleSelect, toggleOption, toggleLoading }