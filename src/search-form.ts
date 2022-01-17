import { renderBlock } from "./lib.js";

export function renderSearchFormBlock(
  checkInDate: Date = new Date(),
  checkOutDate: Date = new Date()
) {
  const defaultCheckInDate = new Date(Date.now() + 3600 * 1000 * 24)
    .toJSON()
    .slice(0, 10);
  const defaultCheckOutDate = new Date(Date.now() + 3600 * 1000 * 24 * 3)
    .toJSON()
    .slice(0, 10);
  const minDate = new Date().toJSON().slice(0, 10);
  const maxDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 2,
    1
  )
    .toJSON()
    .slice(0, 10);

  renderBlock(
    "search-form-block",
    `
    <form>
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
            <input id="check-in-date" type="date" value=${defaultCheckInDate} min=${minDate} max=${maxDate} name="checkin" />
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
