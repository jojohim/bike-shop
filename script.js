fetch("http://himstedtdesign.com/bike-shop/wp-json/wp/v2/posts")
. then(res=>res.json())
.then(handleData);

function handleData(posts) {
console.log(posts)
    posts.forEach(showPost)
}

function showPost(post) {
    console.log(post)
    const template = document.querySelector("template").content;

    const copy = template.cloneNode(true);

    copy.querySelector(".brand").textContent = post.brand;
    copy.querySelector(".type").textContent = post.title.rendered;
    copy.querySelector(".price").innerHTML = "Price -    " + post.price;
    copy.querySelector(".colours").innerHTML = "Colours -    " + post.colour;
    copy.querySelector(".in_stock").innerHTML = "In Stock -    " + post.in_stock;

    document.querySelector("main").appendChild(copy)
}
