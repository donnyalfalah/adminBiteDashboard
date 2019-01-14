
!function($) {
    "use strict";

    var SweetAlert = function() {};

    //examples
    SweetAlert.prototype.init = function() {

        //Basic
        $('#sa-error').click(function(){
            swal({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href>Why do I have this issue?</a>'
            })
        });

        //A title with a text under
        $('#sa-title').click(function(){
            swal("Here's a message!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat eleifend ex semper, lobortis purus sed.")
        });

        //Success Message
        $('#sa-success').click(function(){
            swal("Good job!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem erat eleifend ex semper, lobortis purus sed.", "success")
        });

        //Warning Message
        $('#sa-warning').click(function(){
            swal({
                title: 'درخواست حذف',
                text: "آیا از حذف این تصویر مطمئنید؟",
                type: 'warning',
                
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'حذف کن',
                cancelButtonText: 'لغو'
            }).then((result) => {
                if (result.value) {
                    swal({
                       type:'success',
                        confirmButtonText: 'باشه',
                        title:'حذف شد',
                        text:'تصویر با موفقیت حذف شد'
                    });
                }
            })
        });






    },
        //init
        $.SweetAlert = new SweetAlert, $.SweetAlert.Constructor = SweetAlert
}(window.jQuery),

//initializing
    function($) {
        "use strict";
        $.SweetAlert.init()
    }(window.jQuery);