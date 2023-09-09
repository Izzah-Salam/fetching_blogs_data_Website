// const apiKey = "AIzaSyDfqmASd9-0ufPs8tD_paLRGs93Iuv1N7U";
// const apiUrl = `https://www.googleapis.com/blogger/v3/blogs/3213900/posts/search?q=documentation&key=${apiKey}`;

const apiKey = "AIzaSyDfqmASd9-0ufPs8tD_paLRGs93Iuv1N7U";
const apiUrl = `https://www.googleapis.com/blogger/v3/blogs/3213900/posts/search?q=documentation&key=${apiKey}`;

window.addEventListener("load", () => {
	const loader = document.querySelector(".loader");
	loader.classList.add("loader-hidden");
	LoadBlogs();
	loader.addEventListener("transitionend", () => {
		document.body.removeChild(loader);
	});
});

async function LoadBlogs() {
	try {
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error(`HTTP ERROR STATUS: ${response.status}`);
		}
		const Alldata = await response.json();
		console.log(Alldata);
		let dataStore = "";
		for (let item of Alldata.items) {
			dataStore += `
        <div class="blogs">
          <div class="img">
		<img src=" ${item.author.image.url}" />
           
          </div>
          <div class="blogs-des">
            <h2>Title : ${item.title}</h2>
            <h3>Author: ${item.author.displayName}</h3>
            <p>
              ${item.content}
            </p>
          </div>
        </div>`;
			console.log(`Img url print ${item.author.image.url}`);
		}

		const blogContainer = document.querySelector(".blog-container");
		blogContainer.innerHTML = dataStore;
	} catch (error) {
		console.log("Error Fetching data", error);
	}
}
