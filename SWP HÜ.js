"use strict";

const ul = document.getElementById("meineUL");

function addElement() {
    const li = document.createElement("li");
    const Eingabefeld2 = document.getElementById("Eingabefeld").value;
    li.innerHTML = Eingabefeld2;
    ul.appendChild(li);
}