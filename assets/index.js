"use strict";

const menuopen = () => {
  const navl = document.querySelector("#navl");
  navl.style.right = "0";
};

const menuClose = () => {
  const hideMenu = document.querySelector("#navl");
  hideMenu.style.right = "-20rem";
};
