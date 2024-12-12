/* Using Locomotive Js for smooth Scroling */
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



/* Making of FPs Image Appearence - On Hovering */
let fpsImg = document.querySelector("#fps-img")
let fps = document.querySelectorAll("#f-ps")

fps.forEach(ele => {
    ele.addEventListener("mouseenter", () => {
        fpsImg.style.display = "block"
    });
    ele.addEventListener("mouseleave", () => {
        fpsImg.style.display = "none"
    });
});

fps.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        let attri = e.getAttribute("src")
        fpsImg.style.backgroundImage = `url(${attri})`
    })
})



/* Making of black box conatiner on click function */
let design = document.querySelector("#design")
let project = document.querySelector("#project")
let execution = document.querySelector("#execution")
let bImg = document.querySelector("#b-img")
let bPara = document.querySelector("#b-para")

design.addEventListener("click", () => {
    bImg.setAttribute("src", "assets/inv/iron-1.png")
    bPara.innerText = "❝ Our team refines ideas into executable designs, crafting final concepts that embody brand narratives and provide end-to-end solutions, from design and drawings to 3D renderings ❞"
    design.style.fontSize = "19vw";
    project.style.fontSize = "5vw";
    execution.style.fontSize = "5vw";
    design.style.color = "white"
    project.style.color = "#504A46"
    execution.style.color = "#504A46"
});

project.addEventListener("click", () => {
    bImg.setAttribute("src", "assets/inv/spider-1.png")
    bPara.innerText = "❝ Once the design is ready, our production team brings it to life, handling everything from technical drawings and site surveys to vendor management and 2D/3D production, supported by a vast partner network ❞"
    project.style.fontSize = "19vw";
    design.style.fontSize = "5vw";
    execution.style.fontSize = "5vw";
    project.style.color = "white"
    design.style.color = "#504A46"
    execution.style.color = "#504A46"
});

execution.addEventListener("click", () => {
    bImg.setAttribute("src", "assets/inv/venom-1.png")
    bPara.innerText = "❝ We support you from project initiation to launch, with our teams onsite to oversee every detail, ensuring success in the built space and experience ❞"
    execution.style.fontSize = "17vw";
    project.style.fontSize = "5vw";
    design.style.fontSize = "5vw";
    execution.style.color = "white"
    design.style.color = "#504A46"
    project.style.color = "#504A46"
});



/* Making pop up nav for mobile */
let navPop = document.querySelector("#nav-pop")
let navP = document.querySelector("#nav-p h2")
let navpBtn = document.querySelector("#nav-p-cont button")
navP.addEventListener("click", function () {
    navPop.style.top = 0
})
navpBtn.addEventListener("click", function () {
    navPop.style.borderBottomRightRadius = "30px"
    navPop.style.borderBottomLeftRadius = "30px"
    navPop.style.top = "-100%"
})



/* Making of black box cont for @mobile */
let bPro = document.querySelector("#b-Pro")
let bExc = document.querySelector("#b-Exc")
let bDes = document.querySelector("#b-Des")
let bCentreImg = document.querySelector("#b-centre-img")
let mBpara = document.querySelector("#m-b-para")

bPro.addEventListener("click", () => {
    if (bPro.innerText === "DESIGN") {
        bCentreImg.setAttribute("src", "assets/inv/iron-1.png")
        mBpara.innerText = "❝ Our team refines ideas into executable designs, crafting final concepts that embody brand narratives and provide end-to-end solutions, from design and drawings to 3D renderings ❞"
        bDes.innerText = "DESIGN";
        bPro.innerText = "PROJECT";
        bExc.innerText = "EXECUTION"
    } else if (bPro.innerText === "PROJECT") {
        bCentreImg.setAttribute("src", "assets/inv/spider-1.png")
        mBpara.innerText = "❝ Once the design is ready, our production team brings it to life, handling everything from technical drawings and site surveys to vendor management and 2D/3D production, supported by a vast partner network ❞"
        bDes.innerText = "PROJECT";
        bPro.innerText = "DESIGN";
        bExc.innerText = "EXECUTION";
    } else if (bPro.innerText === "EXECUTION") {
        bCentreImg.setAttribute("src", "assets/inv/venom-1.png")
        mBpara.innerText = "❝ We support you from project initiation to launch, with our teams onsite to oversee every detail, ensuring success in the built space ❞"
        bDes.innerText = "EXECUTION";
        bPro.innerText = "DESIGN";
        bExc.innerText = "PROJECT";
    }
});

bExc.addEventListener("click", () => {
    if (bExc.innerText === "EXECUTION") {
        bCentreImg.setAttribute("src", "assets/inv/venom-1.png")
        mBpara.innerText = "❝ We support you from project initiation to launch, with our teams onsite to oversee every detail, ensuring success in the built space ❞"
        bDes.innerText = "EXECUTION";
        bExc.innerText = "PROJECT";
        bPro.innerText = "DESIGN";

    } else if (bExc.innerText === "PROJECT") {
        bCentreImg.setAttribute("src", "assets/inv/spider-1.png")
        mBpara.innerText = "❝ Once the design is ready, our production team brings it to life, handling everything from technical drawings and site surveys to vendor management and 2D/3D production, supported by a vast partner network ❞"
        bDes.innerText = "PROJECT";
        bExc.innerText = "EXECUTION";
        bPro.innerText = "DESIGN";
    } else if (bExc.innerText === "DESIGN") {
        bCentreImg.setAttribute("src", "assets/inv/iron-1.png")
        mBpara.innerText = "❝ Our team refines ideas into executable designs, crafting final concepts that embody brand narratives and provide end-to-end solutions, from design and drawings to 3D renderings ❞"
        bDes.innerText = "DESIGN";
        bExc.innerText = "EXECUTION";
        bPro.innerText = "PROJECT";
    }
});

/* Loader Animation for the Webpage */
let loader = document.querySelector("#loader")
setTimeout(function(){
    loader.style.top = "-100%"
},4000)

/* END OF JAVASCRIPT (by @curioushiva) */