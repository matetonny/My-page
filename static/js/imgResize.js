let file_upload = document.querySelector("#file-upload");
let file_upload_label = document.querySelector(".custom-file-upload");

file_upload.addEventListener('input', function(){
    file_upload_label.innerHTML = "<p>File Uploaded<p>"
    file_upload_label.innerHTML += "<img src='/static/images/checkmark.png' alr='checkmark' height='50'>"
})