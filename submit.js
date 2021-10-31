function AddData() {
    var rows = "";
    var surname = document.getElementById("surname").value;
    var grade = document.getElementById("grade").value;
    rows += "<tr><td>" + surname + "</td><td>" + grade + "</td></tr> ";
    $(rows).appendTo("#table tbody");
    return false;
  }