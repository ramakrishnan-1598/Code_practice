document.addEventListener("DOMContentLoaded",function(){

    const checkbox=document.getElementById("check");
    const container=document.querySelector(".container");
    const button=document.querySelector(".btn");
    const isun=document.querySelector(".sun");
    const imoon=document.querySelector(".moon");
  
  
    checkbox.addEventListener("change", function(){

    if(this.checked){
        container.style.backgroundImage ="url(https://img.freepik.com/premium-vector/night-view-landscape-design-nature-scene-flat-design-background-template-vector-illustration_722818-419.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1700265600&semt=ais)";
        container.style.transition="0.6s";
        isun.style.display="none";
        imoon.style.display="block";
        
        
    }
    else{
        container.style.backgroundImage = "url(https://img.freepik.com/premium-vector/hills-meadow-landscape-sunny-day_2963-31.jpg?size=626&ext=jpg&ga=GA1.1.1448711260.1706745600&semt=ai)";
        container.style.transition="0.6s"
        isun.style.display="block";
        imoon.style.display="none";
    }

    });
});