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

/*-------------------------------------------
スライドメニュー
-------------------------------------------*/
/*
1. 開閉ボタン、#side-headerを取得
2. メニューアニメーションのオプションを設定します。
3. 3本線と×を表示によって切り替え維持させる「classList.toggle」
4. メニューを開くためのイベントリスナーを追加し、メニューパネルを左から右にスライドさせて開く
*/


const hamburger  = document.querySelector('.hamburger');   //ハンバーガーアイコン
const sideHeader = document.getElementById('side-header'); //スライドメニュー
const blackMask  = document.querySelector('.black-mask');  //黒背景
const body       = document.querySelector('body');         //body要素取得
const headerOptions = { //アニメーション時間
    duration: 500,
    easing: 'ease',
    fill: 'forwards',
};
const headerOptionsClose = {
    duration: 500,
    fill: 'forwards',
}



hamburger.addEventListener('click', () => {
    if (!body.classList.contains('open')) {
        body.classList.add('open');
        hamburger.classList.add('open');

        const keyframes = {
            translate: ['-100vw', 0],
            opacity: [0, 1],
        };
        sideHeader.animate(keyframes, headerOptions);
    } else {
        hamburger.classList.remove('open');
        body.classList.remove('open');

        const keyframes = {
            translate: [0, '-100vw'],
            opacity: [1, 0],
        };
        sideHeader.animate(keyframes, headerOptionsClose);
    }
});

blackMask.addEventListener('click', () => {
    hamburger.classList.remove('open');
    body.classList.remove('open');

    const keyframes = {
        translate: [0, '-100vw'],
        opacity: [1, 0],
    };
    sideHeader.animate(keyframes, headerOptionsClose);
});