function Game(WIDTH,HEIGHT,BG,FS=true){
    this.width = WIDTH;
    this.height = HEIGHT;
    this.bg = BG;

    //Setting up canvas
    var d = document;
    var cnv = d.createElement("canvas");
    d.body.appendChild(cnv);
    var ctx = cnv.getContext("2d");
    cnv.width = WIDTH;
    cnv.height = HEIGHT;
    if(FS){
        var VW = window.innerWidth;
        var VH = window.innerHeight;
        if(VW>VH){
            cnv.style.height = VH+"px";
            cnv.style.width = VW*(VH/HEIGHT)+"px";
            var sc = (VW*(VH/HEIGHT))/VH;
        }
        else{
            cnv.style.width = VW+"px";
            cnv.style.height = VH*(VW/WIDTH)+"px";
            var sc = (VH*(VW/WIDTH))/VW;
        }
        console.log(sc)
        console.log(WIDTH/HEIGHT);
        console.log(sc==(WIDTH/HEIGHT));
    }
}