var allthepicsXHR = {
    uploadImgUr: function (inputID, imgLink) {
        document.getElementById(inputID).addEventListener('change', function (e) {
            var file = e.target.files[0];
            if (!file || !file.type.match(/image.*/))
                return;

            var fd = new FormData();
            fd.append("image", file); // Append the file
            let xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            xhr.open('POST', 'http://allthepics.net/api/1/upload');
            xhr.setRequestHeader('X-API-Key', 'chv_MXR_69c6be6e58e2150041640ef60fcaa4b435904030b4b389615d32c2bceb5bc05b8889bc9832e602441e6202fc1cd114fb6423f3b0dd80cf51b6c8d4c9a4587d00');
            xhr.setRequestHeader('Content-Type', 'multipart/form-data');
            xhr.onload = function () {
                if (xhr.status == 200) {
                    console.log(JSON.parse(xhr.responseText).data.link);
                } else {
                    window.alert('ImgurXHR error: Error in uploading... Please try again');
                    imgLink.error = "Error Uploading in ImgUr";
                    //callback("error in uploading...");
                }
            }
            xhr.send(fd);
        }, false);
    }
}
