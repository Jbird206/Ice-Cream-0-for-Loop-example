$(document).ready(function(){
   $("button#click").click(function(event) {
       event.preventDefault();
        
        
        var flavors = ['chocolate', 'strawberry', 'coffee', 'vanilla']
        for (var index = 0; index < flavors.length; index += 1) {
            //alert('I love ' + flavors[index] + '!');
            $(".text").append("<li>" + flavors[index] + ' ' + "</li>")
        }

    //    flavors.forEach(function(flavor){
    //         $("#" + flavor).append(flavor)
    //         $("#" + flavor).append("Tim")

    //        $(".text").append(flavor)
    //        $(".text").append(" ")

    //        $("#result").append("<li>" + flavors + "</li>") 
           
        });
    
});  