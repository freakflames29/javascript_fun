document.getElementById("btn").addEventListener("click",cal);

function cal()
{
    fetch('data.txt')
    .then(res=>res.text())
    .then(data=>console.log(data));
}
