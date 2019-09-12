	$(document).on('click', '.model_form', function() {
	    $('#form_modal').modal({
	        keyboard: false,
	        show: true,
	        backdrop: 'static'
	    });
	    // var data = eval($(this).attr('data'));
	    // $('#id').val(data.id);
	    // $('#name').val(data.name);
	    // $('#country').val(data.country);
	    // $('#email').val(data.email);
	    // $('#about').val(data.about);
	    // $('#mobile').val(data.mobile);
	    // $('#dob').val(data.dob);
	    // if (data.id != "")
	    //     $('#pop_title').html('Edit');
	    // else
	    //     $('#pop_title').html('Add');

	});
	$(document).on('click', '.delete_check', function() {
	    if (confirm("Are you sure to delete data")) {
	        var current_element = $(this);
	        url = "updateproduct.html";
	        $.ajax({
	            type: "POST",
	            url: url,
	            data: { ct_id: $(current_element).attr('data') },
	            success: function(data) { //location.reload(); 
	                $('.' + $(current_element).attr('data') + '_del').animate({ backgroundColor: "#003" }, "slow").animate({ opacity: "hide" }, "slow");
	            }
	        });
	    }
	});