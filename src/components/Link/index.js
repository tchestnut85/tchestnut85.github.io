const Link = ({ label, url, className }) => (
	<a href={url} rel="noopener noreferrer" target="_blank" className={className}>
		{label}
	</a>
);

export default Link;
