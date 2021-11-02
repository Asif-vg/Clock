let san = document.querySelector(".san");
let min = document.querySelector(".min");
let hours = document.querySelector(".hour");
let btn = document.querySelector("#btn");
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        if(document.querySelector(".clock").children.length<6){
            let p = document.createElement("p");
            p.innerText = "TIK-TAK";
            p.id = "p"
        
            let clock= document.querySelector(".clock");
            clock.append(p);
        }
    })
function clock() {
    let saniye = new Date().getSeconds()
    let minute = new Date().getMinutes()
    let hour = new Date().getHours()

    san.style.transform = `translateX(-50%)rotate(${(180 + (saniye * 6 ))}deg)`
    min.style.transform = `translateX(-50%)rotate(${(180 + (minute * 6 ))}deg)`
    hours.style.transform = `translateX(-50%)rotate(${(180 + (hour * 30 ))}deg)`
}

setInterval(clock, 1000)