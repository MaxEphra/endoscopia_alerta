var QRCode=function(el,text){

    var img=document.createElement("img")
    
    img.src=
    "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data="+
    encodeURIComponent(text)
    
    el.innerHTML=""
    
    el.appendChild(img)
    
    }