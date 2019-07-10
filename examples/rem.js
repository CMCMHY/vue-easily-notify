(function (doc, win) {
    let docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            let clientWidth = docEl.clientWidth;
            let wrap = document.querySelector('#app');
            if (!clientWidth) return;
            if(clientWidth>768){
                docEl.style.fontSize = '16px';
                wrap.style.maxWidth = '100%';
            }else{
                let temp = 100 * (clientWidth / 750);
                docEl.style.fontSize = temp>100? `100px`:`${temp}px`;
                wrap.style.maxWidth = '750px';
            }
        };
    doc.addEventListener('DOMContentLoaded', recalc, false);
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
})(document, window);
