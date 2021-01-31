import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function FavoriteIcon(props) {
	return (
		<div className="div">
			{props.isFavorite === "false" ? (
				<div className="icon-div">
					<AiOutlineStar
						className="icon-chosen"
						onClick={props.handleFavorite}
					/>
				</div>
			) : props.isFavorite === "true" ? (
				<div className="icon-div">
					<AiFillStar className="icon-chosen" onClick={props.handleFavorite} />
				</div>
			) : (
				<div className="icon-div">
					<AiOutlineStar
						className="icon-neutral"
						onClick={props.handleFavorite}
					/>
				</div>
			)}
		</div>
	);
}
