



// Drop Dwn


let dropDwn = document.querySelector(".drop");

dropDwn.onclick = function() {
    document.querySelector(".links").classList.toggle("active");
}



    // Craousel 

let testiBox1 = document.querySelector(".testi-box"),
    testiBox2 = document.querySelector(".testi1-box"),
    checkBox1 = document.querySelector(".check-box2"),
    checkBox2 = document.querySelector(".check-box1");

checkBox1.onclick = function() {
    testiBox1.style.transform = "translate(311px, -510px)"
    testiBox2.style.transform = "translate(8500px, -5100px)"
    checkBox1.classList.add("active")
    checkBox2.classList.remove("active")
}

    checkBox2.onclick = function() {
    testiBox2.style.transform = "translate(-180px, -510px)"
    testiBox1.style.transform = "translate(8500px, -5100px)"
    checkBox2.classList.add("active")
    checkBox1.classList.remove("active")
}



// Scroll To Top 

let toTop = document.querySelector(".scroll-to-top");

window.onscroll = function() {
    if(window.scrollY >= 1200) {
        toTop.style.display = "block"
    } else {
        toTop.style.display = "none"
    }
}

toTop.onclick = function() {
    window.scrollTo({
        top: "0",
        behavior : "smooth"
    })
};



// Counter 

let mySection = document.querySelector(".counter"),
    nums = document.querySelectorAll(".count .num"),
    started = false;

    

    window.onscroll = function() {
        
        if (window.scrollY >= 2115) {
            if(!started) {
                nums.forEach((num) => startCount(num));
            }
            started = true;
        }
    }

    function startCount(el) {
        let goal = el.dataset.goal;
        let count = setInterval(() => {
            el.textContent++;
            if (el.textContent == goal) {
                clearInterval(count);
            }
        }, 2000 / goal);
    };




    

























