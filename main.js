//  For + break/continue ga oid masalalar (4 ta):

// =======================
// 1-masala:
// 1 dan 100 gacha bo‘lgan sonlarni ekranga chiqaring, lekin 50 ga yetganda tsiklni to‘xtating (break).
// for (let i = 1; i <= 100; i++) {
//   if (i == 50) {
//     break;
//   }

//   console.log(i);
// }

// =======================
// 2-masala:
// 1 dan 20 gacha bo‘lgan sonlarni ekranga chiqaring, lekin 3 ga bo‘linadigan sonlarni tashlab o‘ting (continue).
// for (let i = 1; i <= 20; i++) {
//   if (i % 3 == 0) {
//     continue;
//   }
//   console.log(i);
// }

// =======================
// 3-masala:
// 1 dan 30 gacha bo‘lgan sonlarni chiqarib, faqat 5 ta son chiqargandan keyin tsiklni to‘xtating (break).
// let count = 0;

// for (let i = 1; i <= 30; i++) {
//   console.log(i);
//   count++;

//   if (count == 5) {
//     break;
//   }
// }

// =======================
// 4-masala:
// 1 dan 50 gacha bo‘lgan sonlar orasida 7 ga bo‘linadigan birinchi 3 ta sonni ekranga chiqaring, so‘ngra tsiklni to‘xtating.
// let count = 0;

// for (let i = 1; i <= 50; i++) {
//   if (i % 7 == 0) {
//     console.log(i);
//     count++;

//     if (count == 3) {
//       break;
//     }
//   }
// }

// Switch-case ga oid masalalar (4 ta):

// =======================
// 1-masala:
// Foydalanuvchi kiritgan haftaning raqamiga (1-7) mos ravishda haftaning kunini (dushanba-yakshanba) chiqarib bering.
// let week = +prompt("hafta kuni raqamini kiriting:");

// switch (week) {
//   case 1:
//     console.log("Dushanba");
//     break;
//   case 2:
//     console.log("Seshanba");
//     break;
//   case 3:
//     console.log("Chorshanba");
//     break;
//   case 4:
//     console.log("Payshanba");
//     break;
//   case 5:
//     console.log("Juma");
//     break;
//   case 6:
//     console.log("Shanba");
//     break;
//   case 7:
//     console.log("Yakshanba");
//     break;

//   default:
//     console.log("bunday hafta kuni mavjud emas!");
//     break;
// }

// =======================
// 2-masala:
// Foydalanuvchi kiritgan oy raqamiga (1-12) mos ravishda faslni (qish, bahor, yoz, kuz) aniqlang.
// let month = +prompt("oy raqamini kiriting:");

// switch (month) {
//   case 1:
//   case 2:
//   case 12:
//     console.log("Qish");
//     break;

//   case 3:
//   case 4:
//   case 5:
//     console.log("Bahor");
//     break;

//   case 6:
//   case 7:
//   case 8:
//     console.log("Yoz");
//     break;

//   case 9:
//   case 10:
//   case 11:
//     console.log("Kuz");
//     break;

//   default:
//     console.log("bunday oy mavjud emas");
//     break;
// }

// =======================
// 3-masala:
// Foydalanuvchi kiritgan baho (1-5) bo‘yicha izoh chiqarib bering. Masalan: 5 – “A’lo”, 4 – “Yaxshi”, va hokazo.

// let num = +prompt("son kiriting:");

// switch (num % 2) {
//   case 0:
//     console.log("Juft son");
//     break;

//   case 1:
//   case -1:
//     console.log("Toq son");
//     break;

//   default:
//     console.log("Xato!");
//     break;
// }

// =======================
// 4-masala:
// Foydalanuvchi kiritgan baho (1-5) bo‘yicha izoh chiqarib bering. Masalan: 5 – “A’lo”, 4 – “Yaxshi”, va hokazo.
// let grade = +prompt("bahoni kiriting:");

// switch (grade) {
//   case 1:
//   case 2:
//   case 3:
//     console.log("Yomon");
//     break;

//   case 4:
//     console.log("Yaxshi");
//     break;

//   case 5:
//     console.log("A'lo");
//     break;

//   default:
//     console.log("1-5 oraliqda kiriting!");
//     break;
// }

// Math methods ga oid masalalar (4 ta):

// =======================
// 1-masala:
// 0 dan 100 gacha tasodifiy son hosil qiling (Math.random) va uni ekranga chiqarib bering.

// console.log(Math.trunc(Math.random() * 100));

// =======================
// 2-masala:
// Foydalanuvchidan haqiqiy son kiritishni so‘rang va uning faqat butun qismini chiqarib bering (Math.trunc).
// let num = +prompt("haqiqiy son kiriting:");

// console.log(Math.trunc(num));

// =======================
// 3-masala:
// Foydalanuvchidan haqiqiy son kiritishni so‘rang va uni yuqoriga qarab yaxlitlang (Math.ceil).

// let num = +prompt("haqiqiy son kiriting:");

// console.log(Math.ceil(num));

// =======================
// 4-masala:
// Foydalanuvchidan son kiritishni so‘rang va uning modulini toping (Math.abs).

// let num = +prompt("son kiriting:");

// console.log(Math.abs(num));

// Ternary operator ga oid masalalar (5 ta):

// =======================
// 1-masala:

// Foydalanuvchi kiritgan son musbat yoki manfiy ekanligini aniqlang.

// let num = +prompt("son kiriting:");

// num > 0 ? console.log("musbat") : console.log("manfiy");

// =======================
// 2-masala:
// Foydalanuvchi kiritgan son juft yoki toq ekanligini aniqlang.

// let num = +prompt("son kiriting:");

// num % 2 == 0 ? console.log("juft") : console.log("toq");

// =======================
// 3-masala:
// Foydalanuvchi kiritgan son 100 dan katta yoki kichik ekanligini aniqlang.

// let num = +prompt("son kiriting");

// num > 100 ? console.log("katta") : console.log("kichik");

// =======================
// 4-masala:
// Foydalanuvchidan ikkita son so‘rang va ularning kattasini aniqlang.

// let num1 = +prompt("1-son ni kiriting:");
// let num2 = +prompt("2-son ni kiriting:");

// num1 > num2 ? console.log("1-son katta") : console.log("2-son katta");

// =======================
// 5-masala:
// Foydalanuvchi kiritgan son 3 ga va 5 ga bo‘linadigan yoki bo‘linmaydiganligini tekshiring.
// let num = +prompt("son kriting:");

// num % 3 == 0 && num % 5 == 0
//   ? console.log("son 3ga 5ga bo'linadi")
//   : console.log("son 3ga 5ga bo'linmaydi");

// While va do...while ga oid masalalar (15 ta):

// =======================
// 1-masala:
// 1 dan 10 gacha bo‘lgan sonlarni ekranga chiqaring.

// let i = 1;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// =======================
// 2-masala:
// 10 dan 1 gacha bo‘lgan sonlarni ekranga chiqarib bering.

// let i = 10;

// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// =======================
// 3-masala:
// Foydalanuvchi 0 kiritmaguncha tsiklni davom ettiring va kiritilgan sonlarning yig‘indisini hisoblang.

// let num = +prompt("son kiriting:");
// let sum = 0;

// while (num >= 1) {
//   sum += num;
//   num = +prompt();
// }

// console.log(sum);

// =======================
// 4-masala:
// Foydalanuvchi musbat son kiritmaguncha tsiklni davom ettiring va oxirgi kiritilgan sonni chiqarib bering.

// let num = +prompt("son kiriting:");

// while (num < 0) {
//   num = +prompt();
// }
// console.log(num);

// =======================
// 5-masala:
// Foydalanuvchidan raqam kiritishni so‘rang va raqamning raqamlar yig‘indisini hisoblang.

// let num = +prompt("son kiriting:");
// let sum = 0;

// while (num > 0) {
//   sum += num % 10;
//   num = Math.floor(num / 10);
// }
// console.log(sum);

// =======================
// 6-masala:
// Foydalanuvchi manfiy son kiritguncha tsiklni davom ettiring va kiritilgan juft sonlar sonini hisoblang.

// let num = +prompt("son kiriting:");
// let count = 0;

// while (num > 0) {
//   if (num % 2 == 0) {
//     count++;
//   }
//   num = +prompt();
// }
// console.log(count);

// =======================
// 7-masala:
// 1 dan 20 gacha bo‘lgan sonlarni ekranga chiqaring, lekin faqat toq sonlarni.

// let i = 1;

// while (i <= 20) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
//   i++;
// }

// =======================
// 8-masala:
// 1 dan 50 gacha bo‘lgan sonlardan 5 ga karrali sonlarni chiqaring.

// let i = 1;

// while (i <= 50) {
//   if (i % 5 == 0) {
//     console.log(i);
//   }
//   i++;
// }

// =======================
// 9-masala:
// Foydalanuvchidan butun son kiritishni so‘rang va bu sonni teskari ko‘rinishda chiqarib bering.

// let num = +prompt("son kiriting:");
// let reverse = 0;

// while (num != 0) {
//   let = lastNum = num % 10;
//   reverse = reverse * 10 + lastNum;
//   num = Math.trunc(num / 10);
// }

// console.log(reverse);

// =======================
// 10-masala:
// 100 dan 1 gacha bo‘lgan sonlarni, faqat 10 ga bo‘linadiganlarini chiqaring.

// let i = 100;

// while (i >= 1) {
//   if (i % 10 == 0) {
//     console.log(i);
//   }
//   i--;
// }

// =======================
// 11-masala
// 1 dan 100 gacha bo‘lgan barcha sonlarning kvadratini chiqarib bering.

// let i = 1;

// while (i <= 100) {
//   console.log(i ** 2);
//   i++;
// }

// =======================
// 12-masala
// Foydalanuvchidan raqam kiritishni so‘rang. Agar kiritilgan son 5 ga bo‘linmasa, yana son kiritishni so‘rang.

// let num = +prompt("son kiriting:");

// while (num % 5 != 0) {
//   num = +prompt("yana son kiriting:");
// }
// console.log(i);

// =======================
// 13-masala
// Foydalanuvchi 10 dan katta son kiritmaguncha davom eting. Oxirida kiritilgan sonni chiqaring.

// let num = +prompt("son kiriting:");

// while (num > 10) {
//   num = +prompt();
// }
// console.log(num);

// =======================
// 14-masala
// Foydalanuvchi “stop” so‘zini yozmaguncha davom eting. Oxirida nechta son kiritganini hisoblang.

// let num = prompt("stop so'zini yozing:");
// let count = 0;

// while (num !== "stop") {

//   num = prompt();
//   count++;
// }
// console.log(count);

// =======================
// 15-masala
// Foydalanuvchi kiritgan sonlarning o‘rtacha qiymatini hisoblang (nol kiritilganda tsikl to‘xtaydi).

// let num = +prompt("son kiriting:");
// let sum = 0;
// let count = 0;

// while (num !== 0) {
//   sum += num;
//   count++;
//   num = +prompt();
// }

// let average = sum / count;
// console.log(average);

// For ga oid masalalar (15 ta):

// =======================
// 1-masala:
// 1 dan 50 gacha bo‘lgan sonlarni ekranga chiqaring.

// for (let i = 1; i <= 50; i++) {
//   console.log(i);
// }

// =======================
// 2-masala:
// 10 dan 1 gacha bo‘lgan sonlarni ekranga chiqaring.

// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// =======================
// 3-masala:
// 1 dan 100 gacha bo‘lgan faqat toq sonlarni chiqarib bering.

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
// }

// =======================
// 4-masala:
// 1 dan 50 gacha bo‘lgan faqat juft sonlarni chiqarib bering.

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// =======================
// 5-masala:
// 1 dan 100 gacha bo‘lgan barcha sonlarning yig‘indisini hisoblang.
// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// =======================
// 6-masala:
// Foydalanuvchidan son kiritishni so‘rang va 1 dan shu songacha bo‘lgan barcha sonlarning ko‘paytmasini hisoblang.
// let num = +prompt("son kiriting:");
// let multiply = 1;

// for (let i = 1; i <= num; i++) {
//   multiply *= i;
// }
// console.log(multiply);

// =======================
// 7-masala:
// 1 dan 20 gacha bo‘lgan sonlarning kvadratini chiqarib bering.

// for (let i = 1; i <= 20; i++) {
//   console.log(i ** 2);
// }

// =======================
// 8-masala:
// Foydalanuvchi kiritgan sonning faktorialini hisoblang.

// let num = +prompt("son kiriting:");
// let factorial = 1;

// for (let i = 1; i <= num; i++) {
//   factorial *= i;
// }
// console.log(factorial);

// =======================
// 9-masala:
// 1 dan 100 gacha bo‘lgan barcha 5 ga karrali sonlarni chiqarib bering.

// for (let i = 1; i <= 100; i++) {
//   if (i % 5 == 0) {
//     console.log(i);
//   }
// }

// =======================
// 10-masala:
// Foydalanuvchidan musbat son kiritishni so‘rang va 1 dan shu songacha bo‘lgan sonlarning kubini chiqarib bering.

// let num = +prompt("son kiriting:");

// if (num > 0) {
// }

// for (let i = 1; i <= num; i++) {
//   console.log(i ** 3);
// }

// =======================
// 11-masala:
// 1 dan 100 gacha bo‘lgan barcha juft sonlarning yig‘indisini hisoblang.

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// =======================
// 12-masala:
// 1 dan 50 gacha bo‘lgan sonlar orasida 3 ga bo‘linadigan birinchi 10 ta sonni ekranga chiqaring.

// let count = 0;

// for (let i = 1; i <= 50; i++) {
//   if (i % 3 == 0) {
//     console.log(i);
//     count++;
//   }
//   if (count == 10) {
//     break;
//   }
// }

// =======================
// 13-masala:
// Foydalanuvchidan musbat butun son kiritishni so‘rang va shu songacha bo‘lgan sonlar yig‘indisini toping.

// let num = +prompt("son kiriting:");
// let sum = 0;

// if (num > 0) {
// }

// for (let i = 1; i <= num; i++) {
//   sum += i;
// }
// console.log(sum);

// =======================
// 14-masala:
// 1 dan 10 gacha bolgan barcha sonlarning kvadratlar yigindisini toping.

// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   sum += i ** 2;
// }
// console.log(sum);

// =======================
// 15-masala:
// Foydalanuvchi kiritgan musbat butun sonning barcha bo‘luvchilarini chiqarib bering.

// let num = +prompt("son kiriting:");

// if (num > 0) {
// }

// for (let i = 1; i <= num; i++) {
//   if (num % i == 0) {
//     console.log(i);
//   }
// }

// Barcha mavzularni qamrab oluvchi masalalar (10 ta):

// =======================
// 1-masala:
// Foydalanuvchidan son kiritishni so‘rang va bu son 3 ga bo‘linadiganmi yoki yo‘qligini ternary operator yordamida aniqlang. Keyin 1 dan shu songacha bo‘lgan barcha sonlarni chiqarib bering.

// let num = +prompt("son kiriting:");

// num % 3 == 0 ? console.log("3ga bo'linadi") : console.log("3ga bo'linmaydi");

// for (let i = 1; i <= num; i++) {
//   console.log(i);
// }

// =======================
// 2-masala:
// Foydalanuvchi kiritgan oy raqamiga mos faslni (switch-case) aniqlang va 1 dan shu oy raqamigacha bo‘lgan sonlarni (for) ekranga chiqaring.

// let month = +prompt("oy raqamini kiriting:");

// switch (month) {
//   case 1:
//   case 2:
//   case 12:
//     console.log("Qish");
//     break;

//   case 3:
//   case 4:
//   case 5:
//     console.log("Bahor");
//     break;

//   case 6:
//   case 7:
//   case 8:
//     console.log("Yoz");
//     break;

//   case 9:
//   case 10:
//   case 11:
//     console.log("Kuz");
//     break;

//   default:
//     console.log("bunday oy mavjud emas");
//     break;
// }

// for (let i = 1; i <= month; i++) {
//   console.log(i);
// }

// =======================
// 3-masala:
// Tasodifiy son hosil qiling va bu son juft yoki toq ekanligini aniqlang. Agar son juft bo‘lsa, 1 dan 20 gacha bo‘lgan juft sonlarni chiqarib bering (for).

// let num = Math.floor(Math.random() * 50);

// if (num % 2 == 0) {
// }
// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }

// =======================
// 4-masala:
// Foydalanuvchidan musbat son kiritishni so‘rang va uning faktorialini hisoblang (while). Keyin sonning modul qiymatini toping (Math.abs).

// let num = +prompt("son kiriting:");

// let factorial = 1;
// let i = num;
// while (i > 1) {
//   factorial *= i;
//     i--;
// }

// console.log(factorial);
// console.log(Math.abs(num));

// =======================
// 5-masala:
// Foydalanuvchidan hafta kuni raqamini kiritishni so‘rang (switch-case) va unga mos kun nomini chiqaring. Agar kun raqami juft bo‘lsa, qo‘shimcha ravishda 1 dan 10 gacha bo‘lgan sonlarni chiqarib bering (for).

// let week = +prompt("hafta kuni raqamini kiriting:");

// switch (week) {
//   case 1:
//     console.log("Dushanba");
//     break;
//   case 2:
//     console.log("Seshanba");
//     break;
//   case 3:
//     console.log("Chorshanba");
//     break;
//   case 4:
//     console.log("Payshanba");
//     break;
//   case 5:
//     console.log("Juma");
//     break;
//   case 6:
//     console.log("Shanba");
//     break;
//   case 7:
//     console.log("Yakshanba");
//     break;

//   default:
//     console.log("bunday hafta kuni mavjud emas!");
//     break;
// }

// if (week % 2 == 0) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }

// =======================
// 6-masala:
// Tasodifiy son hosil qilib, uni butun qismiga keltiring (Math.trunc) va bu songacha bo‘lgan barcha sonlarning yig‘indisini hisoblang (while).

// let num = Math.trunc(Math.random() * 10);
// console.log(num);

// let i = 1;
// let sum = 0;
// while (i <= num) {
//   sum += i;
//   i++;
// }
// console.log(sum);

// =======================
// 7-masala:
// Foydalanuvchi manfiy son kiritmaguncha sonlarni kiritishni davom ettiring (do...while). Yakunida barcha kiritilgan sonlarning o‘rtacha qiymatini hisoblang.

// let num = +prompt("son kiriting:");
// let sum = 0;
// let count = 0;

// do {
//     sum += num;
//     count++;
//     num = +prompt();
// } while (num > 0) 

// let average = sum / count;
// console.log(average);
