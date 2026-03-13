let ativo=false
let alertado=false

const params=new URLSearchParams(window.location.search)
const id=params.get("id")

function ativar(){

ativo=true

}

function alerta(){

document.body.classList.add("alerta")

document.getElementById("status").innerText=
"🚨 PACIENTE LIBERADO - Vá até a recepção"

document.getElementById("som").play()

setInterval(()=>{

navigator.vibrate([600,300,600])

},2000)

}

async function verificar(){

let res=await fetch(
SUPABASE_URL+
"/rest/v1/pacientes?id=eq."+id,
{
headers:{
"apikey":SUPABASE_KEY,
"Authorization":"Bearer "+SUPABASE_KEY
}
})

let dados=await res.json()

if(!dados.length) return

let paciente=dados[0]

document.getElementById("paciente").innerText=paciente.paciente

document.getElementById("status").innerText=paciente.status

if(paciente.status==="LIBERADO" && !alertado && ativo){

alertado=true

alerta()

}

}

setInterval(verificar,4000)