/** 
 * 早安
 * 這是函數的介紹，當我們在使用 JSDoc 時，可以在這裡寫下函數的用途或功能。
 * 這樣在使用 IDE 或其他工具時，可以看到這個函數的說明。
*/
const GoodMorning = () => { }
GoodMorning()

/**
 * 早安
 * @param time 時間
 * @param item 物品
 * param => parameter (範圍) => 參數
 */
const GoodMorning2 = (time, item) => { }

/**
 * 早安
 * @param time {string} 時間
 * @param item {string} 物品
 */
const GoodMorning3 = (time, item) => { }

/**
 * 早安
 * @param [time=早上] {string} 時間
 * @param [item=冰淇淋] {string} 物品
 */
const GoodMorning4 = (time = '早上', item = '冰淇淋') => { }

/**
 * 早安
 * @param [time=早上] {string} 時間
 * @param [item=冰淇淋] {string} 物品
 * @returns {string} 組合完的訊息
 */
const GoodMorning5 = (time = '早上', item = '冰淇淋') => { }
