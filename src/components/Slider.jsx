import React, { useState } from "react";
import "../styles/Slider.scss";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillCloseCircle } from "react-icons/ai";

const Slider = ({ images }) => {
	const [slideNumber, setSlideNumber] = useState(0);
	const [open, setOpen] = useState(false);

	const handleOpen = (i) => {
		setSlideNumber(i);
		setOpen(true);
	};
	const handleMove = (direction) => {
		let newSlideNumber;

		if (direction === "l") {
			newSlideNumber = slideNumber === 0 ? images.length - 1 : slideNumber - 1;
		} else {
			newSlideNumber = slideNumber === images.length - 1 ? 0 : slideNumber + 1;
		}

		setSlideNumber(newSlideNumber);
	};

	return (
		<div className="s-container">
			<IoIosArrowBack
				className="s-arrow arrow-l"
				onClick={() => handleMove("l")}></IoIosArrowBack>
			<IoIosArrowForward
				className="s-arrow arrow-r"
				onClick={() => handleMove("r")}></IoIosArrowForward>
			<img
				src={images[slideNumber]}
				alt=""
				className="main-image noSelect"
				onClick={() => handleOpen(slideNumber)}
			/>
			<div className="images-box">
				{images.slice(0, 4).map((image, i) => {
					return (
						<img
							src={image}
							alt=""
							onClick={() => handleOpen(i)}
							className="slider-image noSelect"
							key={i}
						/>
					);
				})}
				{images.length > 4 && (
					<div className="last-slider-image-box" onClick={() => setOpen(true)}>
						<img src={images[5]} alt="" className="slider-image noSelect" />
						<div className="last-slider-image-shadow"></div>
						<p className="last-slider-image-text">+{images.length}</p>
					</div>
				)}
			</div>
			{open && (
				<div className="image-popup-box">
					<AiFillCloseCircle
						className="popup-close-icon"
						onClick={() => setOpen(false)}></AiFillCloseCircle>
					<img
						src={images[slideNumber]}
						alt=""
						className="popup-image noSelect"
					/>
					<IoIosArrowBack
						className="popup-arrow popup-arrow-l"
						onClick={() => handleMove("l")}></IoIosArrowBack>
					<IoIosArrowForward
						className="popup-arrow popup-arrow-r"
						onClick={() => handleMove("r")}></IoIosArrowForward>
					<p className="slide-number noSelect">
						{slideNumber + 1}/{images.length}
					</p>
				</div>
			)}
			<p className="slide-number noSelect">
				{slideNumber + 1} / {images.length}
			</p>
		</div>
	);
};

export default Slider;
