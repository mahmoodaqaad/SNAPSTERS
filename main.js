let colors = document.querySelectorAll(".choose-color span")

if (window.localStorage.getItem("settheem")) {

    document.documentElement.style.setProperty("--color-primary", `${window.localStorage.getItem("settheem")}`)


    colors.forEach(ele => {
        ele.classList.remove("active")
        if (window.localStorage.getItem("settheem") == ele.dataset.color)
            ele.classList.add("active")

    })
}


let home = document.querySelector(".menu-item.home")


let message = document.querySelector(".messages")


let swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 5
})

let profileImg = "img/my-profile.jpg"
// start profile popup

let profileImage = document.querySelectorAll("#my-profile-picture>img")
let popupprofile = document.querySelector(".profile-popup")
profileImage.forEach(img => {
    img.onclick = () => {

        popupprofile.classList.add("active")
    }
})
let close = document.querySelector(".profile-popup .close")
close.onclick = () => {
    popupprofile.classList.remove("active")

}



document.querySelector("#profile-upload").onchange = () => {
    profileImage.forEach(img => {
        img.src = URL.createObjectURL(document.querySelector("#profile-upload").files[0])
        profileImg = img.src
    })

}
// End profile popup
// start post add
let popupAddPost = document.querySelector(".add-post-popup")
document.querySelectorAll("#create-post").forEach(addPost => {
    addPost.onclick = () => {
        popupAddPost.classList.add("active")
    }

})
document.querySelector(".add-post-popup .close").onclick = () => {

    popupAddPost.classList.remove("active")
}
let srcImg = ""
document.querySelector("#feed-pic-upload").onchange = () => {
    srcImg = URL.createObjectURL(document.querySelector("#feed-pic-upload").files[0])
    document.querySelector("#POSTiMG").src = srcImg





}


// start add story
document.querySelector("#add-story").onchange = () => {
    document.querySelector(".story img").src = URL.createObjectURL(document.querySelector("#add-story").files[0])
    document.querySelector(".add-story").remove()

    document.querySelector(".story#my-profile-picture").innerHTML = `  
    <img src="${document.querySelector(".story img").src}" alt="">
    <div class="profile-picture" id="my-profile-picture">
    <img src="${profileImg}" alt="">
 
    </div>
    <p>Your Story</p>`
}
// End add story

// start hilight post input
document.querySelector(".mini-button").ondblclick = () => {
    popupAddPost.classList.add("active")

}
document.querySelector(".mini-button").onclick = () => {
    document.querySelector("form.add-post").classList.add("boxShadow")
    setTimeout(() => {

        document.querySelector("form.add-post").classList.remove("boxShadow")
    }, 1000);
}





// theme popup 
let themePopoup = document.querySelector(".theme-customize");

let btnTheme = document.querySelector(".menu-item.theme")


document.querySelector(".theme-customize .close").onclick = () => {
    home.classList.add("active")
    btnTheme.classList.remove("active")
    themePopoup.classList.remove("active")
}



// notficiont 

let notf = document.querySelector(".menu-item.notf")
notf.onclick = () => {
    removeactive()
    notf.classList.add("active")
}
document.addEventListener('click', function (event) {
    const target = event.target;
    // اذا العنصر الذي تم النقر عليه ليس جزء من القائمة، اغلق القائمة
    if (!notf.contains(target) && target != document.querySelector("aside")) {
        notf.classList.remove("active")
        // home.classList.add("active")


    }
});










document.onscroll = () => {
    notf.classList.remove("active")
    popupprofile.classList.remove("active")
    popupAddPost.classList.remove("active")
    themePopoup.classList.remove("active")
    removeactive()

    home.classList.add("active")


}



document.onkeyup = (e) => {
    if (e.key == "Escape") {
        notf.classList.remove("active")
        popupprofile.classList.remove("active")
        popupAddPost.classList.remove("active")
        themePopoup.classList.remove("active")
        removeactive()

        home.classList.add("active")

    }
}



document.querySelectorAll(".menu-item").forEach(ele => {
    ele.onclick = () => {

        removeactive()
        ele.classList.add("active")
        if (ele.classList.contains("theme")) {
            themePopoup.classList.add("active")

        }
        if (ele.classList.contains("messagesItem")) {
            masagePage();
        }
    }
}
)

function removeactive() {
    document.querySelectorAll(".menu-item").forEach(e => e.classList.remove("active"))
}

// theme 



// theme color 


colors.forEach(ele => {
    ele.onclick = () => {
        colors.forEach(ele => {
            ele.classList.remove("active")
        })
        document.documentElement.style.setProperty("--color-primary", `${ele.dataset.color}`)
        window.localStorage.setItem("settheem", ele.dataset.color)
        ele.classList.add("active")
    }
})


let font = document.querySelectorAll(".choose-size span")
font.forEach(ele => {

    ele.onclick = () => {
        font.forEach(ele => {
            ele.classList.remove("active")
        })

        ele.classList.add("active")
        document.documentElement.style.setProperty("--font", `${ele.dataset.size}`)

    }
})




let root = document.querySelector(":root")




// theme dark / light 



let bg1 = document.querySelector(".bg1");
let bg2 = document.querySelector(".bg2");

let lightColorLightTheme;
let whiteColorLightTheme;
let darkColorLightTheme;

bg2.onclick = () => {

    darkColorLightTheme = "95%";
    lightColorLightTheme = "15%";
    whiteColorLightTheme = "20%";

    bg2.classList.add("active")
    bg1.classList.remove("active")
    changeBg()

}

bg1.onclick = () => {

    location.reload()

    bg1.classList.add("active")
    bg2.classList.remove("active")
}
let changeBg = () => {
    root.style.setProperty("--color-dark-light-theme", darkColorLightTheme)
    root.style.setProperty("--color-light-light-theme", lightColorLightTheme)
    root.style.setProperty("--color-white-light-theme", whiteColorLightTheme)

}












// accapt and delet ruqust 

let accept = document.querySelectorAll(".action .btn-primary")
let dlete = document.querySelectorAll(".action .btn-danger")
accept.forEach(accept => {
    accept.onclick = () => {
        accept.parentElement.parentElement.querySelector(".alert").style.display = "block"
        accept.parentElement.style.display = "none"
        setTimeout(() => {

            accept.parentElement.parentElement.classList.add("top")
        }, 2000);
        setTimeout(() => {

            accept.parentElement.parentElement.remove()
        }, 4000);
    }

})


dlete.forEach(del => {
    del.onclick = () => {
        del.parentElement.parentElement.remove()
    }

})
function masagePage() {
    let main = document.querySelector("main")
    main.innerHTML = ""
    main.innerHTML = `

    <div class="message-container container">
    <div class="listFreind ">


        <!-- message  -->
        <div>
            <div class="profile-picture">
                <img src="img/fead1.jpg" alt="">
                <div class="green-active"></div>
            </div>
            <div class="message-body">
                <h3>Saleh taleh </h3>
                <p class="now">
                    Hello, How are you 👍</p>
            </div>
        </div>
        <div>
            <div class="profile-picture">
                <img src="img/m6.jpg" alt="">
                <div class="green-active"></div>
            </div>
            <div class="message-body">
                <h3>Younis Khalil</h3>
                <p><span> You:</span> Ok</p>
            </div>
        </div>
        <div>
            <div class="profile-picture">
                <img src="img/friend-02.jpg" alt="">
                <!-- <div class="green-active"></div> -->
            </div>
            <div class="message-body">
                <h3>
                    Musa Subhi</h3>
                <p>no, I know that</p>
            </div>
        </div>
        <div class="active">
            <div class="profile-picture">
                <img src="img/friend-03.jpg" alt="">
                <div class="green-active"></div>
            </div>
            <div class="message-body">
                <h3>Ahmed Saadi</h3>
                <p>Typing...</p>
                <!-- <p>علاوي حبيب قلبي ابو حسين</p> -->
            </div>
        </div>
        <div>
            <div class="profile-picture ">
                <img src="img/f1.jpg" alt="">
            </div>
            <div class="message-body">
                <h3> nabeel aqal </h3>
                <p>nabeel send a video</p>
            </div>
        </div>
        <div>
            <div class="profile-picture ">
                <img src="img/f3.jpg" alt="">
            </div>
            <div class="message-body">
                <h3> seaad mahmood </h3>
                <p>You : how are you ?</p>
            </div>
        </div>
        <div>
            <div class="profile-picture ">
                <img src="img/f4.jpg" alt="">
            </div>
            <div class="message-body">
                <h3> khlil mahmood </h3>
                <p>ok👍</p>
            </div>

        </div>
    </div>


    <div class="bodyMessage">
        <div class="nametitle">
            <div class="title">
                <div class="profile-picture ">
                    <div class="green-active"></div>
                    <img src="img/friend-03.jpg" alt="">
                </div>
                <div class="info">
                    <div class="name">Ahmed Saadi</div>
                    <small class="text-gray">typing...</small>
                </div>
            </div>
            <div class="inforom">
                <div class="i">
                    <i class="fa fa-info"> </i>
                </div>
                <div class="call">
                    <div>
                        <div>
                            <i class="fa fa-phone-volume pointer "></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sidemessage">
            <div class="msg left">
                <div class="profile-picture ">
                    <img src="img/friend-03.jpg" alt="">
                </div>
                <p>Hello !</p>
            </div>
            <div class="msg right">
                <div class="profile-picture ">
                    <img src="img/my-profile.jpg" alt="">
                </div>
                <p>how are you</p>
            </div>
            <div class="msg left">
                <div class="profile-picture ">
                    <img src="img/friend-03.jpg" alt="">
                </div>
                <p>I'm fine</p>
            </div>
            <div class="msg left">
                <div class="profile-picture ">
                    <img src="img/friend-03.jpg" alt="">
                </div>
                <p>...</p>
            </div>
        </div>
        <div class="sendmessage">
            <i class="fa fa-heart hartSend"></i>
            <input type="text">
            <div class="tools">
                <i class="fa fa-add  add"> </i>
                <label for="img"><i class="fa fa-image  img"></i></label>
                <input type="file" id="img">
                <i class="fa fa-smile  smile"></i>
            </div>
        </div>

    </div>
</div>

`
}


