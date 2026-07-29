export interface City {
  id: string;
  nameZh: string;
  nameEn: string;
  countryZh: string;
  countryEn: string;
  lat: number;
  lon: number;
  /** Standard (non-DST) UTC offset in hours, used as the civil time zone's reference meridian. */
  utcOffset: number;
}

export const CITIES: City[] = [
  // 台灣
  { id: "keelung", nameZh: "基隆", nameEn: "Keelung", countryZh: "台灣", countryEn: "Taiwan", lat: 25.13, lon: 121.74, utcOffset: 8 },
  { id: "taipei", nameZh: "台北", nameEn: "Taipei", countryZh: "台灣", countryEn: "Taiwan", lat: 25.0, lon: 121.5, utcOffset: 8 },
  { id: "newtaipei", nameZh: "新北", nameEn: "New Taipei", countryZh: "台灣", countryEn: "Taiwan", lat: 25.01, lon: 121.46, utcOffset: 8 },
  { id: "taoyuan", nameZh: "桃園", nameEn: "Taoyuan", countryZh: "台灣", countryEn: "Taiwan", lat: 24.99, lon: 121.3, utcOffset: 8 },
  { id: "hsinchu", nameZh: "新竹", nameEn: "Hsinchu", countryZh: "台灣", countryEn: "Taiwan", lat: 24.8, lon: 121.0, utcOffset: 8 },
  { id: "miaoli", nameZh: "苗栗", nameEn: "Miaoli", countryZh: "台灣", countryEn: "Taiwan", lat: 24.56, lon: 120.82, utcOffset: 8 },
  { id: "taichung", nameZh: "台中", nameEn: "Taichung", countryZh: "台灣", countryEn: "Taiwan", lat: 24.1, lon: 120.7, utcOffset: 8 },
  { id: "changhua", nameZh: "彰化", nameEn: "Changhua", countryZh: "台灣", countryEn: "Taiwan", lat: 24.08, lon: 120.54, utcOffset: 8 },
  { id: "nantou", nameZh: "南投", nameEn: "Nantou", countryZh: "台灣", countryEn: "Taiwan", lat: 23.91, lon: 120.68, utcOffset: 8 },
  { id: "yunlin", nameZh: "雲林", nameEn: "Yunlin", countryZh: "台灣", countryEn: "Taiwan", lat: 23.71, lon: 120.54, utcOffset: 8 },
  { id: "chiayi", nameZh: "嘉義", nameEn: "Chiayi", countryZh: "台灣", countryEn: "Taiwan", lat: 23.48, lon: 120.45, utcOffset: 8 },
  { id: "tainan", nameZh: "台南", nameEn: "Tainan", countryZh: "台灣", countryEn: "Taiwan", lat: 23.0, lon: 120.2, utcOffset: 8 },
  { id: "kaohsiung", nameZh: "高雄", nameEn: "Kaohsiung", countryZh: "台灣", countryEn: "Taiwan", lat: 22.6, lon: 120.3, utcOffset: 8 },
  { id: "pingtung", nameZh: "屏東", nameEn: "Pingtung", countryZh: "台灣", countryEn: "Taiwan", lat: 22.67, lon: 120.49, utcOffset: 8 },
  { id: "yilan", nameZh: "宜蘭", nameEn: "Yilan", countryZh: "台灣", countryEn: "Taiwan", lat: 24.75, lon: 121.75, utcOffset: 8 },
  { id: "hualien", nameZh: "花蓮", nameEn: "Hualien", countryZh: "台灣", countryEn: "Taiwan", lat: 24.0, lon: 121.6, utcOffset: 8 },
  { id: "taitung", nameZh: "台東", nameEn: "Taitung", countryZh: "台灣", countryEn: "Taiwan", lat: 22.76, lon: 121.14, utcOffset: 8 },
  { id: "penghu", nameZh: "澎湖", nameEn: "Penghu", countryZh: "台灣", countryEn: "Taiwan", lat: 23.57, lon: 119.58, utcOffset: 8 },
  { id: "kinmen", nameZh: "金門", nameEn: "Kinmen", countryZh: "台灣", countryEn: "Taiwan", lat: 24.45, lon: 118.32, utcOffset: 8 },
  { id: "lienchiang", nameZh: "連江", nameEn: "Lienchiang", countryZh: "台灣", countryEn: "Taiwan", lat: 26.16, lon: 119.95, utcOffset: 8 },

  // 港澳
  { id: "hongkong", nameZh: "香港", nameEn: "Hong Kong", countryZh: "香港", countryEn: "Hong Kong", lat: 22.3, lon: 114.2, utcOffset: 8 },
  { id: "macau", nameZh: "澳門", nameEn: "Macau", countryZh: "澳門", countryEn: "Macau", lat: 22.2, lon: 113.5, utcOffset: 8 },

  // 中國
  { id: "beijing", nameZh: "北京", nameEn: "Beijing", countryZh: "中國", countryEn: "China", lat: 39.9, lon: 116.4, utcOffset: 8 },
  { id: "shanghai", nameZh: "上海", nameEn: "Shanghai", countryZh: "中國", countryEn: "China", lat: 31.2, lon: 121.5, utcOffset: 8 },
  { id: "guangzhou", nameZh: "廣州", nameEn: "Guangzhou", countryZh: "中國", countryEn: "China", lat: 23.1, lon: 113.3, utcOffset: 8 },
  { id: "shenzhen", nameZh: "深圳", nameEn: "Shenzhen", countryZh: "中國", countryEn: "China", lat: 22.5, lon: 114.1, utcOffset: 8 },
  { id: "chengdu", nameZh: "成都", nameEn: "Chengdu", countryZh: "中國", countryEn: "China", lat: 30.7, lon: 104.1, utcOffset: 8 },
  { id: "chongqing", nameZh: "重慶", nameEn: "Chongqing", countryZh: "中國", countryEn: "China", lat: 29.6, lon: 106.6, utcOffset: 8 },
  { id: "xian", nameZh: "西安", nameEn: "Xi'an", countryZh: "中國", countryEn: "China", lat: 34.3, lon: 109.0, utcOffset: 8 },
  { id: "wuhan", nameZh: "武漢", nameEn: "Wuhan", countryZh: "中國", countryEn: "China", lat: 30.6, lon: 114.3, utcOffset: 8 },
  { id: "urumqi", nameZh: "烏魯木齊", nameEn: "Urumqi", countryZh: "中國", countryEn: "China", lat: 43.8, lon: 87.6, utcOffset: 8 },
  { id: "harbin", nameZh: "哈爾濱", nameEn: "Harbin", countryZh: "中國", countryEn: "China", lat: 45.8, lon: 126.5, utcOffset: 8 },

  // 日韓
  { id: "tokyo", nameZh: "東京", nameEn: "Tokyo", countryZh: "日本", countryEn: "Japan", lat: 35.7, lon: 139.7, utcOffset: 9 },
  { id: "osaka", nameZh: "大阪", nameEn: "Osaka", countryZh: "日本", countryEn: "Japan", lat: 34.7, lon: 135.5, utcOffset: 9 },
  { id: "fukuoka", nameZh: "福岡", nameEn: "Fukuoka", countryZh: "日本", countryEn: "Japan", lat: 33.6, lon: 130.4, utcOffset: 9 },
  { id: "seoul", nameZh: "首爾", nameEn: "Seoul", countryZh: "南韓", countryEn: "South Korea", lat: 37.6, lon: 127.0, utcOffset: 9 },
  { id: "busan", nameZh: "釜山", nameEn: "Busan", countryZh: "南韓", countryEn: "South Korea", lat: 35.2, lon: 129.1, utcOffset: 9 },

  // 東南亞
  { id: "singapore", nameZh: "新加坡", nameEn: "Singapore", countryZh: "新加坡", countryEn: "Singapore", lat: 1.35, lon: 103.8, utcOffset: 8 },
  { id: "kualalumpur", nameZh: "吉隆坡", nameEn: "Kuala Lumpur", countryZh: "馬來西亞", countryEn: "Malaysia", lat: 3.1, lon: 101.7, utcOffset: 8 },
  { id: "bangkok", nameZh: "曼谷", nameEn: "Bangkok", countryZh: "泰國", countryEn: "Thailand", lat: 13.75, lon: 100.5, utcOffset: 7 },
  { id: "hanoi", nameZh: "河內", nameEn: "Hanoi", countryZh: "越南", countryEn: "Vietnam", lat: 21.0, lon: 105.8, utcOffset: 7 },
  { id: "hochiminh", nameZh: "胡志明市", nameEn: "Ho Chi Minh City", countryZh: "越南", countryEn: "Vietnam", lat: 10.8, lon: 106.7, utcOffset: 7 },
  { id: "jakarta", nameZh: "雅加達", nameEn: "Jakarta", countryZh: "印尼", countryEn: "Indonesia", lat: -6.2, lon: 106.8, utcOffset: 7 },
  { id: "manila", nameZh: "馬尼拉", nameEn: "Manila", countryZh: "菲律賓", countryEn: "Philippines", lat: 14.6, lon: 121.0, utcOffset: 8 },
  { id: "phnompenh", nameZh: "金邊", nameEn: "Phnom Penh", countryZh: "柬埔寨", countryEn: "Cambodia", lat: 11.55, lon: 104.9, utcOffset: 7 },
  { id: "yangon", nameZh: "仰光", nameEn: "Yangon", countryZh: "緬甸", countryEn: "Myanmar", lat: 16.8, lon: 96.15, utcOffset: 6.5 },

  // 南亞
  { id: "newdelhi", nameZh: "新德里", nameEn: "New Delhi", countryZh: "印度", countryEn: "India", lat: 28.6, lon: 77.2, utcOffset: 5.5 },
  { id: "mumbai", nameZh: "孟買", nameEn: "Mumbai", countryZh: "印度", countryEn: "India", lat: 19.1, lon: 72.9, utcOffset: 5.5 },
  { id: "kolkata", nameZh: "加爾各答", nameEn: "Kolkata", countryZh: "印度", countryEn: "India", lat: 22.6, lon: 88.4, utcOffset: 5.5 },
  { id: "karachi", nameZh: "喀拉蚩", nameEn: "Karachi", countryZh: "巴基斯坦", countryEn: "Pakistan", lat: 24.9, lon: 67.0, utcOffset: 5 },
  { id: "dhaka", nameZh: "達卡", nameEn: "Dhaka", countryZh: "孟加拉", countryEn: "Bangladesh", lat: 23.8, lon: 90.4, utcOffset: 6 },
  { id: "colombo", nameZh: "可倫坡", nameEn: "Colombo", countryZh: "斯里蘭卡", countryEn: "Sri Lanka", lat: 6.9, lon: 79.9, utcOffset: 5.5 },
  { id: "kathmandu", nameZh: "加德滿都", nameEn: "Kathmandu", countryZh: "尼泊爾", countryEn: "Nepal", lat: 27.7, lon: 85.3, utcOffset: 5.75 },

  // 中東
  { id: "dubai", nameZh: "杜拜", nameEn: "Dubai", countryZh: "阿聯", countryEn: "UAE", lat: 25.3, lon: 55.3, utcOffset: 4 },
  { id: "riyadh", nameZh: "利雅德", nameEn: "Riyadh", countryZh: "沙烏地阿拉伯", countryEn: "Saudi Arabia", lat: 24.7, lon: 46.7, utcOffset: 3 },
  { id: "tehran", nameZh: "德黑蘭", nameEn: "Tehran", countryZh: "伊朗", countryEn: "Iran", lat: 35.7, lon: 51.4, utcOffset: 3.5 },
  { id: "istanbul", nameZh: "伊斯坦堡", nameEn: "Istanbul", countryZh: "土耳其", countryEn: "Turkey", lat: 41.0, lon: 29.0, utcOffset: 3 },
  { id: "jerusalem", nameZh: "耶路撒冷", nameEn: "Jerusalem", countryZh: "以色列", countryEn: "Israel", lat: 31.8, lon: 35.2, utcOffset: 2 },
  { id: "cairo", nameZh: "開羅", nameEn: "Cairo", countryZh: "埃及", countryEn: "Egypt", lat: 30.0, lon: 31.2, utcOffset: 2 },
  { id: "baghdad", nameZh: "巴格達", nameEn: "Baghdad", countryZh: "伊拉克", countryEn: "Iraq", lat: 33.3, lon: 44.4, utcOffset: 3 },

  // 非洲
  { id: "johannesburg", nameZh: "約翰尼斯堡", nameEn: "Johannesburg", countryZh: "南非", countryEn: "South Africa", lat: -26.2, lon: 28.0, utcOffset: 2 },
  { id: "capetown", nameZh: "開普敦", nameEn: "Cape Town", countryZh: "南非", countryEn: "South Africa", lat: -33.9, lon: 18.4, utcOffset: 2 },
  { id: "lagos", nameZh: "拉哥斯", nameEn: "Lagos", countryZh: "奈及利亞", countryEn: "Nigeria", lat: 6.5, lon: 3.4, utcOffset: 1 },
  { id: "nairobi", nameZh: "奈洛比", nameEn: "Nairobi", countryZh: "肯亞", countryEn: "Kenya", lat: -1.3, lon: 36.8, utcOffset: 3 },
  { id: "algiers", nameZh: "阿爾及爾", nameEn: "Algiers", countryZh: "阿爾及利亞", countryEn: "Algeria", lat: 36.8, lon: 3.1, utcOffset: 1 },
  { id: "accra", nameZh: "阿克拉", nameEn: "Accra", countryZh: "迦納", countryEn: "Ghana", lat: 5.6, lon: -0.2, utcOffset: 0 },

  // 歐洲
  { id: "london", nameZh: "倫敦", nameEn: "London", countryZh: "英國", countryEn: "United Kingdom", lat: 51.5, lon: -0.13, utcOffset: 0 },
  { id: "dublin", nameZh: "都柏林", nameEn: "Dublin", countryZh: "愛爾蘭", countryEn: "Ireland", lat: 53.3, lon: -6.3, utcOffset: 0 },
  { id: "lisbon", nameZh: "里斯本", nameEn: "Lisbon", countryZh: "葡萄牙", countryEn: "Portugal", lat: 38.7, lon: -9.1, utcOffset: 0 },
  { id: "paris", nameZh: "巴黎", nameEn: "Paris", countryZh: "法國", countryEn: "France", lat: 48.9, lon: 2.35, utcOffset: 1 },
  { id: "berlin", nameZh: "柏林", nameEn: "Berlin", countryZh: "德國", countryEn: "Germany", lat: 52.5, lon: 13.4, utcOffset: 1 },
  { id: "madrid", nameZh: "馬德里", nameEn: "Madrid", countryZh: "西班牙", countryEn: "Spain", lat: 40.4, lon: -3.7, utcOffset: 1 },
  { id: "rome", nameZh: "羅馬", nameEn: "Rome", countryZh: "義大利", countryEn: "Italy", lat: 41.9, lon: 12.5, utcOffset: 1 },
  { id: "amsterdam", nameZh: "阿姆斯特丹", nameEn: "Amsterdam", countryZh: "荷蘭", countryEn: "Netherlands", lat: 52.4, lon: 4.9, utcOffset: 1 },
  { id: "brussels", nameZh: "布魯塞爾", nameEn: "Brussels", countryZh: "比利時", countryEn: "Belgium", lat: 50.85, lon: 4.35, utcOffset: 1 },
  { id: "vienna", nameZh: "維也納", nameEn: "Vienna", countryZh: "奧地利", countryEn: "Austria", lat: 48.2, lon: 16.4, utcOffset: 1 },
  { id: "zurich", nameZh: "蘇黎世", nameEn: "Zurich", countryZh: "瑞士", countryEn: "Switzerland", lat: 47.4, lon: 8.5, utcOffset: 1 },
  { id: "stockholm", nameZh: "斯德哥爾摩", nameEn: "Stockholm", countryZh: "瑞典", countryEn: "Sweden", lat: 59.3, lon: 18.1, utcOffset: 1 },
  { id: "oslo", nameZh: "奧斯陸", nameEn: "Oslo", countryZh: "挪威", countryEn: "Norway", lat: 59.9, lon: 10.75, utcOffset: 1 },
  { id: "copenhagen", nameZh: "哥本哈根", nameEn: "Copenhagen", countryZh: "丹麥", countryEn: "Denmark", lat: 55.7, lon: 12.6, utcOffset: 1 },
  { id: "warsaw", nameZh: "華沙", nameEn: "Warsaw", countryZh: "波蘭", countryEn: "Poland", lat: 52.2, lon: 21.0, utcOffset: 1 },
  { id: "athens", nameZh: "雅典", nameEn: "Athens", countryZh: "希臘", countryEn: "Greece", lat: 38.0, lon: 23.7, utcOffset: 2 },
  { id: "helsinki", nameZh: "赫爾辛基", nameEn: "Helsinki", countryZh: "芬蘭", countryEn: "Finland", lat: 60.2, lon: 24.9, utcOffset: 2 },
  { id: "bucharest", nameZh: "布加勒斯特", nameEn: "Bucharest", countryZh: "羅馬尼亞", countryEn: "Romania", lat: 44.4, lon: 26.1, utcOffset: 2 },
  { id: "kyiv", nameZh: "基輔", nameEn: "Kyiv", countryZh: "烏克蘭", countryEn: "Ukraine", lat: 50.45, lon: 30.5, utcOffset: 2 },
  { id: "moscow", nameZh: "莫斯科", nameEn: "Moscow", countryZh: "俄羅斯", countryEn: "Russia", lat: 55.75, lon: 37.6, utcOffset: 3 },

  // 北美
  { id: "newyork", nameZh: "紐約", nameEn: "New York", countryZh: "美國", countryEn: "United States", lat: 40.7, lon: -74.0, utcOffset: -5 },
  { id: "losangeles", nameZh: "洛杉磯", nameEn: "Los Angeles", countryZh: "美國", countryEn: "United States", lat: 34.05, lon: -118.25, utcOffset: -8 },
  { id: "chicago", nameZh: "芝加哥", nameEn: "Chicago", countryZh: "美國", countryEn: "United States", lat: 41.9, lon: -87.6, utcOffset: -6 },
  { id: "houston", nameZh: "休士頓", nameEn: "Houston", countryZh: "美國", countryEn: "United States", lat: 29.8, lon: -95.4, utcOffset: -6 },
  { id: "sanfrancisco", nameZh: "舊金山", nameEn: "San Francisco", countryZh: "美國", countryEn: "United States", lat: 37.8, lon: -122.4, utcOffset: -8 },
  { id: "seattle", nameZh: "西雅圖", nameEn: "Seattle", countryZh: "美國", countryEn: "United States", lat: 47.6, lon: -122.3, utcOffset: -8 },
  { id: "denver", nameZh: "丹佛", nameEn: "Denver", countryZh: "美國", countryEn: "United States", lat: 39.7, lon: -105.0, utcOffset: -7 },
  { id: "phoenix", nameZh: "鳳凰城", nameEn: "Phoenix", countryZh: "美國", countryEn: "United States", lat: 33.4, lon: -112.1, utcOffset: -7 },
  { id: "honolulu", nameZh: "檀香山", nameEn: "Honolulu", countryZh: "美國", countryEn: "United States", lat: 21.3, lon: -157.85, utcOffset: -10 },
  { id: "toronto", nameZh: "多倫多", nameEn: "Toronto", countryZh: "加拿大", countryEn: "Canada", lat: 43.65, lon: -79.4, utcOffset: -5 },
  { id: "vancouver", nameZh: "溫哥華", nameEn: "Vancouver", countryZh: "加拿大", countryEn: "Canada", lat: 49.3, lon: -123.1, utcOffset: -8 },
  { id: "montreal", nameZh: "蒙特婁", nameEn: "Montreal", countryZh: "加拿大", countryEn: "Canada", lat: 45.5, lon: -73.6, utcOffset: -5 },
  { id: "mexicocity", nameZh: "墨西哥城", nameEn: "Mexico City", countryZh: "墨西哥", countryEn: "Mexico", lat: 19.4, lon: -99.1, utcOffset: -6 },

  // 南美
  { id: "saopaulo", nameZh: "聖保羅", nameEn: "São Paulo", countryZh: "巴西", countryEn: "Brazil", lat: -23.5, lon: -46.6, utcOffset: -3 },
  { id: "riodejaneiro", nameZh: "里約熱內盧", nameEn: "Rio de Janeiro", countryZh: "巴西", countryEn: "Brazil", lat: -22.9, lon: -43.2, utcOffset: -3 },
  { id: "buenosaires", nameZh: "布宜諾斯艾利斯", nameEn: "Buenos Aires", countryZh: "阿根廷", countryEn: "Argentina", lat: -34.6, lon: -58.4, utcOffset: -3 },
  { id: "lima", nameZh: "利馬", nameEn: "Lima", countryZh: "秘魯", countryEn: "Peru", lat: -12.05, lon: -77.05, utcOffset: -5 },
  { id: "bogota", nameZh: "波哥大", nameEn: "Bogotá", countryZh: "哥倫比亞", countryEn: "Colombia", lat: 4.7, lon: -74.1, utcOffset: -5 },
  { id: "santiago", nameZh: "聖地牙哥", nameEn: "Santiago", countryZh: "智利", countryEn: "Chile", lat: -33.45, lon: -70.65, utcOffset: -4 },
  { id: "caracas", nameZh: "卡拉卡斯", nameEn: "Caracas", countryZh: "委內瑞拉", countryEn: "Venezuela", lat: 10.5, lon: -66.9, utcOffset: -4 },

  // 大洋洲
  { id: "sydney", nameZh: "雪梨", nameEn: "Sydney", countryZh: "澳洲", countryEn: "Australia", lat: -33.9, lon: 151.2, utcOffset: 10 },
  { id: "melbourne", nameZh: "墨爾本", nameEn: "Melbourne", countryZh: "澳洲", countryEn: "Australia", lat: -37.8, lon: 145.0, utcOffset: 10 },
  { id: "brisbane", nameZh: "布里斯本", nameEn: "Brisbane", countryZh: "澳洲", countryEn: "Australia", lat: -27.5, lon: 153.0, utcOffset: 10 },
  { id: "perth", nameZh: "伯斯", nameEn: "Perth", countryZh: "澳洲", countryEn: "Australia", lat: -31.95, lon: 115.85, utcOffset: 8 },
  { id: "adelaide", nameZh: "阿德雷德", nameEn: "Adelaide", countryZh: "澳洲", countryEn: "Australia", lat: -34.9, lon: 138.6, utcOffset: 9.5 },
  { id: "auckland", nameZh: "奧克蘭", nameEn: "Auckland", countryZh: "紐西蘭", countryEn: "New Zealand", lat: -36.85, lon: 174.75, utcOffset: 12 },
  { id: "wellington", nameZh: "威靈頓", nameEn: "Wellington", countryZh: "紐西蘭", countryEn: "New Zealand", lat: -41.3, lon: 174.8, utcOffset: 12 },
];

export function findCity(id: string): City | undefined {
  return CITIES.find((c) => c.id === id);
}

export function searchCities(query: string, limit = 8): City[] {
  const q = query.trim().toLowerCase();
  if (!q) return CITIES.slice(0, limit);
  const matches = CITIES.filter(
    (c) =>
      c.nameZh.includes(query.trim()) ||
      c.nameEn.toLowerCase().includes(q) ||
      c.countryZh.includes(query.trim()) ||
      c.countryEn.toLowerCase().includes(q),
  );
  return matches.slice(0, limit);
}
