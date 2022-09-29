import {
	faGithubSquare,
	faHackerrank,
	faLinkedin,
	faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';

import { SOCIAL_URLS } from './socialUrls';

const { LINKED_IN, GITHUB, HACKER_RANK, STACK_OVERFLOW } = SOCIAL_URLS;

export const LINKS = [
	{
		id: 'link-1',
		name: LINKED_IN.name,
		url: LINKED_IN.url,
		icon: 'linkedin',
		iconName: faLinkedin,
	},
	{
		id: 'link-2',
		name: GITHUB.name,
		url: GITHUB.url,
		icon: 'github-square',
		iconName: faGithubSquare,
	},
	{
		id: 'link-3',
		name: HACKER_RANK.name,
		url: HACKER_RANK.url,
		icon: 'hackerrank',
		iconName: faHackerrank,
	},
	{
		id: 'link-4',
		name: STACK_OVERFLOW.name,
		url: STACK_OVERFLOW.url,
		icon: 'stack-overflow',
		iconName: faStackOverflow,
	},
];
