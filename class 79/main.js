student_array=[];

function submit()
{
    var display_array=[];
    for(var j=1; j<=4; j++)
    {
        var name1=document.getElementById("student"+j).value;
        console.log(name1);
        student_array.push(name1);
    }
    console.log(student_array);
 var lenght_array=student_array.length;
 for (var k = 0; k < lenght_array; k++)
 { 
     display_array.push("<h4>NAME - "+ student_array[k] + "</h4>");
      console.log(display_array);
     }
      console.log(display_array);
       document.getElementById("display_name_with_commas").innerHTML = display_array; 
       var remove_commas = display__array.join(" ");
        console.log(remove_commas);
         document.getElementById("display_name_without_commas").innerHTML = remove_commas;
   

    
document.getElementById("submit_button").style.display="none";
document.getElementById("sorting_button").style.display="inline-block"


}
function sorting()
{
    student_array.sort();
    console.log(student_array);
    var display_student_array_sorting = [];
     var lenght_of_name_of_students_array = name_of_the_student_array.length;
      console.log(lenght_of_name_of_students_array);
       for (var k = 0; k < lenght_of_name_of_students_array; k++) 
       {
            display_student_array_sorting.push("<h4>NAME - " + student_array[k] + "</h4>");
             console.log(display_student_array_sorting);
             } 
             var remove_commas = display_student_array_sorting.join(" "); 
             console.log(remove_commas);
              document.getElementById("display_name_without_commas").innerHTML = remove_commas;

}
