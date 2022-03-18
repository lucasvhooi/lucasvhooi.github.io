(function(){
    document.addEventListener("mousemove", parallaxtmc);
    const elemtmc = document.querySelector("#parallax-tmc");
    function parallaxtmc(e){
        let w = window.innerWidth/2;
        let h = window.innerHeight/2;
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let depth1 = `${50-(mouseX-w)*0.01}% ${50-(mouseY-h)*0.01}%`;
        let x = `${depth1}`;
        console.log(x);
        elemtmc.style.backgroundPosition = x;
    }

    document.addEventListener("mousemove", parallax3d);
    const elem3d = document.querySelector("#parallax-3d");
    function parallax3d(e){
        let w = window.innerWidth/2;
        let h = window.innerHeight/2;
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let depth1 = `${50-(mouseX-w)*0.01}% ${50-(mouseY-h)*0.01}%`;
        let x = `${depth1}`;
        console.log(x);
        elem3d.style.backgroundPosition = x;
    }

    document.addEventListener("mousemove", parallaxpht);
    const elempht = document.querySelector("#parallax-pht");
    function parallaxpht(e){
        let w = window.innerWidth/2;
        let h = window.innerHeight/2;
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let depth1 = `${50-(mouseX-w)*0.01}% ${50-(mouseY-h)*0.01}%`;
        let x = `${depth1}`;
        console.log(x);
        elempht.style.backgroundPosition = x;
    }

    document.addEventListener("mousemove", parallaxgrd);
    const elemgrd = document.querySelector("#parallax-grd");
    function parallaxgrd(e){
        let w = window.innerWidth/2;
        let h = window.innerHeight/2;
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let depth1 = `${50-(mouseX-w)*0.01}% ${50-(mouseY-h)*0.01}%`;
        let x = `${depth1}`;
        console.log(x);
        elemgrd.style.backgroundPosition = x;
    }
})();