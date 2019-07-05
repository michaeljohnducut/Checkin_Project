// ============================================================JUST SOME JQUERY STUFF
// PROVIDES DATA FOR BOOKING INFO

var check_key = false;

$('.instruct_box').mouseover(function () {
    let element_id = $(this).attr('id');
    let div_id = '';
    switch (element_id) {
        case 'luggage_div':
            $('#baggage_hidden').prop('hidden', false);
            break;
        case 'security_div':
            $('#security_hidden').prop('hidden', false); 
            break;
        case 'gate_div':
            $('#gate_hidden').prop('hidden', false);
            break;
        default:
            $('#depart_hidden').prop('hidden', false);
    }
});

$('.instruct_box').mouseleave(function () {
    let element_id = $(this).attr('id');
    let div_id = '';
    switch (element_id) {
        case 'luggage_div':
            $('#baggage_hidden').prop('hidden', true);
            break;
        case 'security_div':
            $('#security_hidden').prop('hidden', true);
            break;
        case 'gate_div':
            $('#gate_hidden').prop('hidden', true);
            break;
        default:
            $('#depart_hidden').prop('hidden', true);
    }
});

$('#btn_confirm_check').click(function () {
    check_key = true;
    localStorage.setItem('local_key', check_key);
    $('#btn_cancel').trigger('click');
    $('#confirmed_check_div').prop('hidden', false);
    $('#flight_info_div').prop('hidden', true);
});

$('.flight_banner').click(function () {
    var is_checked = localStorage.getItem('local_key');
    let banner_id = $(this).attr('id');
    switch (banner_id) {

        case 'flight_1':

            if (is_checked) {
                $('#confirmed_check_div').prop('hidden', false);
                $('#flight_info_div').prop('hidden', true);
            }

            else {
                $('#confirmed_check_div').prop('hidden', true);
                $('#flight_info_div').prop('hidden', false);
                insertDetails('WILLIAMS / HAILEY', 'SEQ042', 'JULY 20, 2019',
                    'HOUSTON', 'MNL', '05:30AM', 'HOU', '07:40PM', 'PR023',
                    '12H 45M');
                $('#btn_checkin').css({ 'background-color': '#013f7e', 'box-shadow': '5px 8px 8px rgba(33, 64, 154, 0.3)' });
                $('#btn_checkin').prop('disabled', false);
                $('#btn_checkin').text('Check-in');
                $('#btn_checkin').prop('hidden', false);
            }
            break;

        case 'flight_2': insertDetails('WILLIAMS / HAILEY', 'SRW348', 'JULY 28, 2019',
            'LOS ANGELES', 'HOU', '05:30AM', 'LAX', '07:40PM', 'TS384',
            '3H 45M');
            $('#confirmed_check_div').prop('hidden', true);
            $('#flight_info_div').prop('hidden', false);
            $('#btn_checkin').css({ 'background-color': '#9A2125', 'box-shadow': '5px 8px 8px rgba(154, 33, 37, 0.3)' });
            $('#btn_checkin').prop('disabled', true);
            $('#btn_checkin').text('Available in 8d 5h');
            $('#btn_checkin').prop('hidden', false);
            break;

        case 'flight_3': insertDetails('WILLIAMS / HAILEY', 'SRE348', 'JULY 30, 2019',
            'MILWAUKEE', 'LAX', '05:30AM', 'MIL', '07:40PM', 'JG311',
            '2H 45M');
            $('#confirmed_check_div').prop('hidden', true);
            $('#flight_info_div').prop('hidden', false);
            $('#btn_checkin').css({ 'background-color': '#9A2125', 'box-shadow': '5px 8px 8px rgba(154, 33, 37, 0.3)' });
            $('#btn_checkin').prop('disabled', true);
            $('#btn_checkin').text('Available in 10d 8h');
            $('#btn_checkin').prop('hidden', false);
            break;

        default: insertDetails('QUINN / KELLIN, GASKARTH / ALEX, WILLIAMS / HAYLEY', 'STK348', 'SEPT 11, 2019',
            'HOUSTON', 'MIL', '05:30AM', 'MIL', '07:40PM', 'SF230',
            '4H 15M');
            $('#confirmed_check_div').prop('hidden', true);
            $('#flight_info_div').prop('hidden', false);
            $('#btn_checkin').css({ 'background-color': '#9A2125', 'box-shadow': '5px 8px 8px rgba(154, 33, 37, 0.3)' });
            $('#btn_checkin').prop('disabled', true);
            $('#btn_checkin').text('Available in 21d 9h');
            $('#btn_checkin').prop('hidden', false);
    }
});

//============================================================FUNCTIONS

// REPLACES FLIGHT DETAILS DIV
function insertDetails(passenger, ticket, date, destination, depart_code, depart_time,
    arrive_code, arrive_time, flight, travel_time) {
    $('#info_passenger').fadeIn(500).text(passenger);
    $('#info_ticket').fadeIn(500).text(ticket);
    $('#info_date').fadeIn(500).text(date);
    $('#info_destination').fadeIn(500).text(destination);
    $('#info_depart_code').fadeIn(500).text(depart_code);
    $('#info_depart_date').fadeIn(500).text(depart_time);
    $('#info_arrive_code').fadeIn(500).text(arrive_code);
    $('#info_arrive_time').fadeIn(500).text(arrive_time);
    $('#info_flight').fadeIn(500).text(flight);
    $('#info_travel_time').fadeIn(500).text(travel_time);
}

//HOME JQUERY

$('#btn_allBookings').click(function () {
    window.location = 'all_bookings.html'
});

$('#btn_bagRestict').click(function () {
    window.location = 'bag_restrictions.html'
});

$('#btn_logoutYes').click(function () {
    window.location = 'index.html'
});

//ALL_BOOKINGS JQUERY
$('#btn_boardingPass').click(function () {
    window.location = 'boarding_pass.html'
});

$('#btn_boardInstruct').click(function () {
    window.location = 'boarding_instructions.html'
});

$('#btn_bagRestrict').click(function () {
    window.location = 'bag_restrictions.html'
});

//BOARDING PASS JQUERY
$('#btn_backBooking').click(function () {
    window.location = 'all_bookings.html'
});