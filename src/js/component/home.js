import React, { useEffect, useState } from "react";
import Songs from "./songs";

//create your first component
export function Home() {
	// let songUrl = "https://assets.breatheco.de/apis/sound/".concat(track);

	// let audio = document.querySelector("#track");
	// let source = document.querySelector("#trackSource");
	// source.src = songUrl;
	// audio.load();
	// audio.play();
	const [track, setTrack] = useState([]);

	useEffect(() => {
		// Update the document title using the browser API
		let arraysongs = [];

		fetch("https://assets.breatheco.de/apis/sound/all")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(function(responseAsJson) {
				responseAsJson["data/songs.json"].map(songDetails => {
					arraysongs.push(songDetails);
				});
				// Do stuff with the JSON
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
		setTrack(arraysongs);
	}, []);
	console.log(track);
	return (
		<div className="container-fluid">
			<div className="row bar text-white justify-content-center p-3 font-weight-bold">
				<h1>RICH'S MUSIC PLAYER</h1>
			</div>
			<audio id="track">
				<source src="" type="audio/mpeg" id="trackSource" />
			</audio>
			<div className="row player text-white">
				<ol className="container-fluid" id="list">
					{track.map(songDetails => {
						return <li key={songDetails}>{songDetails.name}</li>;
					})}
				</ol>
			</div>
			<div className="row control text-white justify-content-center p-4">
				<button>
					<i className="fa fa-step-backward" aria-hidden="true" />
				</button>
				<button className="play mx-5">
					<i className="fa fa-play-circle" aria-hidden="true" />
				</button>
				<button>
					<i className="fa fa-step-forward" aria-hidden="true" />
				</button>
			</div>
		</div>
	);
}
