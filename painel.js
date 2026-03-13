function gerarID(){

    return crypto.randomUUID().slice(0,8)
    
    }
    
    async function criar(){
    
    let nome=document.getElementById("nome").value
    
    let id=gerarID()
    
    await fetch(
    SUPABASE_URL+"/rest/v1/pacientes",
    {
    method:"POST",
    headers:{
    "apikey":SUPABASE_KEY,
    "Authorization":"Bearer "+SUPABASE_KEY,
    "Content-Type":"application/json"
    },
    body:JSON.stringify({
    id:id,
    paciente:nome,
    status:"PREPARO"
    })
    })
    
    document.getElementById("idpaciente").value=id
    
    let base="https://maxephra.github.io/endoscopia_alerta/"
    
    let link=base+"?id="+id
    
    document.getElementById("link").innerHTML=
    "<br>Link acompanhante:<br>"+link
    
    new QRCode(
    document.getElementById("qr"),
    link
    )
    
    }
    
    async function setStatus(status){
    
    let id=document.getElementById("idpaciente").value
    
    await fetch(
    SUPABASE_URL+
    "/rest/v1/pacientes?id=eq."+id,
    {
    method:"PATCH",
    headers:{
    "apikey":SUPABASE_KEY,
    "Authorization":"Bearer "+SUPABASE_KEY,
    "Content-Type":"application/json"
    },
    body:JSON.stringify({
    status:status
    })
    })
    
    alert("Status atualizado")
    
    }