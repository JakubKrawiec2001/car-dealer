import React, { useEffect, useState } from "react";
import "../styles/AddCarForm.scss";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../config/firebase";
import { toast } from "react-toastify";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const initialState = {
	name: "",
	model: "",
	drive: "",
	power: "",
	engineSize: "",
	fuel: "",
	gearBox: "",
	color: "",
	doors: "",
	course: "",
	year: "",
	price: "",
	description: "",
	equipment: "",
};

const AddCarForm = ({ currentUser }) => {
	const [form, setForm] = useState(initialState);
	const [images, setImages] = useState([]);
	const [urls, setUrls] = useState([]);
	const [progress, setProgress] = useState([]);

	const {
		name,
		course,
		year,
		description,
		model,
		drive,
		power,
		engineSize,
		fuel,
		gearBox,
		color,
		doors,
		price,
		equipment,
	} = form;

	const navigate = useNavigate();

	const handleFileChange = (e) => {
		const files = e.target.files;
		const newImages = [];
		for (let i = 0; i < files.length; i++) {
			newImages.push(files[i]);
		}
		setImages(newImages);
	};

	useEffect(() => {
		const uploadFiles = async () => {
			for (let i = 0; i < images.length; i++) {
				const image = images[i];

				const storageRef = ref(storage, `images/${image.name}`);
				const uploadTask = uploadBytesResumable(storageRef, image);

				uploadTask.on(
					"state_changed",
					(snapshot) => {
						const progress =
							(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
						setProgress((prevProgress) => {
							const newProgress = [...prevProgress];
							newProgress[i] = progress;
							return newProgress;
						});
					},
					(error) => {
						console.log(error);
					},
					async () => {
						await getDownloadURL(uploadTask.snapshot.ref).then(
							(downloadedUrl) => {
								setUrls((prevUrl) => [...prevUrl, downloadedUrl]);
							}
						);
					}
				);
			}
		};

		images && uploadFiles();
	}, [images]);

	useEffect(() => {
		setForm((prev) => ({ ...prev, imgUrl: urls }));
	}, [urls]);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (
			name &&
			year &&
			course &&
			description &&
			images &&
			model &&
			drive &&
			power &&
			engineSize &&
			fuel &&
			gearBox &&
			color &&
			doors &&
			price
		) {
			try {
				await addDoc(collection(db, "cars"), {
					...form,
					timestamp: serverTimestamp(),
					userId: currentUser.uid,
				});
				toast.success("Dodano nowe ogłoszenie");
				setUrls([]);
				navigate("/");
			} catch (error) {
				console.log(error);
			}
		} else {
			toast.error("Uzupełnij wszystkie pola");
		}
	};

	return (
		<>
			<div className="add-car-form-container wrapper">
				<h2 className="add-car-heading">Dodaj nowe ogłoszenie</h2>
				<form className="add-car-form" onSubmit={handleSubmit}>
					<div className="add-car-row">
						<div className="add-car-input-box">
							<label className="add-car-text">Marka pojazdu</label>
							<input
								type="text"
								placeholder="np. Ford"
								name="name"
								value={name}
								onChange={handleChange}
								className="add-car-input"
							/>
						</div>
						<div className="add-car-input-box">
							<label className="add-car-text">Model pojazdu</label>
							<input
								type="text"
								placeholder="np. Focus"
								name="model"
								value={model}
								onChange={handleChange}
								className="add-car-input"
							/>
						</div>
						<div className="add-car-input-box">
							<label className="add-car-text">Przebieg</label>
							<input
								type="text"
								placeholder="np. 100 000 km"
								name="course"
								value={course}
								onChange={handleChange}
								className="add-car-input"
							/>
						</div>
					</div>
					<div className="add-car-row">
						<div className="add-car-input-box">
							<label className="add-car-text">Moc silnika</label>
							<input
								type="text"
								placeholder="np. 122 KM"
								name="power"
								value={power}
								onChange={handleChange}
								className="add-car-input"
							/>
						</div>
						<div className="add-car-input-box">
							<label className="add-car-text">Pojemność skokowa</label>
							<input
								type="text"
								placeholder="np. 1 395 cm3"
								name="engineSize"
								value={engineSize}
								onChange={handleChange}
								className="add-car-input"
							/>
						</div>
						<div className="add-car-input-box">
							<label className="add-car-text">Rodzaj paliwa</label>
							<input
								type="text"
								placeholder="np. Benzyna"
								name="fuel"
								value={fuel}
								onChange={handleChange}
								className="add-car-input"
							/>
						</div>
					</div>
					<div className="add-car-row">
						<div className="add-car-input-box">
							<label className="add-car-text">Napęd</label>
							<input
								type="text"
								placeholder="np. Przód"
								name="drive"
								value={drive}
								onChange={handleChange}
								className="add-car-input"
							/>
						</div>
						<div className="add-car-input-box">
							<label className="add-car-text">Kolor</label>
							<input
								type="text"
								placeholder="np. Biały"
								name="color"
								value={color}
								onChange={handleChange}
								className="add-car-input"
							/>
						</div>
						<div className="add-car-input-box">
							<label className="add-car-text">Drzwi</label>
							<input
								type="text"
								placeholder="np. 5"
								name="doors"
								value={doors}
								onChange={handleChange}
								className="add-car-input"
							/>
						</div>
					</div>
					<div className="add-car-row">
						<div className="add-car-input-box">
							<label className="add-car-text">Skrzynia</label>
							<input
								type="text"
								placeholder="np. Automatyczna"
								name="gearBox"
								value={gearBox}
								onChange={handleChange}
								className="add-car-input"
							/>
						</div>
						<div className="add-car-input-box">
							<label className="add-car-text">Data produkcji</label>
							<input
								type="text"
								placeholder="np. 2015"
								name="year"
								value={year}
								onChange={handleChange}
								className="add-car-input"
							/>
						</div>
						<div className="add-car-input-box">
							<label className="add-car-text">Cena</label>
							<input
								type="text"
								placeholder="np. 125 000"
								name="price"
								value={price}
								onChange={handleChange}
								className="add-car-input"
							/>
						</div>
					</div>

					<div className="add-car-row">
						<label className="add-car-text">Opis pojazdu</label>
						<textarea
							name="description"
							value={description}
							onChange={handleChange}
							className="car-add-textarea"></textarea>
					</div>

					<input
						type="file"
						onChange={handleFileChange}
						multiple
						className="add-car-file-input"
					/>

					<div className="progress-box">
						{progress[0] && (
							<p className="progress-text">{Math.round(progress[0])}%</p>
						)}

						<div className="progress">
							<span style={{ width: `${progress[0]}%` }}></span>
						</div>
					</div>

					<button
						type="submit"
						disabled={progress[0] !== null && progress[0] < 100}
						className="add-car-submit-btn">
						Dodaj
					</button>
				</form>
			</div>
		</>
	);
};

export default AddCarForm;
