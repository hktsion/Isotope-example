jQuery(document).ready(function($) {
	
	let $grid = $('#listado-productos').isotope({
		itemSelector: '.producto',
		layoutMode: 'fitRows',
		getSortData: { number: '.number parseInt' }
	});


	$( "#colchon-sort-selection" ).change(() => {
		var str = "";
		$( "select option:selected" ).each(function() {
			str += $( this ).text() + " ";
			console.log(str);

			if(str.trim() == "Precio ascendente"){
				var sortValue = $(this).attr('data-sort-value');
				sortValue = sortValue.split(',');
				$grid.isotope({ 
					sortBy: sortValue,
					sortAscending: true
				});
			}

			if(str.trim() == "Precio descendente"){
				var sortValue = $(this).attr('data-sort-value');
				sortValue = sortValue.split(',');
				$grid.isotope({ 
					sortBy: sortValue,
					sortAscending: false
				});
			}
		});
	}).change();
});