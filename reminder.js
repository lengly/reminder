function judge(p) {
     for (var i = 0; i < p.length; i++) {
          if (p[i].title == "写信" || p[i].title.search(':') != -1) {
               return true;
          }
     }
     return false;
}

window.addEventListener('popstate', function(event) {
     
     setTimeout(function () {
          if (judge(document.getElementsByClassName('nui-tabs-item-selected'))) {
               alert("别忘了添加附件！");
          }
     }, 1000)
     
});
