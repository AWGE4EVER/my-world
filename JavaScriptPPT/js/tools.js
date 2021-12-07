function $dom(name){
    return document.querySelector(name)
}
function $doms(name) {
    return [...document.querySelectorAll(name)]
}
function isList(dom, name) {
    if(dom.classList.contains(name)){
        return true
    }
    return false
}
function round(dom) {
    let par = dom.parentElement
    if(isList(par,'round')){
        return par
    }
    if(!par){
        return null
    }
    return round(par)
}
function attr(dom,k, v) {
    if(v){
        dom.setAttribute(k,v)
    }else{
        return dom.getAttribute(k)
    }
}
function showFan(state) {
    let fan = $doms('.fan')
    for(let i = 0;i<fan.length;i++){
        fan[i].style.visibility = state
    }
}
function render(round,type) {
    editorContent.innerHTML = ''
    ckeditor.setData(round.title)
    if(type === 'button'){
        showCK('none')
        ckeditor.setReadOnly(true)
        editorContent.insertAdjacentHTML("beforeend", '<div class="mini" id="mini"><svg class="minisvg" id="minisvg"></svg></div>')
        for(let r in all_rounds){
            all_rounds[r].createMini(round)
        }
        for(let l in all_lines){
            all_lines[l].createMini()
        }
        editorContent.insertAdjacentHTML("beforeend","<input class='myself locked' type='button' value='you are here'>")
        editorContent.insertAdjacentHTML("beforeend","<p class='upicon'>↑</p><p class='downicon'>↓</p><p class='righticon'>→</p><p class='lefticon'>←</p>")
    }else{
        showCK('block')
        ckeditor.setReadOnly(false)
    }
    for (let c in round.content){
        let content = round.content[c]
        editorContent.insertAdjacentHTML("beforeend", `<input class="${content.fx} goFleX goFleX${content.fxn}" round="${content.round}" fxround="${content.fxround}" fx="${content.fx}" fxn="${content.fxn}" type="${type}" value="${content.title}">`)
    }
}
function showCK(state) {
    cke_1_top.style.display = state
    cke_1_bottom.style.display = state
}
