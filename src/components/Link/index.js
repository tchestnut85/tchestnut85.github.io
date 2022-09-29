const Link = ({ label, url, className, children }) => (
	<a href={url} rel="noopener noreferrer" target="_blank" className={className}>
		{label || children}
	</a>
);

export default Link;
