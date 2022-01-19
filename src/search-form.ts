import { renderBlock } from "./lib.js";

interface SearchFormData {
  checkInDate: string;
  checkOutDate: string;
  price?: number;
}

const defaultCheckInDate = new Date(Date.now() + 3600 * 1000 * 24)
  .toJSON()
  .slice(0, 10);
const defaultCheckOutDate = new Date(Date.now() + 3600 * 1000 * 24 * 3)
  .toJSON()
  .slice(0, 10);
const minDate = new Date().toJSON().slice(0, 10);
const maxDate = new Date(new Date().getFullYear(), new Date().getMonth() + 2, 1)
  .toJSON()
  .slice(0, 10);

let searchDataInput: SearchFormData = {
  checkInDate: defaultCheckInDate,
  checkOutDate: defaultCheckOutDate,
};

export function renderSearchFormBlock() {
  renderBlock(
    "search-form-block",
    `
    <form id="form">
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value=${defaultCheckInDate} min=${minDate} max=${maxDate}  name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${defaultCheckOutDate} min=${minDate} max=${maxDate} name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  );
}

export function searchHandler() {
  const checkInInput = document.querySelector("#check-in-date");
  const checkOutInput = document.querySelector("#check-out-date");
  const maxPriceInput = document.querySelector("#max-price");
  checkInInput.addEventListener("input", (event) => {
    checkInInput.setAttribute(
      "value",
      (event.target as HTMLInputElement).value
    );
    searchDataInput.checkInDate = checkInInput.getAttribute("value");
  });
  checkOutInput.addEventListener("input", (event) => {
    checkOutInput.setAttribute(
      "value",
      (event.target as HTMLInputElement).value
    );
    searchDataInput.checkOutDate = checkOutInput.getAttribute("value");
  });
  maxPriceInput.addEventListener("input", (event) => {
    maxPriceInput.setAttribute(
      "value",
      (event.target as HTMLInputElement).value
    );
    searchDataInput.price = Number(maxPriceInput.getAttribute("value"));
  });

  return searchDataInput;
}

export function search(searchData: SearchFormData) {
  const form = document.querySelector("#form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(searchData);
  });
}
