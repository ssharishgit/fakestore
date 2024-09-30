let dataArray = [];

restart();

function restart(){
  let request = fetch('https://fakestoreapi.com/products');
  request.then((res)=>{
    res.json().then((response)=>{
      dataArray = response;
      appendData(dataArray);
    });
  });
}

const container = document.getElementById("container");

function appendData(inputArray){
  container.innerHTML = "";
  
  inputArray.forEach(element => {

    const productContainer = document.createElement("div");
    productContainer.classList.add("card","border" ,"bg-neutral-100");
    // productContainer.addEventListener("click",(event) =>{
    //   console.log(event);
    //   modal.style.display = "block";
    // });

    const imgContainer = document.createElement("div");
    const productImg = document.createElement("img");
    productImg.src = element.image;
    productImg.style.height = "250px";
    productImg.style.width = "250px";
    imgContainer.classList.add("flex","justify-center","py-4");

    imgContainer.appendChild(productImg);

    const title = document.createElement("h2");
    title.classList.add("text-lg","font-bold","text-center","px-8","pb-4");
    title.innerText = element.title;

    const price = document.createElement("h3");
    price.classList.add("text-base","text-center","px-8");
    price.innerText = "$" + element.price;

    productContainer.append(imgContainer,title,price);
    container.appendChild(productContainer);

  });
}

function searchIt() {
  var input, filter, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  li = container.getElementsByClassName('card');

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h2")[0];
    txtValue = a.textContent || a.innerText;
    
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// var modal = document.getElementById("myModal");
// var span = document.getElementsByClassName("close")[0];

// span.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }