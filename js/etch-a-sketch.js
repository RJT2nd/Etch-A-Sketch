var $square = $('.square');
var $grid = $('.grid');

$(document).ready(function() {

    for(var rowNumber = 0; rowNumber<16; rowNumber++){

        var row = '<div>';

        for(var colNumber=0; colNumber<16; colNumber++){
            row += '<div class="square"></div>';
        }

        row += '</div>';
        
        $grid.append(row);
    }

    pen();
});

function clearClicked() {
    
    $('.square').removeClass('blue');
    $('.grid').empty();
    
    var gridDimensions = prompt("Enter the new width/height:", "16");
    if(gridDimensions != null){
        for(var rowNumber = 0; rowNumber<gridDimensions; rowNumber++){

            var row = '<div>';

            for(var colNumber=0; colNumber<gridDimensions; colNumber++){
                row += '<div class="square"></div>';
            }

            row += '</div>';
            
            $grid.append(row);
        }
    }
    var squareDimensions = 960.0/gridDimensions;
    $('.square').css({'width': (squareDimensions+'px'), 'height': (squareDimensions+'px')});

    pen();
}

function pen() {
    $('.square').hover(function() {
        $(this).addClass('blue');
    });
}