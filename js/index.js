
function backgroundAni(){
    document.addEventListener('mousemove', function(event){
        let x = event.client ;
        be.style.transform = 'translate('+x+'px,'+y+'px)';
        console.log(event.clientX + ", " + event.clientY);        
    });
}
