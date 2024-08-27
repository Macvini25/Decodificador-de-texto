function criptografar() {
    let texto = document.getElementById("inputTexto").value
    let textoCriptografado = texto
                    .replace(/e/g, "enter")
                    .replace(/i/g, "imes")
                    .replace(/a/g, "ai")
                    .replace(/o/g, "ober")
                    .replace(/u/g, "ufat");
    document.getElementById("outputTexto").value = textoCriptografado;               
    }
    
    function descriptografar() {
        let texto = document.getElementById("inputTexto").value
        let textoDescriptografado = texto
                     .replace(/enter/g, "e")
                     .replace(/imes/g, "i")
                     .replace(/ai/g, "a")
                     .replace(/ober/g, "o")
                     .replace(/ufat/g, "u");
        document.getElementById("outputTexto").value = textoDescriptografado;               
        }