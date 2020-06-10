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
	setTimeout(() => {
		posts.forEach(function(post) {
			postHtml += `<li> ${post.title} ${post.description} ${post.date} </li>`;
		});
		document.body.innerHTML = postHtml;
	}, 1000);
}

function createPost(post, callback) {
	setTimeout(() => {
		posts.push(post);
		callback();
	}, 2000);
}

getPosts();

createPost(
	{
		title: 'Post3',
		description: 'Description3',
		date: new Date()
	},
	getPosts
);

console.log(getPosts.prototype);
