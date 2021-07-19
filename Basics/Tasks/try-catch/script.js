const books = [
    { 
      author: "Скотт Бэккер",
      name: "Тьма, что приходит прежде",
      price: 70 
    }, 
    {
     author: "Скотт Бэккер",
     name: "Воин-пророк",
    }, 
    { 
      name: "Тысячекратная мысль",
      price: 70
    }, 
    { 
      author: "Скотт Бэккер",
      name: "Нечестивый Консульт",
      price: 70
    }, 
    {
     author: "Дарья Донцова",
     name: "Детектив на диете",
     price: 40
    },
    {
     author: "Дарья Донцова",
     name: "Дед Снегур и Морозочка",
    }
  ];

const ul = document.createElement('ul')
document.getElementById('root').append(ul)

books.forEach((item, index) => {
    const li = document.createElement('li')
    try {
        for (let key in item) {
            const liText = document.createElement('p')
            liText.textContent = `${key}: ${item[key]}`
            li.append(liText)
        }
        if (!item.author) {
            throw new Error (`Incomplete data: there is no Author property on position: ${index + 1}`)
        }
        if (!item.name) {
            throw new Error (`Incomplete data: there is no Name property on position: ${index + 1}`)
        }
        if (!item.price) {
            throw new Error (`Incomplete data: there is no Price property on position: ${index + 1}`)
        }
        ul.append(li)
    } catch (error) {
        console.log(error);
    }
})
