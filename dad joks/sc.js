const jokeEl=document.getElementById("joke")
// const gene=()=>
// {
//     const config={
//         headers:{
//                 Accept:"text/plain"
//         }
//     }
//     fetch("https://icanhazdadjoke.com/",config)
//     .then(resp=>resp.text())
//     .then(data=>{
//         jokeEl.innerHTML=data;
//     })
// }
// by async await
async function gene()
{
    const config=
    {
        headers:
        {
            Accept:"text/plain"
        }
    }
    const res=await fetch("https://icanhazdadjoke.com",config);
    const data=await res.text()
    jokeEl.innerHTML=data+"😂";
}
// gene()
const btn=document.getElementById("btn").addEventListener("click",gene)

