$(document).ready(function() {
    var selectedActivities = [];
    var $modalList = $('#modalActivityList');
    var $result = $('#result');

    $('#activities table tbody tr').each(function() {
        $(this).find('td').not(':first').each(function() {
            var cellText = $(this).text().trim();

            if (cellText === 'Not Available') {
                $(this).addClass('activity-cell not-available');
            } else {
                $(this).addClass('activity-cell selectable');
            }
        });
    });

    function updateSelectedList() {
        if (selectedActivities.length === 0) {
            $result.html('<h4>My selected activities to enquire:</h4>');
            $modalList.text('No activity selected.');
            return;
        }

        var listHtml = selectedActivities.map(function(item) {
            return '<p>' + item + '</p>';
        }).join('');

        $result.html('<h4>My selected activities to enquire:</h4>' + listHtml);
        $modalList.html('<ul class="mb-0">' + selectedActivities.map(function(item) {
            return '<li>' + item + '</li>';
        }).join('') + '</ul>');
    }

    $('.activity-cell.selectable').on('click', function() {
        var activity = $(this).closest('tr').find('td:first').text().trim();
        var cliffName = $('#activities table thead th').eq($(this).index()).text().trim();
        var itemText = activity + ' - ' + cliffName;
        var itemIndex = selectedActivities.indexOf(itemText);

        if ($(this).hasClass('selected')) {
            selectedActivities.splice(itemIndex, 1);
            $(this).removeClass('selected');
        } else {
            selectedActivities.push(itemText);
            $(this).addClass('selected');
        }

        updateSelectedList();
    });

    $('#sendinfo button').on('click', function() {
        if (selectedActivities.length === 0) {
            $modalList.text('Please select at least one activity from the table.');
            $('#activityModal').modal('show');
            return;
        }

        updateSelectedList();
        $('#activityModal').modal('show');
    });
});
