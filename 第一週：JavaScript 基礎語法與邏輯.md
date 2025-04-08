# 第一週：JavaScript 基礎語法與邏輯

## JavaScript 條件/迴圈 :cyclone: 

## 變數宣告（var / let / const）

## 資料型別（string, number, boolean, null, undefined, object）

## 運算子（+ - * / % ++ -- += 等）

## 比較運算子與邏輯運算子（=== , !==, &&, ||, !）

## 條件判斷（if/else, switch）

## 迴圈語法（for, while, do while）


| for                      | while                    | do while                              |
| ------------------------ | ------------------------ | ------------------------------------- |
| `適合固定次數的迴圈。` | 只有一個執行條件。先判斷條件，再執行程式碼。<br> `適合不確定次數的迴圈。` | 把 while 倒過來寫，<br>先執行程式碼後判斷條件。<br> `適合不確定次數，且至少執行一次的迴圈。` |
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
