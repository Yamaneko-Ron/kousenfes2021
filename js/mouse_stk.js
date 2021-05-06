
function onStk(id){
    //マウスストーカー用のdivを取得
    const stalker = document.getElementById(id);
    //上記のdivタグをマウスに追従させる処理
    document.addEventListener('mousemove', function (e) {
        stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    });

    var linkElem = document.querySelectorAll('a:not(.no_stick_)');
    for (let i = 0; i < linkElem.length; i++) {
    //マウスホバー時
        linkElem[i].addEventListener('mouseover', function (e) {
            
            hovFlag = true;

        //マウスストーカーにクラスをつける
        stalker.classList.add('hover-link');

        //マウスストーカーの位置をリンクの中心に固定
        let rect = e.target.getBoundingClientRect();
        let posX = rect.left + (rect.width / 2);
        let posY = rect.top + (rect.height / 2);

        stalker.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';

    });
    //マウスホバー解除時
    linkElem[i].addEventListener('mouseout', function (e) {
        hovFlag = false;
        stalker.classList.remove('hover-link');
    });
    }

    linkElem = document.querySelectorAll('label:not(.no_stick_)');
    for (let i = 0; i < linkElem.length; i++) {
        //マウスホバー時
        linkElem[i].addEventListener('mouseover', function (e) {
            hovFlag = true;
            
            //マウスストーカーにクラスをつける
            stalker.classList.add('hover-link');
            
            //マウスストーカーの位置をリンクの中心に固定
            let rect = e.target.getBoundingClientRect();
            let posX = rect.left + (rect.width / 2);
            let posY = rect.top + (rect.height / 2);
            
            stalker.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';
            
        });
        
        linkElem[i].addEventListener('mouseout', function (e) {
            hovFlag = false;
            stalker.classList.remove('hover-link');
        });
    }

    linkElem = document.querySelectorAll('button:not(.no_stick_)');
    for (let i = 0; i < linkElem.length; i++) {
        //マウスホバー時
        linkElem[i].addEventListener('mouseover', function (e) {
            hovFlag = true;
            
            //マウスストーカーにクラスをつける
            stalker.classList.add('hover-link');
            
            //マウスストーカーの位置をリンクの中心に固定
            let rect = e.target.getBoundingClientRect();
            let posX = rect.left + (rect.width / 2);
            let posY = rect.top + (rect.height / 2);
            
            stalker.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';
            
        });
        
        linkElem[i].addEventListener('mouseout', function (e) {
            hovFlag = false;
            stalker.classList.remove('hover-link');
        });
    }
}
