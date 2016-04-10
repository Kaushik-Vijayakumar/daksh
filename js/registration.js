		/* Event Inside */
        var evecl;

		$('.register_button_events').click(function() {
            $('.evform').find('input[type=text]').val('');
			$('.evform').find('input[type=email]').val('');
			$('.event-form').show();
		});

        function eclic(element) {
			evecl = element.value;	
		}
		
        $('#registerEvent').click(function(e) {
			var evn = $('#evname').val();
			var evtn = $('#evteamname').val();
			var evp = $('#evphone').val();
			var evem = $('#evemail').val();
			var evpl = $('#evplace').val();
            var evyear = $('#evyear').val();
            evyear += $('#evdepartment').val();
            var evcapt = $('.evcapt:checked').val();

			err = 0;
            if (evn == "") {
                $('#evname').addClass('error');
                err = 1;
            }
			if (evtn == "") {
                $('#evteamname').addClass('error');
                err = 1;
            }
            if (evp == "") {
                $('#evphone').addClass('error');
                err = 1;
            }
            if (evem == "") {
                $('#evemail').addClass('error');
                err = 1;
            }
			if (evecl == "1"){
				$('#evecl').addClass('error');
                err = 1;
			}
            if (evpl == "1") {
                $('#evplace').addClass('error');
                err = 1;
            }
            if (evyear == "") { 
                $('#evyear').addClass('error');
                err = 1;
            }
            if (err == 0) {
                $.ajax({
                    type: "POST",
                    url: "php/registerEvents.php",
                    data: "evname=" + evn + "&evteamname=" + evtn + "&evphone=" + evp + "&evemail=" + evem + "&evecl=" + evecl + "&evplace=" + evpl + "&evyear=" + evyear + "&evcapt=" + evcapt,
					success: function(msg) {
						if (msg == "Success") {
							$('.success-form').show();
                            $('.event-form').hide();
                        } else { 
							$('.error-form').show();
                        }
                    }
                });
            }
            return false;
        });

		/* Workshop Inside */ 
		$('.register_button_workshops').click(function() {
            $('.wform').find('input[type=text]').val('');
			$('.wform').find('input[type=email]').val('');
			$('.workshop-form').show();
        });

		function wclic(welement) {
            w = welement.value;
		}

		$('#registerWorkshop').click(function(e) {
			var wn = $('#wname').val();
			var wp = $('#wphone').val();
			var wm = $('#wemail').val();
			var wpl = $('#wplace').val();
			var evyear = $('#wyear').val() + $('#wdepartment').val();
            err = 0;
			
            if (wn == "") {
                $('#wname').addClass('error');
                err = 1;
            }
			if (wp == "") {
                $('#wphone').addClass('error');
                err = 1;
            }
            if (wm == "") {
                $('#wmail').addClass('error');
                err = 1;
            }
			if (wpl == "1") {
                $('#wplace').addClass('error');
                err = 1;
            }
            if (evyear == "") { 
                $('#evyear').addClass('error');
                err = 1;
            }
            if (err == 0) {
                $.ajax({
                    type: "POST",
                    url: "php/registerWorkshop.php",
                    data: "wname=" + wn + "&wphone=" + wp + "&wmail=" + wm + "&wplace=" + wpl + "&workshop=" + w + "&evyear=" + evyear,
					success: function(msg) {
						if (msg == "Success") {
							$('.success-form').show();
                            $('.workshop-form').hide();
                        } else {
							$('.error-form').show();
                        }
                    }
                });
            }
            return false;
        });




        $('#registerHospitality').click(function(e) {
            var wn = $('#hname').val();
			var wp = $('#hphone').val();
			var wm = $('#hemail').val();
			var wpl = $('#hplace').val();
			var wcity = $('#hcity').val();
			var wyear = $('#hyear').val() + $('#hdepartment').val();
            err = 0;
			
            if (wn == "") {
                $('#hname').addClass('error');
                err = 1;
            }
			if (wp == "") {
                $('#hphone').addClass('error');
                err = 1;
            }
            if (wm == "") {
                $('#hmail').addClass('error');
                err = 1;
            }
			if (wpl == "1") {
                $('#hplace').addClass('error');
                err = 1;
            }
            if (wcity == "") { 
                $('#hcity').addClass('error');
                err = 1;
            }
			if (wyear == "") { 
                $('#hyear').addClass('error');
                err = 1;
            }
            if (err == 0) {
                $.ajax({
                    type: "POST",
                    url: "php/registerHospitality.php",
                    data: "hname=" + wn + "&hphone=" + wp + "&hmail=" + wm + "&hplace=" + wpl + "&hcity=" + wcity + "&hyear=" + wyear,
					success: function(msg) {
						if (msg == "Success") {
							$('.success-form').show();
                            $('.workshop-form').hide();
                        } else {
							$('.error-form').show();
                        }
                    }
                });
            }
            return false;
        });


        $('.register_button_intern').click(function() {
            $('.ifform').find('input[type=text]').val('');
            $('.ifform').find('input[type=email]').val('');
            $('.if-form').show();
        });


        $('#registerInternsFair').click(function(e) {
			var iin = $('#iname').val();
			var iip = $('#iphone').val();
			var iim = $('#iemail').val();
			var iipl = $('#iplace').val();
			var iicity = $('#icity').val();
			var iiyear = $('#iyear').val() + $('#idepartment').val();
            err = 0;
			
            if (iin == "") {
                $('#iname').addClass('error');
                err = 1;
            }
			if (iip == "") {
                $('#iphone').addClass('error');
                err = 1;
            }
            if (iim == "") {
                $('#iemail').addClass('error');
                err = 1;
            }
			if (iipl == "1") {
                $('#iplace').addClass('error');
                err = 1;
            }
            if (iicity == "") { 
                $('#icity').addClass('error');
                err = 1;
            }
			if (iiyear == "") { 
                $('#iyear').addClass('error');
                err = 1;
            }
            if (err == 0) {
                $.ajax({
                    type: "POST",
                    url: "php/registerInternsFair.php",
                    data: "iname=" + iin + "&iphone=" + iip + "&iemail=" + iim + "&iplace=" + iipl + "&icity=" + iicity + "&iyear=" + iiyear,
					success: function(msg) {
						if (msg == "Success") {
							$('.success-form').show();
                            $('.workshop-form').hide();
                        } else {
							$('.error-form').show();
                        }
                    }
                });
            }
            return false;
        });

        function closeMessage(){
            $('.workshop-form').hide();
            $('.event-form').hide();
            $('.success-form').hide();
            $('.error-form').hide();
            $('.if-form').hide();
        }

        $('#overlay-workshop').click(function() {
            closeMessage();
        });