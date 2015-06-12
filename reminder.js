function judge(p) {
     for (var i = 0; i < p.length; i++) {
          if (p[i].querySelector('.nui-ico-compose') != null) {
               return true;
          }
     }
     return false;
}

window.addEventListener('popstate', function(event) {
     setTimeout(function () {
          if (judge(document.querySelectorAll('.nui-tabs-item-selected'))) {
               alert("别忘了添加附件！");
          }
     }, 1000)
});
