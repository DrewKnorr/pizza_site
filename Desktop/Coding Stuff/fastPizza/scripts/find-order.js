
function get_form(){

    let temp_fName = document.getElementById("first_name");
    let temp_lName = document.getElementById("last_name");
    let temp_email = document.getElementById("email");
    let temp_conf = document.getElementById("confimation");

    temp_fName = temp_fName.value;
    temp_lName = temp_lName.value;
    temp_email = temp_email.value;
    temp_conf = temp_conf.value;

    console.log(temp_fName,temp_lName,temp_email,temp_conf)

    post_return(temp_fName,temp_lName,temp_email,temp_conf);
}


function post_return(temp_fName,temp_lName,temp_email,temp_conf){
    let temp_cont = document.querySelector(".order-found");
    alert(`Order:\n Name: ${temp_fName} ${temp_lName}\n Email Adress: ${temp_email}\n Is on its way!\n Confermation Number: ${temp_conf}`)
}
