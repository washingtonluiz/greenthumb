import OneDrop from "../../images/icons/1-drop.svg";
import TwoDrop from "../../images/icons/2-drops.svg";
import ThreeDrop from "../../images/icons/3-drops.svg";
import HighSun from "../../images/icons/high-sun.svg";
import LowSun from "../../images/icons/low-sun.svg";
import NoSun from "../../images/icons/no-sun.svg";
import NonToxic from "../../images/icons/pet.svg";
import Toxic from "../../images/icons/toxic.svg";

const Card = (data) => {
  const element = document.querySelector(".container__search-results__products__list");
  element.innerHTML = data.map((item) => {
    return (
      `
      <li class="container__search-results__products__list__item ${item.staff_favorite ? 'container__search-results__products__list__item--favorite' : ''}">
        <span class="container__search-results__products__list__item__favorite">
          ✨ Staff favorite
        </span>
        <picture>
          <img src="${item.url}" alt="" />
        </picture>
        <footer>
          <h2>${item.name}</h2>
          <div class="container__search-results__products__list__item__box">
            <span class="container__search-results__products__list__item__box__price">$${item.price}</span>
            <div class="container__search-results__products__list__item__box__icons">
              <picture class="non-toxic">
                <img src=${item.toxicity ? Toxic : NonToxic} alt="" />
              </picture>

              <picture class="high-sun">
                <img src=${item.sun === "high" ? HighSun : item.sun === "low" ? LowSun : NoSun } alt="" />
              </picture>

              <picture class="water-rarely">
                <img src=${item.water === "daily" ? ThreeDrop : item.water === "regularly" ? TwoDrop : OneDrop } alt="" />
              </picture>
            </div>
          </div>
        </footer>
      </li>
      `
    )
  }).join('')
}

export default Card;