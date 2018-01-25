$(function(){

    $("#add_role_button").click(function(){
        //$("#loading").show();
        var host_id = $("#host_id").val();
        var username = $("#username").val();
        var role = $("#role").val();
        var days = $("#days").val();
        console.log(host_id)
        $.post("/relay/addrole", {host_id:host_id,username:username,role:role,days:days},
            function(data){
                if ( data.success == "true" ){
                    window.location.href="/relay/host"; 
                }else{
                    alert(data.message)
                }
            },
            "json"
        );
    })
});