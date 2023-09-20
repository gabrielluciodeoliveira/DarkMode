function mudarTema()
{
    document.body.classList.toggle("escuro");
      
}
const iconElement = document.querySelector(".material-icons");

if (document.body.classList.contains("escuro")) 
{
    iconElement.textContent = "dark_mode";
}

else 
{
    iconElement.textContent = "sunny";
}