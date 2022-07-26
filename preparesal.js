function add_row()
{
 var new_id=document.getElementById("new_id").value;

 var new_fname=document.getElementById("new_fname").value;
 var new_lname=document.getElementById("new_lname").value;
 var new_wage=document.getElementById("new_wage").value;
 var new_worked=document.getElementById("new_worked").value;
 var new_salary=document.getElementById("new_salary").value;


	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><th id='id"+table_len+"'>"+new_id+" </th><td id='name_row"+table_len+"'>"+new_fname+"</td><td id='des_row"+table_len+"'>"+new_lname+"</td><td id='date_row"+table_len+"'>"+new_wage+"</td><td id='worked_row"+table_len+"'>"+new_worked+"</td><td id='salary_row"+table_len+"'>"+new_salary+"</td> </tr>";

 document.getElementById("new_fname").value="";
 document.getElementById("new_lname").value="";
 document.getElementById("new_wage").value="";
}