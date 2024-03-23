/*-------------------------------------------
トップへ戻るボタン
-------------------------------------------*/
/* スクロール位置が700pxを超えた時点で右下に表示 */

const scrollFunction = () => {
    // スクロール量を取得
    const scroll = window.scrollY;
    const homeBtn = document.getElementById('return-btn');

    // スクロール位置が700pxを超えたら
    if (scroll > 700) {
        // トップへ戻るボタンを表示する
        homeBtn.style.visibility = 'visible';
        homeBtn.style.opacity = '1';
    } else {
        homeBtn.style.visibility = 'hidden';
        homeBtn.style.opacity = '0';
    }
};

window.addEventListener('scroll', () => {
    scrollFunction();
});
