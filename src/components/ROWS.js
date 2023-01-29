function createRows(...cells) {
    const remembered = false;
    let cols = cells.map((kanji) => {
        return { kanji, remembered, note: "" };
    });
    return cols;
}
const ROWS = createRows(
    "一", "右", "雨", "円", "王",
    "音", "下", "火", "花", "貝",
    "学", "気", "九", "休", "玉",
    "金", "空", "月", "犬", "見",
    "五", "口", "校", "左", "三",
    "山", "子", "四", "糸", "字",
    "耳", "七", "車", "手", "十",
    "出", "女", "小", "上", "森"
);

export default ROWS;
