window.addEventListener('hidden.bs.modal', function (e) {
    clearDataModal()
})

const createMembersList = (listMember) => {
    let parent = document.getElementById('members-list');

    listMember.forEach((item, index) => {
        if (item.status != 'NÃO' && item.status != 'SIM')
        {
            parent.innerHTML += `<tr>
                <td scope="row">${item.id}</td>
                <td>${item.name}</td>
                <td>${item.status}</td>
                <td colspan="2">
                    <select class="form-select" id="select-${index}" aria-label="Default select example">
                        <option selected>${item.status}</option>
                        <option value="yes">SIM</option>
                        <option value="no">NÃO</option>
                    </select>
                </td>
            </tr>`
        } else {
            parent.innerHTML += `<tr>
                <td scope="row">${item.id}</td>
                <td>${item.name}</td>
                <td>${item.status}</td>
                <td>
                    <select class="form-select" id="select-${index}" aria-label="Default select example">
                        <option value="yes">SIM</option>
                        <option value="no">NÃO</option>
                    </select>
                </td>
            </tr>`
        }
    })
}

const createMembersConfirm = (listMember) => {
    let parent = document.getElementById('members-listConfirm');

    listMember.forEach((item) => {
            parent.innerHTML += `<tr>
                <td scope="row">${item.id}</td>
                <td>${item.name}</td>
                <td>${item.status}</td>
            </tr>`
    })
}

const clearDataModal = () => {
     document.getElementById('members-list').innerHTML = '';
     document.getElementById('submit-list').removeAttribute('disabled')
     document.getElementById('button-input').removeAttribute('disabled')
}

const createBody = () => {
    let parent = document.getElementById('members-list');
    const childs = parent.querySelectorAll('tr')
    let listObj = ['id', 'name', 'status']
    let bodyArray = []
    let obj = {}
    childs.forEach((item, index) => {
        const select =  document.getElementById(`select-${index}`)
        Object.assign(obj, { 'id': item.querySelectorAll('td')[0].innerText })
        Object.assign(obj, { 'name': item.querySelectorAll('td')[1].innerText })
        Object.assign(obj, { 'status': select.options[select.selectedIndex].text } )

        bodyArray.push(obj)
        obj = {}
    })

    return bodyArray
}