function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";

 var student=document.getElementById("student_row"+no);
 var id=document.getElementById("id_row"+no);
 var course=document.getElementById("course_row"+no);
 var supervisor=document.getElementById("supervisor_row"+no);
 var schedule=document.getElementById("schedule_row"+no);
 var project=document.getElementById("project_row"+no);

 var student_data=student.innerHTML;
 var id_data=id.innerHTML;
 var course_data=course.innerHTML;
 var supervisor_data=supervisor.innerHTML;
 var schedule_data=schedule.innerHTML;
 var project_data=project.innerHTML;

 student.innerHTML="<input type='text' id='student_text"+no+"' value='"+student_data+"'>";
 id.innerHTML="<input type='text' id='id_text"+no+"' value='"+id_data+"'>";
 course.innerHTML="<input type='text' id='course_text"+no+"' value='"+course_data+"'>";
 supervisor.innerHTML="<input type='text' id='supervisor_text"+no+"' value='"+supervisor_data+"'>";
 schedule.innerHTML="<input type='text' id='schedule_text"+no+"' value='"+schedule_data+"'>";
 project.innerHTML="<input type='text' id='project_text"+no+"' value='"+project_data+"'>";
}

function save_row(no)
{
 var student_val=document.getElementById("student_text"+no).value;
 var id_val=document.getElementById("id_text"+no).value;
 var course_val=document.getElementById("course_text"+no).value;
 var supervisor_val=document.getElementById("supervisor_text"+no).value;
 var schedule_val=document.getElementById("schedule_text"+no).value;
 var project_val=document.getElementById("project_text"+no).value;

 document.getElementById("student_row"+no).innerHTML=student_val;
 document.getElementById("id_row"+no).innerHTML=id_val;
 document.getElementById("course_row"+no).innerHTML=course_val;
 document.getElementById("supervisor_row"+no).innerHTML=supervisor_val;
 document.getElementById("schedule_row"+no).innerHTML=schedule_val;
 document.getElementById("project_row"+no).innerHTML=project_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_student=document.getElementById("new_student").value;
 var new_id=document.getElementById("new_id").value;
 var new_course=document.getElementById("new_course").value;
 var new_supervisor=document.getElementById("new_supervisor").value;
 var new_schedule=document.getElementById("new_schedule").value;
 var new_project=document.getElementById("new_project").value;

 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='student_row"+table_len+"'>"+new_student+"</td><td id='id_row"+table_len+"'>"+new_id+"</td><td id= 'course_row"+table_len+"'>"+new_course+"</td><td id='supervisor_row"+table_len+"'>"+new_supervisor+"</td><td id='schedule_row"+table_len+"'>"+new_schedule+"</td><td id='project_row"+table_len+"'>"+new_project+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'><input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'><input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";
 document.getElementById("new_student").value="";
 document.getElementById("new_id").value="";
 document.getElementById("new_course").value="";
 document.getElementById("new_schedule").value="";
 document.getElementById("new_supervisor").value="";
 document.getElementById("new_project").value="";
}
