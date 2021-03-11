window.onload = function () {   
        let oDom = document.querySelector("#testcss");
        let oHtml = document.querySelector("html");
        var oldY= null;
        var isdown = false;
        oDom.onmousedown = function(e){
            isdown = true;
            oldY = e.clientY;
        };
        oHtml.onmousemove = function(e){
            if(isdown){
                oDom.style.cssText = `transform: rotate(${e.clientY-oldY}deg)`;
                // oDom.css("transform","rotate("+(e.clientY-oldY)+"deg)");
            }
        };
        oHtml.onmouseup = function(e){
            isdown = false;
            oldY = null;
        };
    }
