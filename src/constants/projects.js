// import photo1 from '../assets/images/pass-the-page.png';
import photo2 from '../assets/images/nhl-dashboard.png';
import photo3 from '../assets/images/AniGame.png';
import photo4 from '../assets/images/match-game.png';
import photo5 from '../assets/images/lite-speed.png';
import photo6 from '../assets/images/todo-app.png';
import photo7 from '../assets/images/team-builder.png';
// import photo8 from '../assets/images/employee-tracker.png';

export const GITHUB_BASE_URL = 'https://github.com/tchestnut85/';

export const PROJECT_TEXT = {
	visitLabel: {
		frontEnd: 'Visit App',
		backEnd: 'View Demo',
	},
	githubLabel: 'GitHub Repo',
};

export const PROJECTS = [
	{
		title: 'Match Game',
		url: 'https://match-game-vadc.vercel.app/',
		repo: 'match-game',
		image: photo4,
		features: 'React, TypeScript, Axios, Sass, CSS Modules, Unsplash API',
		type: 'front-end',
	},
	{
		title: 'NHL Dashboard',
		url: 'https://nhl-dashboard-one.vercel.app/',
		repo: 'nhl-dashboard',
		image: photo2,
		features: 'JavaScript, Next.js, React, Redux, Axios, Chakra-UI',
		type: 'front-end',
	},
	{
		title: 'ToDo App',
		url: 'https://todoapp-tc.onrender.com/',
		repo: 'to-do-app',
		image: photo6,
		features: 'Full-Stack MERN App, JavaScript, React, Express.js, Node.js, MongoDB, RESTful API, JWT/bcrypt for Auth',
		type: 'full-stack',
	},
	{
		title: 'AniGame',
		url: 'https://tomchestnut.dev/anigame-react/',
		repo: 'anigame-react',
		image: photo3,
		features: 'React, JavaScript, Redux, Axios, Sass, CSS Modules, Bulma Library, GameSpot API, Kitsu API',
		type: 'front-end',
	},
	{
		title: 'Lite Speed',
		url: 'https://lite-speed.onrender.com/',
		repo: 'lite-speed',
		image: photo5,
		features:
			'Full-Stack MERN App, JavaScript, React, Express.js, Node.js, MongoDB, Mongoose, GraphQL, Apollo Server, JWT',
		type: 'full-stack',
	},
	{
		title: 'Team Builder',
		url: 'http://bit.ly/teambuilder-tc',
		repo: 'team-builder',
		image: photo7,
		features: 'Command-line Team Profile Generator, JavaScript, Node.js, OOP, Inquirer.js, Jest, TDD, Materialize CSS',
		type: 'back-end',
	},
];
