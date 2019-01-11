// When size is submitted by the user, call makeGrid()
	$("#sizePicker").submit(function(e){
	e.preventDefault();
    // Select size input
	let h = $("#inputHeight").val();
	let w = $("#inputWeight").val();

	makeGrid(h,w) ;

	})
//makeGrid function to make cells based on height*width
	function makeGrid(h,w) {
    // Your code goes here!
	    var grid = $('#pixelCanvas');
	    grid.children().remove();

	    for (i = 0; i < h; i++)
	    {
	    var row = '<div>';
	      for (j = 0; j < w; j++){
	        row += '<div class="square">' + '</div>';
	      }
	    row += '</div>';
	    grid.append(row);
	    }
	}
//Filling picked color into selected cells
	$("#pixelCanvas").on('click','.square',function(e){
	    e.preventDefault();
	    // Select color input
	    const color = $("#colorPicker").val();
	    $(this).css("background-color",color);
	})
