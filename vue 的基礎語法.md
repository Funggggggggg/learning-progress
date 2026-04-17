---
title: Vue 基本語法
date: 2026-04
tags:
- Vue
- 基礎語法
description: Vue 基本語法與概念補充。
---

# Vue 基本語法

## Vue 基本語法概述

### `ref(data)` 響應變數

Vue 專屬語法，用來創建一個響應式的變數，當變數改變時，Vue 會自動更新相關的 DOM。

---

### `{{ }}` 顯示文字

Vue 專屬語法，自動渲染變數為文字顯示。

---

### `v-bind:value` 單向讀取

Vue 專屬語法，將變數綁定到 HTML 元素的屬性上。

---

### `v-model` 雙向綁定

Vue 專屬語法，雙向綁定即時更新，與 ref 配合使用。

---

### `v-on` 事件監聽

事件監聽，後面接要監聽的事件，通常為綁定的方法或 JavaScript 表達式。

---

## Vue 3 核心語法速查表

| 語法 | 方向 | 用途說明 | 範例 |
|------|------|----------|------|
| `ref()` | JS 內部 | 宣告響應式資料；存取用 `.value`，修改後畫面自動更新 | `const count = ref(0)` |
| `{{ }}` | JS → HTML 單向讀取 | 自動渲染變數為文字顯示。 | `{{ userName }}` |
| `v-text` | JS → HTML 單向讀取 | 同 `{{ }}`，用屬性式方式寫；會覆蓋元素內所有內容 | `v-text="userName"` |
| `v-bind` | JS → HTML 單向讀取 | 將變數綁定到 HTML 元素的屬性上，縮寫為 `:`，如 `:href` | `:src="imgUrl"` |
| `v-for` | JS → HTML 單向讀取 | 迴圈渲染列表；需指定 `:key` 使用 | `v-for="item in list"` |
| `v-if` | JS → HTML 單向讀取 | 條件渲染，為 false 時 DOM 不存在；與 `v-show` 的差別：`v-if` 直接移除元素 | `v-if="isLogin"` |
| `v-model` | JS ↔ HTML 雙向綁定 | 雙向綁定，資料與輸入框互相同步；常用於 input、select、textarea | `v-model="keyword"` |
| `v-on` | HTML → JS 單向觸發 | 監聽事件，觸發對應函式；縮寫為 `@`，如 `@click` | `@click="handleBtn"` |

## 補充觀念

- **Vite：**
  - 就是設計好一塊塊積木（元件）
  - SEO 無法操作，因為只有一份 html 檔案
  - 需要 + nuxt 才能顧及（80% 使用原因都是為 SEO）
  - 養成小步測試習慣，才能逐漸累積程式信心 (切忌寫完80%才測試)

- **寫時需自問：** 這是誰的語法？`js 原生` / `vite` / `vue`？
