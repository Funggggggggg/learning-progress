# learning-progress

概念性學習 - 學習筆記、思考過程、錯誤紀錄等。
Conceptual learning - study notes, thought process, error records.

---
## 🗓 3 個月 JavaScript 前端基礎複習計畫表

預計兩個月後要開始去找前端工作，但基礎觀念弱到不行，所以請 chatGPT 幫我結合泰山職訓局 Kento 桑的教學筆記，生出一個系統化釐清 JavaScript 基礎觀念、強化實作能力的讀書計畫。

---
| 主題  | 週 | 學習重點 | 可能困難點／觀念釐清   | 實作練習建議  |
| -------------------------- | -------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------- | ---------------------------------------- |
| **JavaScript 基礎語法**    |1 | - `var`, `let`, `const`<br> - 資料型別與運算子                              | - 型別轉換與自動轉型<br>- 作用域 (Scope) 觀念                  | - 計算器<br>- 型別轉換小工具             |
| **條件與迴圈**             | 1| - `if/else`, `switch`<br>- `for`, `while`, `break`, `continue`             | - 巢狀結構與邏輯判斷混淆                                             | - 猜數字遊戲<br>- 密碼驗證<br>邏輯           |
| **陣列與物件**             | 2 | - 陣列方法：`map`, `filter`, `forEach`<br>- 物件基本操作                   | - 陣列與物件的複製（深/淺拷貝）<br>- `this` 理解初步                 | - Todo List 資料結構                     |
| **函式與作用域**           | 3 | - 函式宣告 vs. 表達式<br>- Hoisting 與閉包<br>- `this` 與箭頭函式          | - `this` 指向混淆<br>- 函式與變數提升                                | - 自訂邏輯模組<br>- 時間格式化<br>工具       |
| **資料處理與<br>計時器**    |4 | - 陣列<br>與文字資料轉換處理<br>- `setTimeout`, `setInterval`                  | - 資料轉換技巧<br>- 非同步流程控制                                   | - 文字轉換器<br>- 倒數計時器             |
| **DOM 基礎操作**           | 5 | - `querySelector`, `innerText`<br>- `classList`, `innerHTML` 操作          | - DOM tree 結構理解困難<br>- 選取器與操作同步                    | - 表單驗證<br>- 動態新增<br>項目             |
| **事件處理與<br>表單交互**  |5 | -`addEventListener` <br>- input、submit 事件                               | - 事件冒泡與捕獲<br>- `preventDefault()`  `stopPropagation()` 差異 | - BMI 計算工具<br>- 自訂輸入欄<br>驗證       |
| **jQuery 操作與小遊戲**    | 6| - jQuery DOM 操作與動畫<br>- 鏈式操作                                      | - 原生 DOM vs jQuery 差異<br>- 動畫與邏輯同步問題                    | - 翻牌遊戲<br>- 打殭屍遊戲               |
| **ES6 語法糖與模組化**     | 7 | - 解構、展開運算子<br>- 模板字串、箭頭函式、模組拆分                       | - `this` 在箭頭函式中的行為<br>- 命名衝突與結構劃分                  | - 資料重組小工具<br>- 筆記工具           |
| **AJAX / Fetch / 非同步**  | 8 | - Fetch API、Promise、async/await                                          | - 非同步流程不易掌握                                                 | - 天氣查詢 API<br>- API 資料顯示頁面     |
| **Node.js 入門<br>與模組系統** | 9 | - `require` / `import`<br>- 檔案結構與模組化                          | - Node.js 與瀏覽器端差異<br>- 模組相依處理                           | - 模組整合小程式  |
| **Vue.js 基礎與進階**      | 10 | - Vite、Component、指令（v-bind, v-model）<br>- Vue Router、Pinia 狀態管理 | - 資料流動與響應式<br> - 與傳統 JS 操作差異                       | - 前後端整合表單專案<br>- Vue 記帳工具 |
| **MongoDB 與資料整合**     | 11 12 | - MongoDB 安裝與操作<br>- API 資料讀寫與整合                               | - 資料模型設計與錯誤處理                                             | - 完整小型全端專案（記帳、社群、留言板等） |

---

## ✅ JavaScript 前端學習 Check List

這邊我放 issue 隨時更新讀書進度。
希望 3 個月的時間可以補足前端基礎，挑戰成功。

### 第一週：JavaScript 基礎語法與邏輯
- [ ] 變數宣告（var / let / const）
- [ ] 資料型別（string, number, boolean, null, undefined, object）
- [ ] 運算子（+ - * / % ++ -- += 等）
- [ ] 比較運算子與邏輯運算子（=== , !==, &&, ||, !）
- [ ] 條件判斷（if/else, switch）
- [ ] 迴圈語法（for, while, do...while）
- [ ] break / continue 的使用

### 第二週：陣列與物件操作
- [ ] 陣列基本操作（push, pop, shift, unshift）
- [ ] 陣列方法（map, filter, forEach, find, reduce）
- [ ] 物件宣告與存取
- [ ] 陣列與物件的巢狀結構操作
- [ ] 陣列與物件的深/淺拷貝

### 第三週：函式與作用域
- [ ] 函式宣告與函式表達式
- [ ] 參數與預設值、rest parameter
- [ ] return 語法
- [ ] 作用域（scope）
- [ ] hoisting（提升）
- [ ] 閉包（closure）
- [ ] this 的指向（特別是箭頭函式）

### 第四週：資料處理與計時器
- [ ] 字串處理（split, join, replace, slice）
- [ ] 陣列資料處理應用
- [ ] 數字處理與格式化
- [ ] 計時器：setTimeout / setInterval

### 第五週： DOM 與事件操作
- [ ] DOM 元素選取（querySelector, getElementById）
- [ ] 操作屬性與內容（innerText, innerHTML, value）
- [ ] class 操作（classList.add/remove/toggle）
- [ ] 事件監聽（addEventListener）
- [ ] 表單事件（input, change, submit）
- [ ] 事件冒泡與捕獲
- [ ] 防止預設行為（preventDefault）

### 第六週： jQuery 基礎應用
- [ ] jQuery 選取器與語法
- [ ] 鏈式操作與動畫（fade, slide, animate）
- [ ] jQuery 事件處理
- [ ] 小遊戲應用（翻牌記憶 / 打殭屍）

### 第七週： ES6+ 語法與模組化
- [ ] 解構賦值（Destructuring）
- [ ] 展開運算子（Spread / Rest）
- [ ] 模板字串（Template literals）
- [ ] 箭頭函式（Arrow Function）
- [ ] 模組化（import / export）

### 第八週： 非同步與 HTTP 請求
- [ ] Fetch API 基礎
- [ ] Promise 基本使用
- [ ] async / await 的應用
- [ ] 錯誤處理與 try/catch

### 第九週： Node.js 基礎與應用
- [ ] 認識 Node.js 與後端環境差異
- [ ] 模組化（require / import）
- [ ] 簡易伺服器應用
- [ ] 使用 Node 實作小型 API 或機器人（如 LINE 機器人）

### 第十週： Vue.js 框架開發
- [ ] Vue 基礎語法（v-bind, v-model, v-if, v-for）
- [ ] 組件化與 props 傳值
- [ ] 單一檔案元件（SFC）
- [ ] Vite 專案建立
- [ ] Vue Router（路由切換）
- [ ] Pinia 狀態管理
- [ ] Vue 專案整合後端資料

### 第十一週： MongoDB 與 API 資料整合
- [ ] 安裝與啟用 MongoDB
- [ ] MongoDB 的基本操作（CRUD）
- [ ] 建立資料模型與 API 串接
- [ ] 整合前後端專案（如記帳、留言板）

### 第十二週： 其他工具與應用
- [ ] Git 基礎操作（clone, commit, push, pull）
- [ ] VuePress 建立靜態網站
- [ ] Pug 樣板語法簡介
- [ ] Nuxt.js 專案起手式與目錄結構

> 2025-04-05
