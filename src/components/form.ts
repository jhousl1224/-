import { createGuide } from "./guide";
import { getStoredLang, type Lang } from "./langToggle";
import { findCity, searchCities, type City } from "../lib/cities";
import type { BirthInput, CalendarType, Gender } from "../lib/types";

const BIRTHPLACE_PLACEHOLDER: Record<Lang, string> = {
  zh: "輸入城市名稱",
  en: "Search a city...",
};

function option(value: string | number, label: string) {
  return `<option value="${value}">${label}</option>`;
}

function buildYearOptions() {
  const currentYear = new Date().getFullYear();
  let html = "";
  for (let y = currentYear; y >= 1920; y--) {
    html += option(y, `${y}`);
  }
  return html;
}

function buildRangeOptions(start: number, end: number, pad = false) {
  let html = "";
  for (let i = start; i <= end; i++) {
    html += option(i, pad ? String(i).padStart(2, "0") : String(i));
  }
  return html;
}

export function mountForm(root: HTMLElement, onSubmit: (input: BirthInput) => void) {
  const section = document.createElement("section");
  section.className = "section section--locked";
  section.id = "input";

  const guide = createGuide();

  section.innerHTML = `
    <div class="section__inner">
      <h2 class="zh">告訴我你的出生時刻</h2>
      <h2 class="en">Tell me when your story began</h2>

      <div class="form-card">
        <div class="toggle-group" data-role="calendar-toggle">
          <button type="button" data-value="solar" class="is-active">陽曆 Solar</button>
          <button type="button" data-value="lunar">農曆 Lunar</button>
        </div>

        <div class="toggle-group" data-role="gender-toggle" style="margin-top:8px;">
          <button type="button" data-value="female" class="is-active">女 Female</button>
          <button type="button" data-value="male">男 Male</button>
        </div>

        <div class="field" style="position:relative;">
          <label for="f-birthplace">出生地 Birthplace</label>
          <input
            type="text"
            id="f-birthplace"
            autocomplete="off"
            data-role="birthplace-input"
          />
          <div class="birthplace-suggestions" data-role="birthplace-suggestions"></div>
        </div>

        <div class="field-row">
          <div class="field">
            <label for="f-year">年 Year</label>
            <select id="f-year">${buildYearOptions()}</select>
          </div>
          <div class="field">
            <label for="f-month">月 Month</label>
            <select id="f-month">${buildRangeOptions(1, 12)}</select>
          </div>
          <div class="field">
            <label for="f-day">日 Day</label>
            <select id="f-day">${buildRangeOptions(1, 31)}</select>
          </div>
        </div>

        <div class="field-row">
          <div class="field">
            <label for="f-hour">時 Hour</label>
            <select id="f-hour">${buildRangeOptions(0, 23, true)}</select>
          </div>
          <div class="field">
            <label for="f-minute">分 Minute</label>
            <select id="f-minute">${buildRangeOptions(0, 59, true)}</select>
          </div>
        </div>

        <label class="field-leap" data-role="leap-field" style="display:none;">
          <input type="checkbox" id="f-leap" />
          <span>此月為閏月 This is a leap month</span>
        </label>

        <p class="form-error" data-role="error"></p>

        <button type="button" class="btn-primary" data-role="submit">
          <span class="zh">生成我的命盤</span><span class="en">Generate My Chart</span>
        </button>
      </div>
    </div>
  `;

  const formCard = section.querySelector(".form-card") as HTMLElement;
  formCard.parentElement!.insertBefore(guide.el, formCard);
  root.appendChild(section);

  window.setTimeout(() => {
    guide.say(
      "不知道出生時間也沒關係，選個大概的時辰，我們先看個大方向。",
      "Not sure of the exact hour? Pick your best guess — we'll still find the big picture.",
    );
  }, 600);

  let calendarType: CalendarType = "solar";
  let gender: Gender = "female";

  const calendarToggle = section.querySelector('[data-role="calendar-toggle"]') as HTMLElement;
  const genderToggle = section.querySelector('[data-role="gender-toggle"]') as HTMLElement;
  const leapField = section.querySelector('[data-role="leap-field"]') as HTMLElement;
  const leapCheckbox = section.querySelector("#f-leap") as HTMLInputElement;
  const errorEl = section.querySelector('[data-role="error"]') as HTMLElement;

  calendarToggle.addEventListener("click", (e) => {
    const btn = (e.target as HTMLElement).closest("button");
    if (!btn) return;
    calendarType = btn.dataset.value as CalendarType;
    calendarToggle.querySelectorAll("button").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    leapField.style.display = calendarType === "lunar" ? "flex" : "none";
  });

  genderToggle.addEventListener("click", (e) => {
    const btn = (e.target as HTMLElement).closest("button");
    if (!btn) return;
    gender = btn.dataset.value as Gender;
    genderToggle.querySelectorAll("button").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
  });

  let selectedCity: City | null = null;
  const birthplaceInput = section.querySelector('[data-role="birthplace-input"]') as HTMLInputElement;
  const birthplaceSuggestions = section.querySelector('[data-role="birthplace-suggestions"]') as HTMLElement;

  birthplaceInput.placeholder = BIRTHPLACE_PLACEHOLDER[getStoredLang()];
  window.addEventListener("starself:lang-changed", (e) => {
    birthplaceInput.placeholder = BIRTHPLACE_PLACEHOLDER[(e as CustomEvent<Lang>).detail];
  });

  function renderBirthplaceSuggestions(cities: City[]) {
    if (cities.length === 0) {
      birthplaceSuggestions.innerHTML = "";
      birthplaceSuggestions.classList.remove("is-open");
      return;
    }
    birthplaceSuggestions.innerHTML = cities
      .map(
        (c) =>
          `<button type="button" class="birthplace-option" data-city-id="${c.id}"><span class="zh">${c.nameZh}</span> <span class="en">${c.nameEn}</span> · <span class="zh">${c.countryZh}</span></button>`,
      )
      .join("");
    birthplaceSuggestions.classList.add("is-open");
  }

  birthplaceInput.addEventListener("input", () => {
    selectedCity = null;
    renderBirthplaceSuggestions(searchCities(birthplaceInput.value));
  });

  birthplaceInput.addEventListener("focus", () => {
    renderBirthplaceSuggestions(searchCities(birthplaceInput.value));
  });

  birthplaceSuggestions.addEventListener("mousedown", (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLButtonElement>(".birthplace-option");
    if (!btn) return;
    e.preventDefault();
    const city = findCity(btn.dataset.cityId ?? "") ?? null;
    selectedCity = city;
    if (city) birthplaceInput.value = `${city.nameZh} ${city.nameEn}`;
    renderBirthplaceSuggestions([]);
  });

  document.addEventListener("click", (e) => {
    if (!section.contains(e.target as Node)) return;
    if (birthplaceInput.contains(e.target as Node) || birthplaceSuggestions.contains(e.target as Node)) return;
    renderBirthplaceSuggestions([]);
  });

  const submitBtn = section.querySelector('[data-role="submit"]') as HTMLButtonElement;
  submitBtn.addEventListener("click", () => {
    const year = Number((section.querySelector("#f-year") as HTMLSelectElement).value);
    const month = Number((section.querySelector("#f-month") as HTMLSelectElement).value);
    const day = Number((section.querySelector("#f-day") as HTMLSelectElement).value);
    const hour = Number((section.querySelector("#f-hour") as HTMLSelectElement).value);
    const minute = Number((section.querySelector("#f-minute") as HTMLSelectElement).value);

    const daysInMonth = new Date(year, month, 0).getDate();
    if (calendarType === "solar" && day > daysInMonth) {
      errorEl.innerHTML = `<span class="zh">這個月份沒有這一天，請確認日期喔</span> <span class="en">That date doesn't exist in this month.</span>`;
      return;
    }
    if (!selectedCity) {
      errorEl.innerHTML = `<span class="zh">請從清單中選擇出生地</span> <span class="en">Please choose a birthplace from the list.</span>`;
      return;
    }
    errorEl.textContent = "";

    const input: BirthInput = {
      calendarType,
      year,
      month,
      day,
      hour,
      minute,
      gender,
      isLeapMonth: calendarType === "lunar" ? leapCheckbox.checked : false,
      birthplace: selectedCity,
    };

    guide.say("好，讓我來翻翻星圖……", "Alright, let's see what the stars have to say...");
    onSubmit(input);
  });

  return { section, guide };
}
