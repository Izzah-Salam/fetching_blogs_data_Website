// const apiKey = "AIzaSyDfqmASd9-0ufPs8tD_paLRGs93Iuv1N7U";
// const apiUrl = `https://www.googleapis.com/blogger/v3/blogs/3213900/posts/search?q=documentation&key=${apiKey}`;

const apiKey = "AIzaSyDfqmASd9-0ufPs8tD_paLRGs93Iuv1N7U";
const apiUrl = `https://www.googleapis.com/blogger/v3/blogs/3213900/posts/search?q=documentation&key=${apiKey}`;

function hideLoader() {
	const loader = document.querySelector(".loader");
	loader.classList.add("loader-hidden");
}

async function getDataFromDatabase() {
	const response = await fetch(apiUrl);

	if (!response.ok) {
		hideLoader();
		throw new Error(`HTTP ERROR STATUS: ${response.status}`);
	}

	hideLoader();
	const allData = await response.json();

	// we have to complete this function
	showDataOnUI(allData);
}

function showDataOnUI(data) {
	const blogContainer = document.querySelector(".blog-container");

	for (const item of data.items) {
		const html = `
			<div class="blogs">
					<div class="img">
						<img src="${item.author.image.url}" />
					</div>
					<div class="blogs-des">
						<h2>${item.title}</h2>
						<h3>${item.author.displayName}</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
							animi!
						</p>
					</div>
				</div>
		`;

		blogContainer.insertAdjacentHTML("beforeend", html);
	}
}

window.addEventListener("load", () => {
	//loader will be initally running so we don't have to do anything
	// we just have to call getDataFromDatabase

	getDataFromDatabase();
});
