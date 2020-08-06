import React, { Fragment } from "react";
import PropTypes from "prop-types";

export default function Songs(props) {
	return (
		<Fragment>
			<div className="num-wrapper">
				<span className="num-li mx-3 align-items-center font-weight-bold">
					{props.number}
				</span>
			</div>
			<span className="name-li font-weight-bold"> {props.title}</span>
		</Fragment>
	);
}

Songs.propTypes = {
	title: PropTypes.string,
	number: PropTypes.number
};
