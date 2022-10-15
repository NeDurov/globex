import React, { useEffect, useState } from "react";
import "./UsersData.css";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import EmailIcon from "@mui/icons-material/Email";
import ModalUser from "./ModalUser";

export default function UsersData({ data }) {
	const [user, setUser] = useState(null);
	const [open, setOpen] = useState(false);

	const handleUser = (user) => () => {
		setUser(user);
	};

	const handleClose = () => {
		setUser(null);
		setOpen(false);
	};

	useEffect(() => {
		setOpen(true);
	}, [user]);

	return (
		<>
			{data.map((user, key) => {
				return (
					<div
						className="UserBox"
						key={key}
						onClick={handleUser(user)}
					>
						<div className="Name">{user.name}</div>
						<div className="Phone">
							<SmartphoneIcon color="secondary" />
							{user.phone}
						</div>
						<div className="email">
							<EmailIcon color="secondary" />
							{user.email}
						</div>
					</div>
				);
			})}
			{user ? (
				<ModalUser
					user={user}
					openModal={open}
					closeModel={handleClose}
				/>
			) : (
				<></>
			)}
		</>
	);
}
