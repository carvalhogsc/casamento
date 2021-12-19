const urlAPI = 'https://script.google.com/macros/s/AKfycbwt-6H1HmA0PkEjey3nVXNJ4zRbpbTBBNOaf9k_fPqhzIZ6w57QFaPKuLwwyL4xhaDq/exec'

function doGet(name = 'guilherme', lastname = 'Carvalho', cellphone = "") {
    const url = `${urlAPI}&name=${name}&lastName=${lastname}&cellphone=${cellphone}`
    fetch(url, {
        method: "GET",
        headers: {
            'content-type': 'application/json; charset=utf-8',
            'access-control-allow-origin': '*'
        },
    }).then(response => {
        console.log(response);
    });

}