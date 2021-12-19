const urlAPI = 'https://script.google.com/macros/s/AKfycbzzYOwl5suyEM3eQ4n86HL5bdmrxNwQl7UzVVgXBBJTppG9tGVYW-2h4BAHMmxjwKBI/exec'
const myModalInput = new bootstrap.Modal(document.getElementById("modalInput"), {});
const myModalConfirm = new bootstrap.Modal(document.getElementById("modalConfirm"), {});

async function doGet() {
    document.getElementById('submit-list').setAttribute('disabled', true)
    document.getElementById('members-listConfirm').innerHTML = '';
    const name = document.getElementById('inputName');
    const lastname = document.getElementById('inputLastName');
    const cellphone = document.getElementById('inputCellphone');

    const url = `${urlAPI}?name=${name.value}&lastName=${lastname.value}&cellphone=${cellphone.value}`
    const result = await fetch(url)
    .then( response => response.json())
    .then( data => data)


    if ("error" in result) {
        return alert(result.error)
    }

    createMembersList(result)

    myModalInput.show();


    return result

}

async function doPost() {
    document.getElementById('button-input').setAttribute('disabled', true)
    const body = createBody()

    const url = `${urlAPI}`

    const result = await fetch(url, 
        {
            method: 'POST',
            redirect: "follow",
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            }
        })
    .then( response => response.json())
    .then( data => data)

    
    myModalInput.hide();
    createMembersConfirm(result)
    myModalConfirm.show();
}