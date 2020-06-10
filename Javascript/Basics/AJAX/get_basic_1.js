var ele = document.getElementById('getBasic1');

var execReq = function() {
	var req = new XMLHttpRequest();
	req.onreadystatechange = function() {
		console.log('Ready State', this.readyState);
	};

	req.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

	// below request return 500
	// req.open('GET', 'http://www.mocky.io/v2/5e578a563000004c00fd3ad6', true);

	req.onload = function() {
		console.log('Inside onLoad', this.readyState);
		if (this.status == 200) {
			// console.log(this.response);
			console.log(this.responseURL);
		} else if (this.status >= 400) {
			console.log('Some error occurred', JSON.parse(this.responseText));
		}
	};

	req.onerror = function() {
		// this doesn't get called for http errors
		console.log('Request failed with error', this.response);
	};
	req.send();
};

ele.addEventListener('click', execReq);

/*

Ready States:
------------
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready

*/
