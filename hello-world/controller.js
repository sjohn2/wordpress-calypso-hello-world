
var React = require( 'react' );

const Controller = {
	helloWorld() {
		const Main = require( 'my-sites/hello-world/main' );

		// Render hello world...
		React.render(
			React.createElement( Main ),
			document.getElementById( 'primary' )
		);
	}
};

export default Controller;
