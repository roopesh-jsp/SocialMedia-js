"using strict";

var arr=[
    {
        logo:"https://images.unsplash.com/photo-1595882410987-ece12feabef2?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1600984575359-310ae7b6bdf2?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        
    },
    {
        logo:"https://images.unsplash.com/photo-1603813425271-6ed9a5720f86?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVwb2xlfGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1633433342568-8d98ca5c8e82?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        logo:"https://images.unsplash.com/photo-1608876537010-ac56d8731614?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D"
        ,story:"https://images.unsplash.com/photo-1583415303571-20185869c4bc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        logo:"https://images.unsplash.com/photo-1632852898671-172d93b46b61?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1630945386735-372fbe731e3f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        logo:"https://images.unsplash.com/photo-1595882410987-ece12feabef2?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1600984575359-310ae7b6bdf2?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        
    },
    {
        logo:"https://images.unsplash.com/photo-1603813425271-6ed9a5720f86?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVwb2xlfGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1633433342568-8d98ca5c8e82?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        logo:"https://images.unsplash.com/photo-1608876537010-ac56d8731614?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D"
        ,story:"https://images.unsplash.com/photo-1583415303571-20185869c4bc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        logo:"https://images.unsplash.com/photo-1632852898671-172d93b46b61?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1630945386735-372fbe731e3f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        logo:"https://images.unsplash.com/photo-1595882410987-ece12feabef2?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1600984575359-310ae7b6bdf2?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        
    },
    {
        logo:"https://images.unsplash.com/photo-1603813425271-6ed9a5720f86?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVwb2xlfGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1633433342568-8d98ca5c8e82?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        logo:"https://images.unsplash.com/photo-1608876537010-ac56d8731614?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D"
        ,story:"https://images.unsplash.com/photo-1583415303571-20185869c4bc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        logo:"https://images.unsplash.com/photo-1632852898671-172d93b46b61?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1630945386735-372fbe731e3f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D"
    },

]

var stories='';

arr.forEach(function(elem,idx){
    stories +=` <div class="story">
    <img id=${idx} src=${elem.logo} alt="">
</div>`
});
const storiesContainer=document.querySelector(".stories");


storiesContainer.innerHTML=stories;
storiesContainer.addEventListener("click",function(dets){
    console.log(arr[dets.target.id].story);
});