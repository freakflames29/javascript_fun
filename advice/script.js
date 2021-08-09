const advice=document.getElementById("adv");
const no=document.getElementById("advno");
const btn=document.getElementById("btn").addEventListener("click",show);

function show ()	
{
	fetch("https://evilinsult.com/generate_insult.php")
	.then(res=>res.text())
	.then(data=>console.log(data)); 
}