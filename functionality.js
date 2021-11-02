$( document ).ready(function() {
  console.log( "Ready!" );

  // function to add user input as a new table row - called by button
  $("#add_btn").click(function(){
    var surname = $('#surname').val();
    var grade = $('#grade').val();
    var delete_btn = '<button id="delete_btn" type="button" class="btn btn-primary btn-lg">Delete</button>';
  
    var row = "<tr><td>" + surname + "</td><td>" + grade + "</td><td>" + delete_btn + "</td></tr>";
    $('tbody').append(row);

    return false;
  
  });

  // function to delete a dynamically added row - called by button
  $("#grades_table").on("click", "#delete_btn", function(){

    $(this).closest("tr").remove();

  });
});



