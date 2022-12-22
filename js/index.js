let main = document.querySelector('.main');
let divdata = document.querySelector(".data");
main.addEventListener("mouseenter", async () => {
    let res =await fetch("https://dummyjson.com/products")
    let data = await res.json();
    let products = data.products;
    console.log(products);
    products.map((ele) => {
        console.log(ele.title);
        divdata.innerHTML = divdata.innerHTML +`${ele.title}`
    })

})
let action =async () => {
    let res =await fetch("https://dummyjson.com/products")
    let data = await res.json();
    let products = data.products;
    console.log("**********************scroll active****************");
    console.log(products);
    products.map((ele) => {
        console.log(ele.title);
        divdata.innerHTML = divdata.innerHTML +`${ele.title}`
    })

}
// main.addEventListener("mousemove",action)

// main.addEventListener("mouseleave", async () => {
//   divdata.removeEventListener("mousemove",action)
// })
