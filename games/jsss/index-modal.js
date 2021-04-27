const modal = $$.modal({
    title:'Modal-window',
    content:'lorem ipsum 4',
    image:'./img/134.png'
})


let games = [
    {id:1,text:'follout 4',img:'./img/foll.png'},
    {id:2,text:'witcher 3',img:'./img/witcher.jpg'},
    {id:3,text:'Horizon:Zero down',img:'./img/horzzon.jpg'},
    {id:4,text:'Resident Evil 3 remake',img:'./img/resident-evil-3-remake.jpg'}
]


const toHTML = game=>`<div class="saidbar_block" data-modal data-ids="${game.id}">${game.text}</div>`

//

    function rendering(){
        let html = games.map(toHTML).join('')
        const saidbar = document.querySelector('.left_saidbar')
        saidbar.innerHTML = html
}

rendering()


document.addEventListener('click',(event)=>{
    const block = event.target.dataset.modal
    const id =+event.target.dataset.ids
    const game = games.find(elem=>elem.id === id)
    modal.setContent(`Игра ${game.text}`,`${game.text}`,`<img src="${game.img}">`)
    if(id){
        modal.open()
    }
    
})

