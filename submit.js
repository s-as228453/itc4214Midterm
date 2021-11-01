function AddData() {
  var rows = "";
  var name = document.getElementById("surname").value;
  var num = document.getElementById("grade").value;
  rows += "<tr><td>" + name + "</td><td>" + num + "</td><td><a href='javascript:void(0);' class='remCF1 btn btn-small btn-danger'>Delete</a></td></tr>";
  $(rows).appendTo("#table tbody");

  $(document).on('click','.remCF1',function(){
      $(this).parent().parent().remove();
      $('#myTable tbody tr').each(function(i){            
        $($(this).find('td')[0]).html(i+1);          
      });
  });
  return false;
}