const api_url = "https://random-data-api.com/api/v2/users"

function pegarDados() {
    
    axios.get(api_url)
        .then(response => {
            const usuario = response.data

            const avatarElemento = document.getElementById("fotoPerfil")
            avatarElemento.setAttribute("src", usuario.avatar)

            document.getElementById("nomePerfil").innerHTML = usuario.first_name;
            document.getElementById("sexoPerfil").innerHTML = usuario.gender;
            document.getElementById("userPerfil").innerHTML = '@' + usuario.username;
            document.getElementById("emailPerfil").innerHTML = usuario.email;
            document.getElementById("cargoPerfil").innerHTML = usuario.employment.title;
            document.getElementById("setorPerfil").innerHTML = usuario.employment.key_skill;
            
            document.getElementById("ruaPerfil").innerHTML = usuario.address.street_name;
            document.getElementById("ruanumeroPerfil").innerHTML = usuario.address.street_address;
            document.getElementById("cidadePerfil").innerHTML = usuario.address.city;
            document.getElementById("estadoPerfil").innerHTML = usuario.address.state;
            document.getElementById("paisPerfil").innerHTML = usuario.address.street_address.country;

            document.getElementById("nomePlano").innerHTML = usuario.subscription.plan;
            document.getElementById("statusPlano").innerHTML = usuario.subscription.status;
            document.getElementById("pagamentoPlano").innerHTML = usuario.subscription.payment_method;
            document.getElementById("recorrenciaPlano").innerHTML = usuario.subscription.term;

            document.getElementById("numeroCartao").innerHTML = usuario.credit_card.cc_number;












        })
        .cath(error => {
            console.log("Aconteceu algo de errado: ", error)
        })
}

pegarDados();