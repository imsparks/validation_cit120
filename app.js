var responseDiv = document.body.querySelector(".response");

document.body.querySelector(".butt").addEventListener("click", function () {
    var textValue = document.body.querySelector(".input").value;
    if (textValue === "coolStudent123"){
        navMenu();
        createWrapper();
        navigate("Home");
        document.getElementById("input").style.display = "none";
    } else{
        responseDiv.innerHTML = "Wrong User"
    }
})

var pages = ["Home", "About", "View"]

function navMenu(){

    var nav = document.createElement("nav")
    createButton(pages[0]);
    createButton(pages[1]);
    createButton(pages[2]);

    document.body.appendChild(nav);

    function createButton(pg){
        var button = document.createElement("button")
        button.innerHTML = pg
        button.addEventListener("click", function () {
            navigate(pg);
        })
        nav.appendChild(button);
    }
}

function createWrapper(){
    var wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);
}

function navigate(pg){
    if(pg === "Home"){
        homePage()
    } else if(pg === "About"){
        aboutPage()
    } else if(pg === "View"){
        ViewPage()
    }
}

function homePage(){
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    header.innerHTML = "Home";
    wrapper.appendChild(header);
}

function aboutPage(){
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    header.innerHTML = "About";
    var about = document.createElement("h3");
    about.style.color = "Red"
    about.innerHTML = "Isaiah Sparks"
    wrapper.appendChild(header);
    wrapper.appendChild(about);
}

function ViewPage(){
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    header.innerHTML = "View";
    wrapper.appendChild(header);
    var status = document.createElement("h3");
    wrapper.appendChild(status)

    var input1 = document.createElement("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("placeholder", "Text");

    var input2 = document.createElement("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("placeholder", "Importance");

    wrapper.appendChild(input1)
    wrapper.appendChild(input2)

    var button = document.createElement("button")
    button.innerHTML = "Submit"
    button.addEventListener("click", function () {
        if (input1.value.length > 1){
            if(isNaN(Number(input2.value)) === false){
                list.push({grade: input2.value, note: input1.value})
                renderList();
            }  else if (isNaN(Number(input2.value)) === true){
                status.innerHTML = "Please type a number in the second input box."
            }
        } else if (input1.value.length <= 1){
            status.innerHTML = "Please type a note longer than one character."
        }
    })
    wrapper.appendChild(button)

    var notes = document.createElement("h4")
    wrapper.appendChild(notes)
    var list=[{grade: "", note: ""}];

    function renderList(){
        notes.innerHTML = "";
        for (var i=0; i<list.length; i++){
            var ele = document.createElement("div");
            ele.innerHTML = list[i].grade + " " + list[i].note;
            notes.appendChild(ele);
        }
    }
}
document.getElementById("secondinput").style.display = "none";