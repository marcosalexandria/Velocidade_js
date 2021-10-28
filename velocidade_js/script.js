function velocidade(){
    let vel = [Number(document.getElementById("velp").value), Number(document.getElementById("velc").value)]
    let res = document.getElementById("res")

    if(vel[0] == "" || vel[0] == isNaN(vel[0]) || vel[1] == "" || vel[1] == isNaN(vel[1])){
        alert("Preencha os campos corretamente")
    }else if(vel[1] <= vel[0]){
        res.innerHTML = `<strong>Sem Multa.</strong> Dirija sempre usando cinto de segurança.`
        res.style.color = 'green'
    }else if(vel[1] > vel[0] && vel[1] <= vel[0] * 20 / 100 + vel[0]){
        res.innerHTML = `<strong>Multa Leve.</strong> Diminua a velocidade.`
        res.style.color = 'orange'
    } else{
        res.innerHTML = `<strong>Multa Grave.</strong> Diminua imediatamente a velocidade.`
        res.style.color = 'red'
    }
}
document.getElementById("velocidade").addEventListener("click", velocidade)