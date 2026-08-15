$(document).ready(function() {
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

    $('.activity-cell.selectable').on('click', function() {
        $(this).toggleClass('selected');
    });

    $("td").click(function () { //user select a table data cell
        var content = $(this).text(); //get content of cell
        var cliffName = $('#activities table thead th').eq($(this).index()).text(); //get the matching cliff site name
        var displayText = content + ' - ' + cliffName; //combine activity and cliff site
        
        if (content != "Not Available") { //check if content does not contain a particular string
            $(this).toggleClass("tdhighlight"); //add or remove class when cell is selected
            
            if ($(this).hasClass("tdhighlight")) { //check if selected cell has class
                $('#displaySelected').css("visibility", "visible"); //make display box visible
                $('#displaySelected').css("margin-top", "2em"); //add spaces above display box
                $('#result').append("<p>"+displayText+"</p>"); //add child element with contents of cell
            } else { //if selected cell don't have class
                $('#result p:contains('+displayText+')').remove(); //remove child element
                
                if ($('#result').has('p').length == false) { //check if there are any child elements within parent
                    $('#displaySelected').css("visibility", "hidden"); //make display box hidden
                    $('#displaySelected').css("margin-top", "0"); //remove spaces above display box
                }
            }
        }
    });
});
