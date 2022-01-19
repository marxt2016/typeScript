import { renderSearchFormBlock, search, searchHandler } from "./search-form.js";
import { renderSearchStubBlock } from "./search-results.js";
import { renderUserBlock } from "./user.js";
import { renderToast } from "./lib.js";

let username: string;
let avatarUrl: string;
let favoritesAmount: number;

localStorage.setItem(
  "user",
  JSON.stringify({
    username: "Wade Warren",
    avatarUrl: "/public/img/avatar.png",
  })
);
localStorage.setItem("favoritesAmount", "0");

function getUserData(data: unknown) {
  if (data) {
    username = JSON.parse(localStorage.getItem("user")).username;
    avatarUrl = JSON.parse(localStorage.getItem("user")).avatarUrl;
  } else {
    console.log("User not found");
    return undefined;
  }
}

function getFavoritesAmount(data: unknown) {
  if (data) {
    favoritesAmount = Number(localStorage.getItem("favoritesAmount"));
  } else {
    console.log("Favourites not found");
    return undefined;
  }
}

getUserData(JSON.parse(localStorage.getItem("user")));
getFavoritesAmount(localStorage.getItem("favoritesAmount"));

window.addEventListener("DOMContentLoaded", () => {
  renderUserBlock(username, avatarUrl);
  renderSearchFormBlock();

  renderSearchStubBlock();
  renderToast(
    {
      text: "Это пример уведомления. Используйте его при необходимости",
      type: "success",
    },
    {
      name: "Понял",
      handler: () => {
        console.log("Уведомление закрыто");
      },
    }
  );

  search(searchHandler());
});
