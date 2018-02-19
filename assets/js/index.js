$(document).ready(function() { 
    
    



 //check off todos by clicking
    $("ul").on("click","li", function(){
       $(this).toggleClass("completed") 
    }); 
 // click on x to delete todo
    $("ul").on("click","span", function(e){
        $(this).parent().fadeOut(500,function(){
            $(this).remove();
        });
        event.stopPropagation();
    });
 // new todo
    $("input[type='text']").on("keypress", function(e){
        if(event.which === 13){
          var todoText = $(this).val();
          $(this).val("")
          // create new li
          $("ul").append( '<li><span><i class="fa fa-trash"></i></span> '+ todoText +'</li>')
          
        }
       
    });    

    $(".fa-plus").click(function(){
        $("input[type='text'").fadeToggle();

    });
        










 });



