function ScrollImg(leftArrowId, rightArrowId, containerId,imgId,arrayImgNameList) { //create a scroll gallery
    this.leftArrow = document.getElementById(leftArrowId);
    this.rightArrow = document.getElementById(rightArrowId);
    this.img = document.getElementById(imgId);
    this.container = document.getElementById(containerId);
    this.imgList = arrayImgNameList;
    this.index = 0;
    this.scrollRight = function () {
        this.index++;
        if (this.index >= this.imgList.length) this.index = 0;
        this.img.src = this.imgList[this.index];
    }
    this.scrollLeft = function () {
        this.index--;
        if (this.index < 0) this.index = this.imgList.length - 1;
        this.img.src = this.imgList[this.index];
    }
    if (this.leftArrow !== null) this.leftArrow.addEventListener("click",this.scrollLeft.bind(this));
    if (this.rightArrow !== null) this.rightArrow.addEventListener("click",this.scrollRight.bind(this));
}

var listPhotosLudi = ["img/ludi/ludi1.jpg","img/ludi/ludi2.jpg","img/ludi/ludi3.jpg"];
var photosLudi = new ScrollImg("left","right"," ","img",listPhotosLudi);

function Gallery(listIdGalleryFullScreen, arrayImgNameList, listIdColumn) { //create a gallery that goes full screen when clicking
    this.leftArrow = document.getElementById(listIdGalleryFullScreen[0]);
    this.rightArrow = document.getElementById(listIdGalleryFullScreen[1]);
    this.container = document.getElementById(listIdGalleryFullScreen[2]);
    this.imgFullSize = document.getElementById(listIdGalleryFullScreen[3]);
    this.exit = document.getElementById(listIdGalleryFullScreen[4]);

    this.imgList = arrayImgNameList;

    this.index = 0;
    this.imgs = [];

    var that = this;

    this.column = [];
    for (let i=0;i<4;i++) this.column.push(document.getElementById(listIdColumn[i]));

    for (let i=0;i<this.imgList.length;i++) {
        this.imgs[i] = document.createElement("IMG");
        this.imgs[i].src = this.imgList[i];
        this.imgs[i].id = "img" + i;

        switch (i%4) {
            case 0:
                this.column[0].appendChild(this.imgs[i]);
                break;
            case 1:
                this.column[1].appendChild(this.imgs[i]);
                break;
            case 2:
                this.column[2].appendChild(this.imgs[i]);
                break;
            case 3:
                this.column[3].appendChild(this.imgs[i]);
                break;
        }

        this.imgs[i].addEventListener("click",function () {that.goFullScreen(i);});
    }

    //basic functions like go full screen, exit full screen, go right and go left.
    this.goFullScreen = function (number) {
        this.index = number;
        console.log(number);
        this.container.style.display = "block";
        this.imgFullSize.src = this.imgList[this.index];
    }

    this.scrollRight = function () {
        this.index++;
        if (this.index >= this.imgList.length) this.index = 0;
        this.imgFullSize.src = this.imgList[this.index];
    }

    this.scrollLeft = function () {
        this.index--;
        if (this.index < 0) this.index = this.imgList.length - 1;
        this.imgFullSize.src = this.imgList[this.index];
    }

    this.exitFullScreen = function () {
        this.container.style.display = "none";
    }

    //Exit full screen when pressing esc
    document.addEventListener("keydown",function (event) {
        if (event.key === "Escape") that.exitFullScreen();
        }
    )

    //event listener for arrows and exit button in full screen mode
    if (this.leftArrow !== null) this.leftArrow.addEventListener("click",this.scrollLeft.bind(this));
    if (this.rightArrow !== null) this.rightArrow.addEventListener("click",this.scrollRight.bind(this));
    if (this.exit !== null) this.exit.addEventListener("click",this.exitFullScreen.bind(this));
}

var listIdGalleryFullScreen = ["fullScreenLeft","fullScreenRight","fullScreenContainer","fullScreenImg","fullScreenExit"]; //IDs to control full screen gallery in HTML: left arrow, right arrow, container, img & exit.
var listIdColumn = ["galleryColumn1","galleryColumn2","galleryColumn3","galleryColumn4"]; //IDs columns in HTML
var listPhotosGallery = ["img/gallery/(1).jpg","img/gallery/(2).jpg","img/gallery/(3).jpg","img/gallery/(4).jpg","img/gallery/(5).jpg","img/gallery/(6).jpg","img/gallery/(7).jpg","img/gallery/(8).jpg"]; //Array with src location of photos to be displayed in gallery.
var mainGallery = new Gallery(listIdGalleryFullScreen,listPhotosGallery,listIdColumn); //create new gallery.