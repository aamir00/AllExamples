var posts = [
	{
		title: 'Post1',
		description: 'Description1',
		date: new Date()
	},
	{
		title: 'Post2',
		description: 'Description2',
		date: new Date()
	}
];

function getPosts() {
	var postHtml = '';
	posts.forEach(function(post) {
		postHtml += `<li> ${post.title} ${post.description} ${post.date} </li>`;
	});
	document.body.innerHTML = postHtml;
}

function createPost(post) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			posts.push(post);
			resolve('Some Error');
		}, 5000);
	});
}

async function init() {
	await createPost({
		title: 'Post3',
		description: 'Description3',
		date: new Date()
	});
	console.log(posts); // this will get executed only after the create post has done execution
}

init();
