class Line {
    constructor(start,end,fxn1,fxn2,fx1,fx2){
        this.start = start
        this.end = end
        this.fxn1 = fxn1
        this.fxn2 = fxn2
        this.fx1 = fx1
        this.fx2 = fx2
        this.id = `${start}_${fxn1}_${end}_${fxn2}`
        this.x = [,49,98,49,0]
        this.y = [,0,49,98,49]
        this.x1 = ''
        this.y1 = ''
        this.x2 = ''
        this.y2 = ''
        this.startFan = `${start}_${fxn1}`
        this.endFan = `${end}_${fxn2}`
        this.create()
        all_lines[this.id] = this
    }
    create(){
        $dom(`#${this.startFan}`).classList.add('locked')
        $dom(`#${this.endFan}`).classList.add('locked')
        svg.insertAdjacentHTML("beforeend", `<line class="line ani" id="${this.id}"></line>`)
        this.refresh()
    }
    createMini(){
        minisvg.insertAdjacentHTML("beforeend", `<line class="miniline" x1="${this.x1/4}" y1="${this.y1/4}" x2="${this.x2/4}" y2="${this.y2/4}"></line>`)
    }
    refresh(){
        this.x1 = all_rounds[this.start].x + this.x[this.fxn1]
        this.y1 = all_rounds[this.start].y + this.y[this.fxn1]
        this.x2 = all_rounds[this.end].x + this.x[this.fxn2]
        this.y2 = all_rounds[this.end].y + this.y[this.fxn2]
        attr($dom(`#${this.id}`),'x1',this.x1)
        attr($dom(`#${this.id}`),'y1',this.y1)
        attr($dom(`#${this.id}`),'x2',this.x2)
        attr($dom(`#${this.id}`),'y2',this.y2)
    }
    remove(){
        $dom(`#${this.startFan}`).classList.remove('locked')
        $dom(`#${this.endFan}`).classList.remove('locked')
        delete all_rounds[this.start].content[this.fx1]
        delete all_rounds[this.end].content[this.fx2]
        editround ? render(editround,'text') : ''
        delete all_lines[this.id]
        $dom(`#${this.id}`).remove()
    }
}
