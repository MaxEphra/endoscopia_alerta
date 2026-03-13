async function carregar(){

    let res=await fetch(
    SUPABASE_URL+"/rest/v1/pacientes",
    {
    headers:{
    "apikey":SUPABASE_KEY,
    "Authorization":"Bearer "+SUPABASE_KEY
    }
    })
    
    let dados=await res.json()
    
    let html=""
    
    dados.forEach(p=>{
    
    html+=`
    <div class="paciente">
    <b>${p.paciente}</b>
    <br>
    Status: ${p.status}
    </div>
    `
    
    })
    
    document.getElementById("lista").innerHTML=html
    
    }
    
    setInterval(carregar,5000)