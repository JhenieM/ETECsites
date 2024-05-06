function restart(){
    document.addEventListener('click', () => {
        location.reload()
    })
}

// $(document).ready(function () {
//     $("a").click(function (){
//         if($(this).hasClass("box-pesquisa")) {
//             $(".pesquisa:visible").slideUp();
//             $($(this).attr("href")).slideDown();
//             return false;
//         }
//         var myelement = $(this).attr("href");
//         $(myelement).slidePesquisa("fast");
//         $(".pesquisa:visible").not(myelement).slideUp();
//     });
// });

function TrocaDivs() {
    $('#flutter').css("display", "grid");
    $('#nodeJS').css("display", "grid");
    $('#console').css("display", "grid");
}