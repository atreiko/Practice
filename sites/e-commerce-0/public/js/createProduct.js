let openEditor;

const createProduct = (data) => {

    openEditor = () => {
        sessionStorage.tempProduct = JSON.stringify(data)
        location.href = `/add-product/${data.id}`
    }

    let productContainer = document.querySelector('.product-container')
    productContainer.innerHTML += `

        <div class="product-card">
            <div class="product-image">
                ${data.draft ? `<span class="tag">Draft</span>` : ''}
                
                <img class="product-thumb" src="${data.images[0] || 'img/no image.png'}" alt="prod">
                <button onclick="openEditor()" class="card-action-btn edit-btn"><img src="img/edit.png" alt="edit"></button>
                <button onclick="location.href = '/${data.id}'" class="card-action-btn open-btn"><img src="img/open.png" alt="open"></button>
                <button onclick="openDeletePopup('${data.id}')" class="card-action-btn delete-popup-btn"><img src="img/delete.png" alt="edit"></button>
            </div>
            <div class="product-info">
                <h2 class="product-brand">${data.name}</h2>
                <p class="product-short-des">${data.shortDes}</p>
                <span class="price">$${data.sellPrice}<span class="price-actual">$${data.actualPrice}</span></span>
            </div>
        </div>

    `;
}

const openDeletePopup = (id) => {
    let deleteAlert = document.querySelector('.delete-alert')
    deleteAlert.style.display = 'flex';

    let closeBtn = document.querySelector('.close-btn')
    closeBtn.addEventListener('click', () => deleteAlert.style.display = null)

    let deleteBtn = document.querySelector('.delete-btn')
    deleteBtn.addEventListener('click', () => deleteItem(id))
}

const deleteItem = (id) => {
    fetch('/delete-product', {
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify({id: id})
    }).then(res => res.json())
        .then(data => {
            if(data == 'success') {
                location.reload()
            } else {
                showAlert('some error occured while deleting the product. Try Again')
            }
        })
}