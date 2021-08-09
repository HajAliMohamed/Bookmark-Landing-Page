let lis = Array.from(document.querySelectorAll('.tab2 .features .choices ul li '))

let sliders = document.querySelectorAll('.slider div')

lis.forEach((li)=>{
    li.addEventListener('click', ()=>{
        lis.forEach((li)=>{
            li.classList.remove('active')
        })

        sliders.forEach((slider)=>{
            slider.classList.remove('active')
        })

        if(li.classList.contains("slide1")){
            li.classList.add("active")
            document.querySelector('.tab2 .slider .slide1').classList.add('active')   
        }
        if(li.classList.contains("slide2")){
            li.classList.add("active")
            document.querySelector('.tab2 .slider .slide2').classList.add('active')
        }
        if(li.classList.contains("slide3")){
            li.classList.add("active")
            document.querySelector('.tab2 .slider .slide3').classList.add('active')
        }
    })
})


let divs = Array.from(document.querySelectorAll('.details div'))
let details = document.querySelector('.details')


 details.addEventListener('click',(e)=>{
        if(e.target.classList.contains('div1')){
            document.querySelector('.details .div1 p').classList.add('active')
        }else{
            document.querySelector('.details .div1 p').classList.remove('active')
        }

        if(e.target.classList.contains('div2')){
            document.querySelector('.details .div2 p').classList.add('active')
        }else{
            document.querySelector('.details .div2 p').classList.remove('active')
        }

        if(e.target.classList.contains('div3')){
            document.querySelector('.details .div3 p').classList.add('active')
        }else{
            document.querySelector('.details .div3 p').classList.remove('active')
        }

        if(e.target.classList.contains('div4')){
            document.querySelector('.details .div4 p').classList.add('active')
        }else{
            document.querySelector('.details .div4 p').classList.remove('active')
        }
    })


let humbu = document.querySelector('.humbu')
let bar = document.querySelector('.bar')
bar.style.maxWidth = '0px'
humbu.addEventListener('click',()=>{
    if(bar.style.maxWidth==="0px"){
        bar.style.maxWidth="100%"
    }else{
        bar.style.maxWidth="0px"
    }
})