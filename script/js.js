$(document).ready(function(){
    console.log('test');
    $('#newslinks a').click(function(){
let url=$(this).attr('href');
$('#headlines').load(url + '#newsItem');
return false;
    });
});
