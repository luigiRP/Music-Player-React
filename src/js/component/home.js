import React, { useEffect, useState } from "react";
import Songs from "./songs";

//create your first component
export function Home() {
	const [track, setTrack] = useState([]);
	const [playing, setPlaying] = useState(false);

	function playTrack(track) {
		let button = document.querySelector("#playOrPause");
		let songUrl = "https://assets.breatheco.de/apis/sound/".concat(track);
		button.innerHTML = `<i class="far fa-pause-circle"></i>`;
		setPlaying(true);
		let audio = document.querySelector("#track");
		let source = document.querySelector("#trackSource");
		source.src = songUrl;
		audio.load();
		audio.play();
	}

	function playOrPause() {
		let audio = document.querySelector("#track");
		let button = document.querySelector("#playOrPause");

		if (playing == false) {
			button.innerHTML = `<i class="far fa-pause-circle"></i>`;
			setPlaying(true);
			audio.play();
		} else {
			button.innerHTML = `<i class="far fa-play-circle"></i>`;
			setPlaying(false);
			audio.pause();
		}
	}

	function fastForward() {}

	useEffect(() => {
		const Play = async () => {
			let response = await fetch(
				"https://assets.breatheco.de/apis/sound/all"
			);
			let data = await response.json();

			setTrack(data["data/songs.json"]);
		};
		Play();
	}, []);

	return (
		<div className="container-fluid">
			<div className="row bar text-white justify-content-center p-3 font-weight-bold">
				<h1>RICH MUSIC PLAYER</h1>
			</div>
			<audio id="track">
				<source src="" type="audio/mpeg" id="trackSource" />
			</audio>

			<div className="row player text-white">
				<h1 id="ad" />
				<ol className="container-fluid mb-0" id="list">
					{track.map((songDetails, index) => {
						return (
							<li
								className="songbox row p-2 d-flex align-items-center track"
								onClick={() => {
									playTrack(songDetails.url);
								}}>
								<Songs
									title={songDetails.name}
									number={index}
								/>
							</li>
						);
					})}
				</ol>
			</div>
			<div className="row control text-white justify-content-center p-4 fixed-bottom">
				<button className="btn btn-primary">
					<i className="fa fa-step-backward" aria-hidden="true" />
				</button>
				<button
					className="play mx-5 btn btn-primary"
					id="playOrPause"
					onClick={() => {
						playOrPause();
					}}>
					<i className="fa fa-play-circle" aria-hidden="true" />
				</button>
				<button
					className="btn btn-primary"
					onClick={() => {
						fastForward();
					}}>
					><i className="fa fa-step-forward" aria-hidden="true" />
				</button>
			</div>
		</div>
	);
}
