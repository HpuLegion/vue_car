 
// 区域的隐藏
export function popupWindow(params){
    console.log(params.point);
    console.log(this);//undefined
    document.addEventListener('mouseup', e => {
        // console.log(e);
        const Content = document.querySelector(params.elementObj)
        // console.log(Content);
        if (Content) {
          if (!Content.contains(e.target)) {
            params.point.$router.push({ name: params.routerName })
          }
        }
      })
}
