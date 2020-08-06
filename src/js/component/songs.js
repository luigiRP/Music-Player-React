import React from "react";
import PropTypes from "prop-types";

export default function Songs(props) {
	return (
		<li className="songbox row p-2 d-flex align-items-center">
			<div className="num-wrapper">
				<span className="num-li mx-3 align-items-center font-weight-bold">
					{props.number}
				</span>
			</div>
			<span className="name-li font-weight-bold"> {props.title}</span>
		</li>
	);
}

Songs.propTypes = {
	title: PropTypes.string,
	number: PropTypes.string
};
