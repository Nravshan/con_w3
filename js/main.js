import data from './data.js'

let cont = document.querySelector('.container')

for (let item of data) {
    let flex = document.createElement('div')
    let flex_a = document.createElement('a')
    //main box
    let main_box = document.createElement('div')
    let main_box_info = document.createElement('div')
    let main_box_img = document.createElement('img')
    let main_box_h2 = document.createElement('h2')
    let main_box_p = document.createElement('p')
    let main_box_colors = document.createElement('div')
    let main_box_colors_color
    item.colors.filter(el => {
        main_box_colors_color = document.createElement('div')
        main_box_colors_color.style.backgroundColor = el
        main_box_colors.append(main_box_colors_color)
    })
    let main_box_a = document.createElement('a')
    //main box

    //boxes with number
    let box1 = document.createElement('div')
    let box1_img = document.createElement('img')
    let box1_h2 = document.createElement('h2')
    let box1_h4 = document.createElement('h4')
    let box1_p = document.createElement('p')
    let box2 = document.createElement('div')
    let box2_img = document.createElement('img')
    let box2_h2 = document.createElement('h2')
    let box2_h4 = document.createElement('h4')
    let box2_p = document.createElement('p')
    let box3 = document.createElement('div')
    let box3_img = document.createElement('img')
    let box3_h2 = document.createElement('h2')
    let box3_h4 = document.createElement('h4')
    let box3_p = document.createElement('p')
    let box4 = document.createElement('div')
    let box4_img = document.createElement('img')
    let box4_h2 = document.createElement('h2')
    let box4_h4 = document.createElement('h4')
    let box4_p = document.createElement('p')
    let box5 = document.createElement('div')
    let box5_img = document.createElement('img')
    let box5_h2 = document.createElement('h2')
    let box5_h4 = document.createElement('h4')
    let box5_p = document.createElement('p')
    let box6 = document.createElement('div')
    let box6_img = document.createElement('img')
    let box6_h2 = document.createElement('h2')
    let box6_h4 = document.createElement('h4')
    let box6_p = document.createElement('p')
    let box7 = document.createElement('div')
    let box7_img = document.createElement('img')
    let box7_h2 = document.createElement('h2')
    let box7_h4 = document.createElement('h4')
    let box7_p = document.createElement('p')
    
    //boxes with number

    //last box
    let last_box = document.createElement('div')
    let last_box_images = document.createElement('div')
    let last_box_images_img1 = document.createElement('img')
    let last_box_images_img2 = document.createElement('img')
    let last_box_images_img3 = document.createElement('img')
    let last_box_h4 = document.createElement('h4')
    //last box

    flex.classList.add('flex')
    flex_a.classList.add('learn_more')
    main_box.classList.add('main_box')
    main_box_info.classList.add('info')
    main_box_colors.classList.add('colors')
    box1.classList.add('box')
    box2.classList.add('box')
    box3.classList.add('box')
    box4.classList.add('box')
    box5.classList.add('box')
    box6.classList.add('box')
    box7.classList.add('box')    
    last_box.classList.add('box')
    last_box.classList.add('box', 'last')
    last_box_images.classList.add('images')
    
    main_box_h2.innerHTML = item.title
    main_box_p.innerHTML = 'From ' + '$' + item.price 
    main_box_a.innerHTML = 'Buy'
    box1_h2.innerHTML = item.specs.display.size + '”'
    box1_h4.innerHTML = item.specs.display.title
    box2_h4.innerHTML = item.specs.chip.title
    box2_p.innerHTML = item.specs.chip.description
    box3_h4.innerHTML = item.specs.ram.title
    box3_p.innerHTML = item.specs.ram.description
    box4_h2.innerHTML = item.specs.memory.size + item.specs.memory.type.toUpperCase()
    box4_h4.innerHTML = 'Maximum configurable storage<sup>2</sup>'
    box5_h4.innerHTML = 'Up to' + item.specs.battery + 'hours battery life<sup>3</sup>'
    box6_h4.innerHTML = item.specs.camera.title
    box6_p.innerHTML = item.specs.camera.description
    box7_h2.innerHTML = item.specs.weight + 'lb.'
    box7_h4.innerHTML = 'Weight'
    last_box_h4.innerHTML = item.specs.other.filter(el => `${el}, `)
    flex_a.innerHTML = 'learn_more >'

    main_box_img.src = `./img/${item.img}`
    main_box_a.href = item.url
    if(item.specs.chip.title.includes('M1')){
        box2_img.src = './img/m1.png'
    } else{
        box2_img.src = './img/intel.png'
    }
    if(data.indexOf(item) === 2){
        box3_img.src = './img/memory2.png'
    } else{
        box3_img.src = './img/memory.png'
    }
    box5_img.src = './img/battery.png'
    box6_img.src = './img/video.png'
    if(data.indexOf(item) === 0){
        last_box_images_img1.src = './img/touch ID.png'
    } else {
        last_box_images_img1.src = './img/touch ID small.png'
        last_box_images_img2.src = './img/brightness.png'
        last_box_images_img3.src = './img/volume.png'
    }
    flex_a.href = '#'

    cont.append(flex)
    flex.append(main_box, box1, box2, box3, box4, box5, box6, box7, last_box, flex_a)
    main_box.append(main_box_img, main_box_info)
    main_box_info.append(main_box_h2, main_box_p, main_box_colors, main_box_a)
    box1.append(box1_img, box1_h2, box1_h4, box1_p)
    box2.append(box2_img, box2_h2, box2_h4, box2_p)
    box3.append(box3_img, box3_h2, box3_h4, box3_p)
    box4.append(box4_img, box4_h2, box4_h4, box4_p)
    box5.append(box5_img, box5_h2, box5_h4, box5_p)
    box6.append(box6_img, box6_h2, box6_h4, box6_p)
    box7.append(box7_img, box7_h2, box7_h4, box7_p)
    last_box.append(last_box_images, last_box_h4)
    if(data.indexOf(item) === 0){
        last_box_images.append(last_box_images_img1)
    } else{
        last_box_images.append(last_box_images_img1, last_box_images_img2, last_box_images_img3)
    }


}
