import PropTypes from "prop-types";

/** Forme d'un projet telle que produite par `getProjects(t)`. */
export const projectShape = PropTypes.shape({
	id: PropTypes.number.isRequired,
	slug: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	images: PropTypes.arrayOf(PropTypes.string).isRequired,
	year: PropTypes.string,
	stack: PropTypes.arrayOf(PropTypes.string),
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	problem: PropTypes.string,
	solution: PropTypes.string,
	features: PropTypes.arrayOf(PropTypes.string),
	role: PropTypes.string,
	github: PropTypes.string.isRequired,
	live_demo: PropTypes.string,
});
