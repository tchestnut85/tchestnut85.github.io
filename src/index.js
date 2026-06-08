import './index.css';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import posthog from 'posthog-js';
import { PostHogProvider } from '@posthog/react';

posthog.init(process.env.REACT_APP_PUBLIC_POSTHOG_KEY, {
	api_host: process.env.REACT_APP_PUBLIC_POSTHOG_HOST,
	defaults: '2026-01-30',
});

ReactDOM.render(
	<React.StrictMode>
		<PostHogProvider client={posthog}>
			<App />
		</PostHogProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
