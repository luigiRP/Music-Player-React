import React from "react";
import Songs from "./songs";

//create your first component
export function Home() {
	return (
		<div className="container-fluid">
			<div className="row bar text-white justify-content-center p-3 font-weight-bold">
				<h1>RICH'S MUSIC PLAYER</h1>
			</div>
			<div className="row player text-white">
				<ol className="container-fluid">
					<Songs title="song1" number="1" />
					<Songs title="song2" number="2" />
					<Songs title="song3" number="3" />

					<Songs title="song4" number="4" />

					<Songs title="song5" number="5" />

					<Songs title="song6" number="6" />

					<Songs title="song7" number="7" />

					<Songs title="song8" number="8" />

					<Songs title="song9" number="9" />

					<Songs title="song10" number="10" />

					<Songs title="song11" number="11" />

					<Songs title="song12" number="12" />

					<Songs title="song13" number="13" />

					<Songs title="song14" number="14" />

					<Songs title="song15" number="15" />

					<Songs title="song16" number="16" />
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
