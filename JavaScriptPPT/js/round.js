class Round {
    constructor(id,x,y){
        this.id = `round${id}`
        this.x = x
        this.y = y
        this.num = id
        this.x1 = [,0,180,0,-180]
        this.y1 = [,-180,0,180,0]
        this.fx = [,'up','right','down','left']
        this.title = ''
        this.content = {}
        this.create()
        all_rounds[this.id] = this
    }
    create(){
        uni.insertAdjacentHTML("beforeend", `
        <div class="round ani" id="${this.id}">
            <div class="fans">
                <div class="fan">
                    <p class="fanp" draggable="true" id="${this.id}_1" fxn1="1" fxn2="3">1</p>
                </div>
                <div class="fan">
                    <p class="fanp" draggable="true" id="${this.id}_2" fxn1="2" fxn2="4">2</p>
                </div>
                <div class="fan">
                    <p class="fanp" draggable="true" id="${this.id}_4" fxn1="4" fxn2="2">4</p>
                </div>
                <div class="fan">
                    <p class="fanp" draggable="true" id="${this.id}_3" fxn1="3" fxn2="1">3</p>
                </div>
            </div>
            <button class="btn edit">edit</button>
            <button class="btn del">delete</button>
        </div>`)
        this.refresh(this.x, this.y)
    }
    createMini(round){
        let islocked = ''
        if(round.id == this.id){
            islocked = 'locked'
        }
        mini.insertAdjacentHTML("beforeend", `<div class="miniround ${islocked}" round="${this.id}" style="left:${this.x/4}px;top:${this.y/4}px"></div>`)
    }
    createFx(id,fxn1,fxn2,fxround){
        let x = this.x + this.x1[fxn1]
        let y = this.y + this.y1[fxn1]
        let fx1 = this.fx[fxn1]
        let fx2 = this.fx[fxn2]
        if(!fxround){
            fxround = new Round(id,x,y)
        }
        new Line(this.id,fxround.id,fxn1,fxn2,fx1,fx2)
        this.content[fx1] = {round:this.id,fxround:fxround.id,fx:fx1,fxn:fxn1,title:fx1}
        fxround.content[fx2] = {round:fxround.id,fxround:this.id,fx:fx2,fxn:fxn2,title:fx2}
        editround ? render(editround,'text') : ''
    }
    refresh(x,y){
        this.x = x
        this.y = y
        let mr = $dom('.moveround')
        mr ? mr.classList.remove('moveround') : ''
        $dom(`#${this.id}`).classList.add('moveround')
        $dom(`#${this.id}`).style.left = `${this.x}px`
        $dom(`#${this.id}`).style.top = `${this.y}px`
        for(let l in all_lines){
            if(l.indexOf(`${this.id}_`)>=0){
                all_lines[l].refresh()
            }
        }
    }
    remove(){
        for(let l in all_lines){
            if(l.indexOf(`${this.id}_`)>=0){
                all_lines[l].remove()
            }
        }
        if(editround){
            if(editround.id === this.id){
                closeEditor.click()
            }
        }
        delete all_rounds[this.id]
        $dom(`#${this.id}`).remove()
    }
}
