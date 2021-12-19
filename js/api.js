const urlAPI = 'https://script.google.com/macros/s/AKfycbwX8npUemyabFY80A4al7iAGyC9JZ1adAqbkkRnaXf3Ydus4ABoWD6LjD0ugPUC9fhp/exec'

async function doGet(name = 'guilherme', lastname = 'Carvalho', cellphone = "") {
    const url = `${urlAPI}&name=${name}&lastName=${lastname}&cellphone=${cellphone}`
    await fetch(url)
    .then( response => response.json())
    .then( data => console.log(data) )

}