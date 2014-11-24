$(document).ready(function(){
	$('#drag-1').draggable({
		containment:'#drop'
	});
	$('#drag-2').draggable({
		containment:'#drop'
	});
	$('#drag-3').draggable({
		containment:'#drop'
	});
	$('#drop').droppable({
		drop:function(){

		}
	});
});