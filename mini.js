const root = document.querySelector("#root");
const button = document.querySelector("button");

function createItem(item)
{
    const card = document.createElement('div');
    card.classList.add('card');
  
    const photo = document.createElement('img');
    photo.src = item.thumbnailUrl;

    const title = document.createElement('h4');
    title.innerHTML = item.title;

    card.appendChild(photo);
    card.appendChild(title);

    root.appendChild(card);
}

function displayImages(Items) {
  console.log(Items);
  Items.forEach(function(Item){
    createItem(Item);
  });
}

button.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((Items) => {
      displayImages(Items);
    });
});
