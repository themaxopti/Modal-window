function createModal(options){
    const modal = document.createElement('div')
    modal.classList.add('modal_overlay')
    modal.setAttribute('data-behind',true)
    modal.insertAdjacentHTML('afterbegin',`
    <div class="modal_cont">
        <div class="cancel_cont">
            
            <span data-contentHead>${options.title}</span>
            <div class="x_div" data-behind="true">X</div> 
        </div>
        <div data-contentImg class="data_img"> </div>
     
        <div>
            <div class="modal_cont" data-content>
                ${options.content}
            </div>
            <div class="modal_footer">
                <a href="#" class="close_class">Показать цену</a>
            </div>
        </div>
    </div>
    `)
    const wrap = document.querySelector('.wrapper')
    wrap.appendChild(modal)
    return modal
}

{/* <img src="${options.image}" data-contentImg class="modal_img" alt=""></img> */}

$$.modal = function(options){
    const $modal = createModal(options)
    const modal = {
        open(){
            $modal.classList.add('active_modal')
        },
        close(){
            $modal.classList.remove('active_modal')
            $modal.classList.add('hide')
            setTimeout(()=>{
                $modal.classList.remove('hide')
            },500)
        }   
    }

    function handCl(event){
        if(event.target.dataset.behind){
            modal.close()
        }
        // if(event.target.dataset.close){
        //     modal.close()
        // }
    }
    
    
    $modal.addEventListener('click',handCl)

    return Object.assign(modal,{
        destroy(){
            
        },       
        setContent(html,html2,html3){
            $modal.querySelector('[data-content]').innerHTML = html
            $modal.querySelector('[data-contentHead]').innerHTML = html2
            $modal.querySelector('[data-contentImg]').innerHTML = html3
        }
    })
}