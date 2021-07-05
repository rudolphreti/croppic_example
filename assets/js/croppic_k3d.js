var croppicContainerPreloadOptions = {
  uploadUrl: 'img_save_to_file.php',
  cropUrl: 'img_crop_to_file.php',
  loadPicture: 'assets/img/górówka medea.jpg',
  enableMousescroll: true,
  imgEyecandy: false,
  loaderHtml:
    '<div class="loader bubblingG"><span id="bubblingG_1"></span><span id="bubblingG_2"></span><span id="bubblingG_3"></span></div> ',
  onBeforeImgUpload: function () {
    console.log('onBeforeImgUpload');
  },
  onAfterImgUpload: function () {
    console.log('onAfterImgUpload');
  },
  onImgDrag: function () {
    console.log('onImgDrag');
  },
  onImgZoom: function (x) {
    var that = this;
    var ratio = that.imgW / that.imgH;
    var newWidth = that.imgW + x;
    var newHeight = newWidth / ratio;
    var doPositioning = true;
    //default factor 1
    var allowSmallerFactor = 1;
    //checking if i am initializing the zoom, there are more elegant possibillities, but for the sake of it.
    if (x != 40) allowSmallerFactor = 3; //in case of not init, i allow a 3 times smaller picture.

    if (newWidth < that.objW && newHeight < that.objH) {
      if (that.imgW > that.imgH) {
        // landscape
        newWidth = that.objW;
        newHeight = newWidth / ratio;
        // centre the image vertically
        that.img.css({ top: that.objH / 2 - newHeight / 2, left: 0 });
      } else {
        // portrait
        newHeight = that.objH;
        newWidth = newHeight * ratio;
        // centre the image horizontally
        that.img.css({ top: 0, left: that.objW / 2 - newWidth / 2 });
      }

      doPositioning = false;
    }

    if (
      !that.options.scaleToFill &&
      (newWidth > that.imgInitW || newHeight > that.imgInitH)
    ) {
      if (newWidth - that.imgInitW < newHeight - that.imgInitH) {
        newWidth = that.imgInitW;
        newHeight = newWidth / ratio;
      } else {
        newHeight = that.imgInitH;
        newWidth = ratio * newHeight;
      }

      doPositioning = false;
    }
  },
  onBeforeImgCrop: function () {
    console.log('onBeforeImgCrop');
  },
  onAfterImgCrop: function () {
    console.log('onAfterImgCrop');
  },
  onReset: function () {
    console.log('onReset');
  },
  onError: function (errormessage) {
    console.log('onError:' + errormessage);
  },
};

var testarray = [];
testarray[0] = new Croppic(
  'cropContainerPreload',
  croppicContainerPreloadOptions
);
