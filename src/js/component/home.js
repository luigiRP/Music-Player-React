import React, { useState } from "react";
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
					<div>
						<Songs title="song1" number="1" />
					</div>
					<div>
						<Songs title="song2" number="2" />
					</div>
					<div>
						<Songs title="song3" number="3" />
					</div>
					<div>
						<Songs title="song4" number="4" />
					</div>
					<div>
						<Songs title="song5" number="5" />
					</div>
					<div>
						<Songs title="song6" number="6" />
					</div>
					<div>
						<Songs title="song7" number="7" />
					</div>
					<div>
						<Songs title="song8" number="8" />
					</div>
					<div>
						<Songs title="song9" number="9" />
					</div>
					<div>
						<Songs title="song10" number="10" />
					</div>
					<div>
						<Songs title="song11" number="11" />
					</div>
					<div>
						<Songs title="song12" number="12" />
					</div>
					<div>
						<Songs title="song13" number="13" />
					</div>
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
