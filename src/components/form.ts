import { createGuide } from "./guide";
import type { BirthInput, CalendarType, Gender } from "../lib/types";

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
  section.className = "section";
  section.id = "input";

  const guide = createGuide();

  section.innerHTML = `
    <div class="section__inner">
      <h2 class="zh">告訴我你的出生時刻</h2>
      <span class="en">Tell me when your story began</span>

      <div class="form-card">
        <div class="toggle-group" data-role="calendar-toggle">
          <button type="button" data-value="solar" class="is-active">陽曆 Solar</button>
          <button type="button" data-value="lunar">農曆 Lunar</button>
        </div>

        <div class="toggle-group" data-role="gender-toggle" style="margin-top:12px;">
          <button type="button" data-value="female" class="is-active">女 Female</button>
          <button type="button" data-value="male">男 Male</button>
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

  section.querySelector(".section__inner")!.appendChild(guide.el);
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

  const submitBtn = section.querySelector('[data-role="submit"]') as HTMLButtonElement;
  submitBtn.addEventListener("click", () => {
    const year = Number((section.querySelector("#f-year") as HTMLSelectElement).value);
    const month = Number((section.querySelector("#f-month") as HTMLSelectElement).value);
    const day = Number((section.querySelector("#f-day") as HTMLSelectElement).value);
    const hour = Number((section.querySelector("#f-hour") as HTMLSelectElement).value);
    const minute = Number((section.querySelector("#f-minute") as HTMLSelectElement).value);

    const daysInMonth = new Date(year, month, 0).getDate();
    if (calendarType === "solar" && day > daysInMonth) {
      errorEl.textContent = "這個月份沒有這一天，請確認日期喔 / That date doesn't exist in this month.";
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
    };

    guide.say("好，讓我來翻翻星圖……", "Alright, let me turn the pages of your chart...");
    onSubmit(input);
  });

  return { section, guide };
}
