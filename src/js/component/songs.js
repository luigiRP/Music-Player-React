import React from "react";
import PropTypes from "prop-types";

export default function Songs(props) {
	function playAudio() {
		let audio = document.queryselector("#track");
		audio.play();
	}
	return (
		<li
			className="songbox row p-2 d-flex align-items-center"
			onClick={() => {
				playAudio();
			}}>
			<div className="num-wrapper">
				<span className="num-li mx-3 align-items-center font-weight-bold">
					{props.number}
				</span>
			</div>
			<span className="name-li font-weight-bold"> {props.title}</span>
			<audio id="track">
				<source
					src="https://assets.breatheco.de/apis/sound/files/mario/songs/castle.mp3"
					type="audio/mpeg"
				/>
			</audio>
		</li>
	);
}

Songs.propTypes = {
	title: PropTypes.string,
	number: PropTypes.string
};
