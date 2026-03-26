document.addEventListener("DOMContentLoaded", ()=>{

    // screensaver
    let screensaver = document.querySelector("[data-js='js-screensaver']")

    screensaver.addEventListener("mousemove", (e) =>{
        let rect = screensaver.getBoundingClientRect();

        let centrX = rect.left + rect.width/2;
        let centrY = rect.right + rect.height/2;

        let mouseX = e.clientX;
        let mouseY = e.clientY;

        let rotateY = (mouseX - centrX) / 20;
        let rotateX = (centrY - mouseY) / 20;

        screensaver.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    })

    // egypt-eye
    let egyptEye = document.querySelector("[data-js='js-egypt-eye']")
    let pupil = document.querySelector("[data-js='js-pupil']")

    document.addEventListener("mousemove", (e)=>{
        let rect = egyptEye.getBoundingClientRect();

        let centrX = rect.left + rect.width / 2;
        let centrY = rect.top + rect.height / 2;

        let dX = e.clientX - centrX;
        let dY = e.clientY - centrY;

        let maxX = rect.width * 0.15;
        let maxY = rect.height * 0.05;

        let x = dX;
        let y = dY;

        let angle = Math.atan2(dY, dX);
        let distance = Math.sqrt(dX*dX + dY*dY);
        let maxDistance = Math.sqrt(maxX*maxX + maxY*maxY);

        if(distance > maxDistance){
            x = Math.cos(angle) * maxDistance * (maxX/maxDistance);
            y = Math.sin(angle) * maxDistance * (maxY/maxDistance);
        }

        pupil.style.left = `${42 + x / rect.width * 100}%`;
        pupil.style.top  = `${24 + y / rect.height * 100}%`;
    })

    // egypt-table
    let table = document.querySelector(".eqypt-table")
    let cells = document.querySelectorAll("[data-js='cell']")
    let chip = document.querySelector(".chip")
    cells.forEach(cell => cell.style.position = "absolute")

    let position = 0

    function moveChip(){
        if(position >= cells.length - 1)
            return;

        position++;

        let rect = cells[position].getBoundingClientRect();
        let board = table.getBoundingClientRect();

        chip.style.left = rect.left - board.left + "px";
        chip.style.top = rect.top - board.top + "px";
        console.log(cells[position])
    }

    table.addEventListener("click", moveChip)

    // chess-figures
    let fig1 = document.querySelector(".first-chess-fig")
    let fig2 = document.querySelector(".second-chess-fig")
    let fig3 = document.querySelector(".third-chess-fig")
    let fig4 = document.querySelector(".fourth-chess-fig")

    let def1 = fig1.style.backgroundImage;
    let def2 = fig2.style.backgroundImage;
    let def3 = fig3.style.backgroundImage;
    let def4 = fig4.style.backgroundImage;

    fig1.addEventListener("mouseenter", ()=>{
        fig1.style.backgroundImage = "url(assets/images/1fig2var.svg)"
        console.log("yes")
    })
    fig1.addEventListener("mouseleave", ()=>{
        fig1.style.backgroundImage = def1
    })

    fig2.addEventListener("mouseenter", ()=>{
        fig2.style.backgroundImage = "url(assets/images/2fig2var.svg)"
        console.log("yes")
    })
    fig2.addEventListener("mouseleave", ()=>{
        fig2.style.backgroundImage = def2
    })

    fig3.addEventListener("mouseenter", ()=>{
        fig3.style.backgroundImage = "url(assets/images/3fig2var.svg)"
        console.log("yes")
    })
    fig3.addEventListener("mouseleave", ()=>{
        fig3.style.backgroundImage = def3
    })

    fig4.addEventListener("mouseenter", ()=>{
        fig4.style.backgroundImage = "url(assets/images/4fig2var.svg)"
        console.log("yes")
    })
    fig4.addEventListener("mouseleave", ()=>{
        fig4.style.backgroundImage = def4
    })

    // evo-chess-queen
    let queen = document.querySelector("[data-js='js-queen']")
    let slider = document.querySelector("[data-js='js-slider']")

    slider.addEventListener("input", ()=>{
        let value = - slider.value;

        queen.style.transform = `translateX(${value}%)`
    })


    // dnd facts
    let cubeFact1 = document.querySelector("[data-js='js-cube-fact1']")
    let cubeFact2 = document.querySelector("[data-js='js-cube-fact2']")
    let cubeFact3 = document.querySelector("[data-js='js-cube-fact3']")
    let cubeFact4 = document.querySelector("[data-js='js-cube-fact4']")

    let dndFact1 = document.querySelector(".dnd-first-fact")
    let dndFact2 = document.querySelector(".dnd-second-fact")
    let dndFact3 = document.querySelector(".dnd-third-fact")
    let dndFact4 = document.querySelector(".dnd-fourth-fact")

    cubeFact1.addEventListener("mouseenter", ()=>{
        console.log("hover")
        cubeFact1.style.opacity = "1"
    })
    cubeFact1.addEventListener("mouseleave", ()=>{
        cubeFact1.style.opacity = "0"
    })
    cubeFact1.addEventListener("click", ()=>{
        dndFact1.style.backgroundImage = "url('assets/images/dnd-fact1.svg')"
        dndFact1.style.backgroundSize = "82%"
    })

    cubeFact2.addEventListener("mouseenter", ()=>{
        console.log("hover")
        cubeFact2.style.opacity = "1"
    })
    cubeFact2.addEventListener("mouseleave", ()=>{
        cubeFact2.style.opacity = "0"
    })
    cubeFact2.addEventListener("click", ()=>{
        dndFact2.style.backgroundImage = "url('assets/images/dnd-fact2.svg')"
        dndFact2.style.backgroundSize = "84%"
    })

    cubeFact3.addEventListener("mouseenter", ()=>{
        console.log("hover")
        cubeFact3.style.opacity = "1"
    })
    cubeFact3.addEventListener("mouseleave", ()=>{
        cubeFact3.style.opacity = "0"
    })
    cubeFact3.addEventListener("click", ()=>{
        dndFact3.style.backgroundImage = "url('assets/images/dnd-fact3.svg')"
        dndFact3.style.backgroundSize = "84%"
    })

    cubeFact4.addEventListener("mouseenter", ()=>{
        console.log("hover")
        cubeFact4.style.opacity = "1"
    })
    cubeFact4.addEventListener("mouseleave", ()=>{
        cubeFact4.style.opacity = "0"
    })
    cubeFact4.addEventListener("click", ()=>{
        dndFact4.style.backgroundImage = "url('assets/images/dnd-fact4.svg')"
        dndFact4.style.backgroundSize = "84%"
    })


    // mafia fact
    let jaws = document.querySelector(".jaws")
    let lowerJaw = document.querySelector("[data-js='js-lower-jaw']")
    let mafia1 = document.querySelector(".first-mafia-card")
    let mafia2 = document.querySelector(".second-mafia-card")
    let mafia3 = document.querySelector(".third-mafia-card")

    mafia1.addEventListener("click", ()=>{
        mafia1.style.backgroundImage = "url('assets/images/doctor.svg')"
        mafia1.style.backgroundSize = "40%"
    })
    mafia2.addEventListener("click", ()=>{
        mafia2.style.backgroundImage = "url('assets/images/sherif.svg')"
    })
    mafia3.addEventListener("click", ()=>{
        mafia3.style.backgroundImage = "url('assets/images/mafia.svg')"
        // mafia3.style.backgroundSize = mafia3.style.backgroundSize + 10%
        // console.log(mafia3.style.backgroundSize)
        lowerJaw.id = "lower-jaw"
    })
    lowerJaw.addEventListener("animationend", ()=>{
        jaws.style.backgroundImage = "url('assets/images/mafia-fact.svg')"
    })


    // monopoly fact
    let monopolyFact = document.querySelector(".fact-monopoly")
    let origMon1 = document.querySelector("[data-monopoly='js-mn1']")
    let origMon2 = document.querySelector("[data-monopoly='js-mn2']")
    let origMon3 = document.querySelector("[data-monopoly='js-mn3']")
    let counter = 0
    let houses = document.querySelector(".monopoly-houses")
    let allHouses = {
        3: 'assets/images/hom2.svg',
        6: 'assets/images/hom3.svg',
        10: 'assets/images/hom4.svg',
        12: 'assets/images/hom5.svg',
        15: 'assets/images/hom6.svg',
        18: 'assets/images/hom7.svg',
        21: 'assets/images/hom8.svg',
        26: 'assets/images/hom9.svg'}

    

    function animMon(orig, anim){
        let cloneMon = orig.cloneNode(true)
        cloneMon.style.left = Math.random() * 100 + "%"
        cloneMon.classList.add(anim)
        monopolyFact.appendChild(cloneMon)
        cloneMon.addEventListener("animationend", ()=>{cloneMon.remove()})
    }

    monopolyFact.addEventListener("click", ()=>{
        console.log("anim")
        animMon(origMon1, 'mon1')
        animMon(origMon2, 'mon2')
        animMon(origMon3, 'mon3')
        counter++
        if(allHouses[counter]){houses.style.backgroundImage = `url(${allHouses[counter]})`}
    })


    

})