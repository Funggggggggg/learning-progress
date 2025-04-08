---
title: 第一週：JavaScript 基礎語法與邏輯
tags: [javascript, 筆記, 語法]

---

# 第一週：JavaScript 基礎語法與邏輯

## 變數宣告（var / let / const）

## 資料型別（string, number, boolean, null, undefined, object）

## 運算子（+ - * / % ++ -- += 等）

## 邏輯判斷式

### 條件判斷（if/else）

- `if` 代表**如果**，後面接判斷式，如果成立，就會裡面的執行程式碼。
- `else` 代表**否則**，當 if 不成立時，就會裡面的執行程式碼，非必要也可省略。


```js
        if (外面下雨) 在家裡待著電影
        else {
          出門
          去爬山
        }
```
---

### 比較運算子
用來比較兩個值的大小，運算的結果會是布林值 **`true`** 或 **`fals`**。

| 符號      | 說明                               |
|-----------|------------------------------------|
| a == b    | a 等於 b                          |
| a === b   | a 等於 b （資料型態也要相同）    |
| a != b    | a 不等於 b                        |
| a <> b    | a 不等於 b                        |
| a !== b   | a 不等於 b （資料型態也不相等）  |
| a > b     | a 大於 b （數值判斷）            |
| a < b     | a 小於 b （數值判斷）            |
| a >= b    | a 大於 b 或是 a 等於 b           |
| a <= b    | a 小於等於 b 或是 a 等於 b       |

資料型態的比較：
```js
        const a = 50, b = '50'

        if (a == b) {
            console.log('a == b')
        } else {
            console.log('a != b')
        }                                // a == b 

        if (a === b) {
            console.log('a === b')
        } else {
            console.log('a !== b')
        }                                // a !== b 
```
若判斷的是布林值`true` 或 `fals`，可以直接用 `if(變數)` 來判斷。
```js
        const ok = true
                        
        // if (ok === ture)
        if (ok) {                        // 簡寫 ---> 省略大括號
            console.log('ok')
        }
        //if (ok === false)
        if (!ok) {
            console.log('not ok')
        }
```
---
### 邏輯運算子
用來組合多個比較運算子的結果，運算的結果會是布林值 `true` 或 `false`。

| 符號    | 說明                           | 舉例                                      |
|---------|--------------------------------|-------------------------------------------|
| a `&&` b  | a 與 b，必須符合兩者          | 如果颱風天沒颳風也沒下雨，我就去看電影  |
| a `\|\|` b  | a 或 b，符合其中一個          | A: 晚餐吃什麼？ B: 便當或麵都可以      |
| `!`a      | 否定、相反                    | A: 你假日想做什麼事？ B: 除了練習程式外，其他都可以 |

- a `&&` b 
```js
        const rain = false, wind = false
        if (!rain && !wind) console.log('出門')
        else console.log('在家')                    //出門
```
- a `||` b

```js
        const dinner = '披薩'
        if (dinner === '炸雞' || dinner === '披薩') {
            console.log('好耶')
        } else {
            console.log('不好耶')
        }                                           //好耶
```
- `!`a

```js
        const holiday = 'code'
        if (holiday !== 'code') console.log('爽啦')
        else console.log('QAQ')                     //QAQ
```
---
### 三元運算子
如果是 2 選 1 的判斷式，可以用三元運算子，**節省程式碼文字**。
> 條件 ❓ 成立時執行的程式  **:**  否定時執行的程式

```js
const like = confirm('你喜歡 JOJO 嗎')

// 使用三元運算子前
if (message) {
  console.log('喜歡')
} else {
  console.log('不喜歡')
}

// 使用三元運算子後，將結果放在變數
const message = like ? '喜歡' : '不喜歡'
console.log(message)

// 三元運算子直接印出結果
console.log(like ? '喜歡' : '不喜歡')     
```
---
### 多條件式
當條件有多筆需要判斷時，可以用 ( ) 組合判斷式。

```js
const coding = confirm('你會寫 code 嗎')
const hair = confirm('你是長髮嗎')
const shower = confirm('你每天洗澡嗎')
if ((hair || shower) && coding) {
  console.log('酷欸')
} else {
  console.log('不酷欸')
}
```

---
### 判斷式條件的延伸（else if）
前面判斷式 2 選 1 是 `if...else`， <br>
遇到 3 (或多)選 1 時，就需要用到`else if`

```js
const spend = parseInt(prompt('請輸入購買數量：'))

if (spend >= 50) {
  document.write('【金卡 VIP 尊爵不凡女王殿下】')
} else if (spend >= 40) {
  document.write('【宮殿級白金公主】')
} else if (spend >= 30) {
  document.write('【鑽石級名媛】')
} else if (spend >= 20) {
  document.write('【白銀級小仙女】')
} else if (spend >= 10) {
  document.write('【忠實顧客】')
} else if (spend > 0) {
  document.write('【輕鬆小買】')
} else {
  document.write('【還沒下單】')
}
```
編寫時注意判斷順序，判斷邏輯像篩網，從大到小 ( 50 => 0 )<br>
若順序顛倒就會永遠只有第一個答案。( spend < 0【還沒下單】)

---
### switch case

switch 是另一種判斷式，可以用來判斷多個條件。<br>
執行時會將 `( ) 內`的變數值，和 `case 後面的值`做比較。<br>

- 從符合的 `case` 開始往下執行，直到遇到 `break` 為止，順序會影響執行。<br>
- 如果沒有符合的 `case`，就會執行 `default` 的程式碼。<br>

```js
const spend = parseInt(prompt('請輸入購買數量：'))

// ❗不能寫 switch (spend) 
// 當寫 switch (spend) 時
// spend === (spend >= 50)
// 50 === (50 >= 50)
// 50 === true
// false

switch (true) {
    case (spend >= 50):
        document.write('【金卡 VIP 尊爵不凡女王殿下】')
        break
    case (spend >= 40):
        document.write('【宮殿級白金公主】')
        break
    case (spend >= 30):
        document.write('【鑽石級名媛】')
        break
    case (spend >= 20):
        document.write('【白銀級小仙女】')
        break
    case (spend >= 10):
        document.write('【忠實顧客】')
        break
    case (spend > 0):
        document.write('【輕鬆小買】')
        break
    default:
    document.write('【還沒下單】')
}
```

---
### 短路求值 ⭐⭐⭐⭐⭐
將邏輯運算子用來賦值。<br>

#### 定義：
短路求值（short-circuit evaluation） 是指：
在一個布林邏輯運算（例如 `&&` 或 `||`）中，一旦結果已經可以確定(左邊判斷)，JavaScript 就會「提前停止運算」而不再評估後面的表達式。

#### 語法：
- `||`  取第一個 Boolean() 判斷為 `true` 的值
- `&&`  取第一個 Boolean() 判斷為 `false` 的值
- `??`  取第一個不是 `null` 也不是 `undefined` 的值

以下為 `Boolean()` 判斷為 `false` 的狀況

>
>- false
>- 0
>- ""
>- null
>- undefined
>- NaN

---
#### 為什麼叫「短路」？
因為它像電路中間被跳過，就**短路**了。

#### 例如：

```js
true || func() // 不會執行 func()，因為結果一定是 true（左邊就成立）
false && func() // 不會執行 func()，因為結果一定是 false（左邊就失敗）
```

PS. **注意運算子的優先順序： `&&` > `||` > `??`。**

---
### 題目判斷
叫 ChatGPT 出題目比較快。

#### 題目 1：`||`（OR）

```js
console.log('' || 0 || null || '仙女' || '大小姐')
```

請問輸出是？<br>
**A.** `''`  
**B.** `null`  
**C.** `'仙女'`  
**D.** `'大小姐'`

---

#### 題目 2：`&&`（AND）

```js
console.log('VIP' && 100 && 0 && '女王')
```

請問輸出是？<br>
**A.** `'VIP'`  
**B.** `100`  
**C.** `0`  
**D.** `'女王'`

---

#### 題目 3：`??`（Null 合併）

```js
console.log(null ?? undefined ?? '' ?? '尊貴客戶')
```

請問輸出是？<br>
**A.** `null`  
**B.** `undefined`  
**C.** `''`  
**D.** `'尊貴客戶'`

---
#### 題目 4：混合題

```javascript
console.log(0 && null || undefined ?? '大小姐' && '仙女')
```

提示選項：<br>
**A.** `0`  
**B.** `'仙女'`  
**C.** `'大小姐'`  
**D.** `undefined`

---
#### 題目 5：函示呼叫題

```js
function greet() {
  console.log("✨ 呼叫 greet()");
  return "仙女";
}

function fallback() {
  console.log("🚨 呼叫 fallback()");
  return "備胎";
}

console.log(null && greet() || false ?? fallback());

```

>提示：在 JavaScript 中，函式會被呼叫只有一個條件：<br>
**當它的結果真的會被使用的時候，它才會被執行**


選項：<br>
A. `呼叫 greet()`、`呼叫 fallback()`、輸出 `"備胎"`  
B. `呼叫 fallback()`、輸出 `"備胎"`  
C. `呼叫 greet()`、輸出 `"仙女"`  
D. 什麼函式都不呼叫，輸出 `false`

---
PS. 解答放最後。這類型還有多種題組跟陷阱，例如手動加括號結合三元運算子等。

---
## 迴圈語法 :cyclone: （for, while, do while）


| for                      | while                    | do while                              |
| ------------------------ | ------------------------ | ------------------------------------- |
| **適合固定次數的迴圈。** | 只有一個執行條件。先判斷條件，再執行程式碼。<br> **適合不確定次數的迴圈。** | 把 while 倒過來寫，<br>先執行程式碼後判斷條件。<br> **適合不確定次數，且至少執行一次的迴圈。** |
| for (let i = 0; i < 10; i++) { ... } |  let input = ''<br>let count = 0<br>while (input !== '123') {<br> input = prompt('123')<br> count++<br>}<br>document.write(`輸入了${count}次`)              | let input = ''<br>let count = 0<br>do {<br>input = prompt('123')<br>count++<br>} while (input !== '123')                                      |


### break / continue 的使用
- `break` 打斷迴圈執行

```js
        for (let i = 1; i <= 9; i++) {
            if (i === 5) {
                break               // 跳出 (停止) 迴圈
            }
            document.write(i + '<br>')
        }
        document.write('<hr>')
```
- `continue` 略過一次執行
```js
        for (let i = 1; i <= 9; i++) {
            if (i === 5) {
                continue // 略過這一次進到下一次
            }
            document.write(i + '<br>')
        }
        document.write('<hr>')
```

---
## 解答與心得

### 短路求值 解答：
1. c 
2. c 
3. c 
4. 混合題.B
5. 函示呼叫題. D
---

#### 混合題解析：
```js
console.log(0 && null || undefined ?? '大小姐' && '仙女')

// 運用運算子優先順序加括號輔助
console.log((0 && null) || undefined ?? ('大小姐' && '仙女'))
```
>1. 0 && null => false && ~~false~~ (取第一個 Boolean 判斷為 false 的值) => 回傳 0
>2. 0 `||` undefined => false `||` false (取第一個 Boolean 判斷為 true 的值) =>  兩個都是 false => 回傳最後一個 undefined
>3. '大小姐' && '仙女' => true && true => 回傳最後一個 '仙女'
>4. undefined ?? '仙女' => false ?? true (取第一個不是 `null` 也不是 `undefined` 的值)=> 取 '仙女'

規則：短路先 `&&`，然後 `||`，最後 `??`，混用一定加括號。<br>

---
#### 函示呼叫題解析：

```js
console.log(null && greet() || false ?? fallback());
```
> 第一段：`null && greet()`
> - `&&` 的規則是：**只要左邊是 falsy，右邊就不執行（短路）**
> - `null` 是 falsy，所以 `greet()` **完全不會執行** => **greet() 不會被呼叫**
> 
> ---
> 第二段：`null && greet() || false`
> - 剛剛這段是 `null` → falsy
> - 所以這段的結果是：`false`
> 
> ---
> 第三段：`false ?? fallback()`
> - `??` 是「**nullish 合併運算子**」，只會在左邊是 `null` 或 `undefined` 時才去用右邊
> - 但這邊左邊是 `false`（不是 null/undefined）=> **fallback() 也不會被呼叫**
> 
> ---
> 
> 最終輸出：
> - 沒有函式會執行
> - 整個表達式結果是 `false`

---
### 心得
寫到後來覺得許多東西沒必要從頭整理，因為之前已經有讀過了，看老師之前的筆記還比較快。之後可能針對性的挑重點寫就好。<br>
當然，再整理一遍可以順便練習題目，用題目的方式更能釐清觀念。

---
整理自泰山職訓局 Kento 桑的教學網站：https://rogeraabbccdd.github.io/F2E-book/intro/before-start.html# 第一週：JavaScript 基礎語法與邏輯

## JavaScript 條件/迴圈 :cyclone: 

## 變數宣告（var / let / const）

## 資料型別（string, number, boolean, null, undefined, object）

## 運算子（+ - * / % ++ -- += 等）

## 比較運算子與邏輯運算子（=== , !==, &&, ||, !）

## 條件判斷（if/else, switch）

## 迴圈語法（for, while, do while）


| for                      | while                    | do while                              |
| ------------------------ | ------------------------ | ------------------------------------- |
| ==適合固定次數的迴圈。== | 只有一個執行條件。先判斷條件，再執行程式碼。<br> ==適合不確定次數的迴圈。== | 把 while 倒過來寫，<br>先執行程式碼後判斷條件。<br> ==適合不確定次數，且至少執行一次的迴圈。== |
| for (let i = 0; i < 10; i++) { ... } |  let input = ''<br>let count = 0<br>while (input !== '123') {<br> input = prompt('123')<br> count++<br>}<br>document.write(`輸入了${count}次`)              | let input = ''<br>let count = 0<br>do {<br>input = prompt('123')<br>count++<br>} while (input !== '123')                                      |


### break / continue 的使用
- `break` 打斷迴圈執行

```js
        for (let i = 1; i <= 9; i++) {
            if (i === 5) {
                break               // 跳出 (停止) 迴圈
            }
            document.write(i + '<br>')
        }
        document.write('<hr>')
```
- `continue` 略過一次執行
```js
        for (let i = 1; i <= 9; i++) {
            if (i === 5) {
                continue // 略過這一次進到下一次
            }
            document.write(i + '<br>')
        }
        document.write('<hr>')
```