function toggleHum(){
    var e = document.getElementById("menu");
    if(e){
        e.addEventListener('click', function(){
            var t = document.getElementById("menu");
            t.classList.toggle('non-active');
            t.classList.toggle('active');
        });
    }
}

function classToggler(id0, id1, event){
    var e = document.getElementById(id0);
    if(e){
        e.addEventListener(event, function(){
            var t = document.getElementById(id1);
            t.classList.toggle('non-active');
            t.classList.toggle('active');
        });
    }    
}
