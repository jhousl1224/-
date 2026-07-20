import { Lunar, Solar } from "lunar-javascript";
import type { BirthInput, ZodiacResult } from "./types";

const ZODIAC_EN: Record<string, string> = {
  鼠: "Rat",
  牛: "Ox",
  虎: "Tiger",
  兔: "Rabbit",
  龍: "Dragon",
  蛇: "Snake",
  馬: "Horse",
  羊: "Goat",
  猴: "Monkey",
  雞: "Rooster",
  狗: "Dog",
  豬: "Pig",
};

// lunar-javascript 只內建簡體輸出，這裡把生肖字轉回繁體
const SIMPLIFIED_TO_TRADITIONAL: Record<string, string> = {
  龙: "龍",
  马: "馬",
  鸡: "雞",
  猪: "豬",
};

export function calcZodiac(input: BirthInput): ZodiacResult {
  const lunar =
    input.calendarType === "solar"
      ? Solar.fromYmd(input.year, input.month, input.day).getLunar()
      : Lunar.fromYmd(input.year, input.isLeapMonth ? -input.month : input.month, input.day);

  const rawAnimal = lunar.getYearShengXiao();
  const animal = SIMPLIFIED_TO_TRADITIONAL[rawAnimal] ?? rawAnimal;
  return {
    animal,
    animalEn: ZODIAC_EN[animal] ?? animal,
  };
}
