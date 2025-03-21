document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.main-nav');
    const menuLinks = document.querySelectorAll('.main-nav a'); // メニュー内のリンクを取得
    const closeButton = document.querySelector('.close-menu');

    if (menuButton && navMenu) {
        // ハンバーガーメニューの開閉
        menuButton.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            closeButton.classList.toggle('active');

            // メニューが開いたときに背景を固定
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        // 閉じるボタンをクリックしたらメニューを閉じる
        closeButton.addEventListener('click', function() {
            navMenu.classList.remove('active');
            closeButton.classList.remove('active');
            document.body.style.overflow = 'auto'; // メニューを閉じたらスクロールを有効に戻す
        })

        // メニュー内のリンクをクリックしたら閉じる
        menuLinks.forEach(link => {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
                closeButton.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
    } else {
        console.error('ハンバーガーメニューの要素が見つかりませんでした。');
    }
});
