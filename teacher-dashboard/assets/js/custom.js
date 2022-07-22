// Mobile Menu Js
$('.mobile-toggle').click(function(){
	$('.mobile-wrap').addClass('active');
});
// Mobile Navigation Close Button Js
$('.toogle-close-btn').click(function(){
	$('.mobile-wrap').removeClass('active');
});
//edit-profile-round-image
function readURL(input) {
  if(input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $("#imagePreviewban").css("background-image", "url(" + e.target.result + ")");
      $("#imagePreviewban").hide();
      $("#imagePreviewban").fadeIn(650);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
$("#imageUploadban").change(function() {
  readURL(this);
});
//edit-profile-main-banner-image-end
//round-image-start
$('#imageUploadNew').click(function(){
    function readURL(input) { 
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreviewNew').css('background-image', 'url('+e.target.result +')');
            $('#imagePreviewNew').hide();
            $('#imagePreviewNew').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
  }
  $("#imageUploadNew").change(function() {
    readURL(this);
  });
})
//round-image-end
// Notification Dropdown Js
$('.notification-icon').click(function(){
  $('.notification-dropdown-wrap').toggleClass('show');
});
// payments methods css
var selector = '.method';
$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});
//new-modal-bootstrap
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
//edit-profile-main-banner-image-start
// Measurement Page Starts
$(function() {
  $("#sortableImgThumbnailPreview").sortable({
   connectWith: ".RearangeBox",


   start: function( event, ui ) { 
     $(ui.item).addClass("dragElemThumbnail");
     ui.placeholder.height(ui.item.height());

 },
 stop:function( event, ui ) { 
     $(ui.item).removeClass("dragElemThumbnail");
 }
});
  $("#sortableImgThumbnailPreview").disableSelection();
});
document.getElementById('files').addEventListener('change', handleFileSelect, false);
function handleFileSelect(evt) {
  var files = evt.target.files; 
  var output = document.getElementById("sortableImgThumbnailPreview");
  // Loop through the FileList and render image files as thumbnails.
  for (var i = 0, f; f = files[i]; i++) {
    // Only process image files.
    if (!f.type.match('image.*')) {
      continue;
  }
  var reader = new FileReader();
    // Closure to capture the file information.
    reader.onload = (function(theFile) {
      return function(e) {
        // Render thumbnail.
        var imgThumbnailElem = "<div class='RearangeBox imgThumbContainer'><i class='fas fa-times-circle imgRemoveBtn' onclick='removeThumbnailIMG(this)'></i><div class='IMGthumbnail' ><img  src='" + e.target.result + "'" + "title='"+ theFile.name + "'/></div><div class='imgName'>"+ theFile.name +"</div></div>";
        output.innerHTML = output.innerHTML + imgThumbnailElem; 
        
    };
})(f);
    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
}
}
function removeThumbnailIMG(elm){
  elm.parentNode.outerHTML='';
}
// Measurement Page Ends
//edit-profile-round-image
$("#demo-upload").dropzone({ url: "/file/post" });
var dropzone = new Dropzone('#demo-upload', {
  previewTemplate: document.querySelector('#preview-template').innerHTML,
  parallelUploads: 2,
  thumbnailHeight: 120,
  thumbnailWidth: 120,
  maxFilesize: 3,
  maxFiles: 1,
  filesizeBase: 1000,
  thumbnail: function(file, dataUrl) {
    if (file.previewElement) {
      file.previewElement.classList.remove("dz-file-preview");
      var images = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
      for (var i = 0; i < images.length; i++) {
        var thumbnailElement = images[i];
        thumbnailElement.alt = file.name;
        thumbnailElement.src = dataUrl;
      }
      setTimeout(function() { file.previewElement.classList.add("dz-image-preview"); });
    }
  }

});
// End
var dropFileForm = document.getElementById("dropFileForm");
var fileLabelText = document.getElementById("fileLabelText");
var uploadStatus = document.getElementById("uploadStatus");
var fileInput = document.getElementById("fileInput");
var droppedFiles;

function overrideDefault(event) {
  event.preventDefault();
  event.stopPropagation();
}

function fileHover() {
  dropFileForm.classList.add("fileHover");
}

function fileHoverEnd() {
  dropFileForm.classList.remove("fileHover");
}

function addFiles(event) {
  droppedFiles = event.target.files || event.dataTransfer.files;
  showFiles(droppedFiles);
}

function showFiles(files) {
  if (files.length > 1) {
    fileLabelText.innerText = files.length + " files selected";
  } else {
    fileLabelText.innerText = files[0].name;
  }
}
function uploadFiles(event) {
  event.preventDefault();
  changeStatus("Uploading...");

  var formData = new FormData();

  for (var i = 0, file; (file = droppedFiles[i]); i++) {
    formData.append(fileInput.name, file, file.name);
  }
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(data) {
    //handle server response and change status of
    //upload process via changeStatus(text)
    console.log(xhr.response);
  };
  xhr.open(dropFileForm.method, dropFileForm.action, true);
  xhr.send(formData);
}

function changeStatus(text) {
  uploadStatus.innerText = text;
}
// End
$(function () {
  $('#example').dataTable({
    paging: false,
    fixedHeader: {
      header: true
    },
        dom: 'Bfrtip',
        buttons: [
      {
        extend: 'excel',
        text: 'Excel <span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span>'
      },
      {
        extend: 'pdf',
        text: 'PDF <span class="glyphicon glyphicon-download-alt" aria-hidden="true"></span>'
      },
      
            'copy',
            'pdf',
            'colvis'
        ],
  });
});
$(document).ready(function(){
    $('.payment-type').click(function(){
        $('#payment-modal').hide();
        $('.modal-backdrop').hide();
        //$('#credit-modal').show();
    });
});
// Drag And Drop Js
var dropFileForm = document.getElementById("dropFileForm");
var fileLabelText = document.getElementById("fileLabelText");
var uploadStatus = document.getElementById("uploadStatus");
var fileInput = document.getElementById("fileInput");
var droppedFiles;

function overrideDefault(event) {
  event.preventDefault();
  event.stopPropagation();
}

function fileHover() {
  dropFileForm.classList.add("fileHover");
}

function fileHoverEnd() {
  dropFileForm.classList.remove("fileHover");
}

function addFiles(event) {
  droppedFiles = event.target.files || event.dataTransfer.files;
  showFiles(droppedFiles);
}
function showFiles(files) {
  if (files.length > 1) {
    fileLabelText.innerText = files.length + " files selected";
  } else {
    fileLabelText.innerText = files[0].name;
  }
}
function uploadFiles(event) {
  event.preventDefault();
  changeStatus("Uploading...");

  var formData = new FormData();

  for (var i = 0, file; (file = droppedFiles[i]); i++) {
    formData.append(fileInput.name, file, file.name);
  }

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(data) {
    //handle server response and change status of
    //upload process via changeStatus(text)
    console.log(xhr.response);
  };
  xhr.open(dropFileForm.method, dropFileForm.action, true);
  xhr.send(formData);
}

function changeStatus(text) {
  uploadStatus.innerText = text;
}
// End
