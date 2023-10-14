// function text() {
//    $("#other_text").toggleClass('hide');
// }

//upload
// function ImageShowInImageTag(e, imgpre) {
//    const file = e.files[0];
//    if (file) {
//        if (imgpre.style.display == "none")
//            imgpre.style.display = "block";

//        let reader = new FileReader();
//        reader.onload = function(event) {
//            $(imgpre).attr('src', event.target.result);
//        };
//        reader.readAsDataURL(file);
//    }
// }
// delete
// function delete(){

// }

$(document).ready(function() {
    $("#Country").on('change', function() {
        // debugger
        var countryid = $(this).val();
        // console.log(countryid);
        document

       

        $.ajax({
            method: "POST",
            url: "response.php",
            data: {
                id: countryid
            },
            datatype: "html",
            success: function(data) {
                // console.log(data)
                $("#State").html(data);
                $("#city").html('<option value="">Select city</option');
            }
        });
    });
    $("#State").on('change', function() {
        var stateid = $(this).val();
        $.ajax({
            method: "POST",
            url: "response.php",
            data: {
                sid: stateid
            },
            datatype: "html",
            success: function(data) {
                $("#city").html(data);

            }

        });
    });
});

