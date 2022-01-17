import { renderSearchFormBlock } from "./search-form.js";
import { renderSearchStubBlock } from "./search-results.js";
import { renderUserBlock } from "./user.js";
import { renderToast } from "./lib.js";

window.addEventListener("DOMContentLoaded", () => {
  renderUserBlock("Wade Warren", "/public/img/avatar.png", 0);
  renderSearchFormBlock(new Date(), new Date());
  console.log(new Date(2022, new Date().getMonth() + 2, 0));
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
});
