function light(sw) {
    var pic;
    if (sw == 0) {
        pic = "pic_bulboff.gif"
        document.getElementById('everything').classList.add("hidden");
        document.body.style.backgroundColor = "black";
    } else {
        pic = "pic_bulbon.gif";
        document.getElementById('everything').classList.remove("hidden");
        document.body.style.backgroundColor = "gray";
    }
    document.getElementById('myImage').src = pic;
   
}

