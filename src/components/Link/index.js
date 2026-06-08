const Link = ({ label, url, className, children, onClick }) => (
	<a href={url} rel="noopener noreferrer" target="_blank" className={className} onClick={onClick}>
		{label || children}
	</a>
);

export default Link;
