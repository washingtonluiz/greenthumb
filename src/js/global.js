/** Libs */
import 'regenerator-runtime/runtime';

/** Imports */
import Api from "../services/api.js";
import { toggleSelect, toggleOption, toggleLoading } from "./functions.js";
import Card from "../components/Card";

window.onload = function() {
  'use strict';
  
  /* Object Request */
  let data = {
    sun: '',
    water: '',
    pets: '',
  }

  /* Mount Request */
  function mountRequest(atributte, content){
    data[atributte] = `${atributte}=${content}`;
    apiCall();
  }
    
  /* Toggle Select Click */
  let select = document.querySelectorAll(".container__search-friend__list__item__select span");
  select.forEach(item => {
    item.onclick = function(){
      const parent = this.parentElement.getAttribute('id')
      toggleSelect(parent)
    }
  })
  
  /* Get Data Friend */
  let option = document.querySelectorAll('.container__search-friend__list__item__select li');
  option.forEach(item => {
    item.onclick = function(){
      const parent = this.parentElement.parentElement.getAttribute('id');
      toggleOption(parent)
      let dataValue = this.getAttribute("data-value");
      let selectedOption = document.querySelectorAll(`#selected-${parent}`);
      selectedOption[0].textContent = this.innerHTML;
      this.classList.add('active');
      mountRequest(parent, dataValue);
      toggleSelect(parent)
    }
  })
  
  function render(data){
    const activeResults = document.querySelector(".container__search-results");
    activeResults.classList.remove("no-data");
    if(data.length){
      Card(data);
      activeResults.classList.add("has-data");
    }else{
      activeResults.classList.add("no-data");
    }
    activeResults.classList.add("active");
    window.location.href = "#search-results";
  }
  
  function apiCall(){
    const isReady = data.sun !== '' && data.water !== '' && data.pets !== '';
    if(isReady){
      getGreenFriend();
    }
  }
  
  function getGreenFriend() {
    toggleLoading(true);
    fetch(`${Api}?${data.sun}&${data.water}&${data.pets}`)
    .then(response => response.json())
    .then(data => { 
      render(data)
      toggleLoading(false);
    })
    .catch(error => { 
      render(error)
      toggleLoading(false);
    })
  }
}