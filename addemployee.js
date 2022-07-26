// table data edit function

function edit_row(no)
{
    
 document.getElementById("edit_button"+no);
 document.getElementById("save_button"+no);
 
var id=document.getElementById('userid'+no)
var name=document.getElementById("name_row"+no);
 var Desgnation=document.getElementById("Desgnation_row"+no);
 var date=document.getElementById("date_row"+no);
	
 var user_id=id.innerHTML;
 var name_data=name.innerHTML;
 var Desgnation_data=Desgnation.innerHTML;
 var date_data=date.innerHTML;
	
 id.innerHTML="<input type='text' id='userid"+no+"' value='"+user_id+"'>";

 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 Desgnation.innerHTML="<input type='text' id='Desgnation_text"+no+"' value='"+Desgnation_data+"'>";
 date.innerHTML="<input type='date' id='date_text"+no+"' value='"+date_data+"'>";
}



function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var Desgnation_val=document.getElementById("Desgnation_text"+no).value;
 var date_val=document.getElementById("date_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("Desgnation_row"+no).innerHTML=Desgnation_val;
 document.getElementById("date_row"+no).innerHTML=date_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}




function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}







function add_row()
{
 var new_id=document.getElementById("new_id").value;

 var new_na=document.getElementById("new_na").value;
 var new_des=document.getElementById("new_des").value;
 var new_da=document.getElementById("new_da").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><th id='id"+table_len+"'>"+new_id+" </th><td id='name_row"+table_len+"'>"+new_na+"</td><td id='des_row"+table_len+"'>"+new_des+"</td><td id='date_row"+table_len+"'>"+new_da+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='btn btn-info' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='btn btn-primary' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='btn btn-danger' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_na").value="";
 document.getElementById("new_des").value="";
 document.getElementById("new_da").value="";
}


