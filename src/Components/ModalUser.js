import React from "react";
import { Box, IconButton, Modal } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import "./ModalUser.css";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	height: 320,
	bgcolor: "background.paper",
	borderRadius: 12,
	outline: "none",
	p: 4,
};

export default function ModalUser({ user, openModal, closeModel }) {
	return (
		<div>
			<Modal open={openModal} onClose={closeModel}>
				<Box sx={style}>
					<div className="ModalName">{user.name}</div>
					<table width={"100%"}>
						<tbody>
							<tr>
								<th>
									<b>Телефон:</b>
								</th>
								<td>{user.phone}</td>
							</tr>

							<tr>
								<th>
									<b>Почта:</b>
								</th>
								<td>{user.email}</td>
							</tr>

							<tr>
								<th>
									<b>Дата приема:</b>
								</th>
								<td>{user.hire_date}</td>
							</tr>
							<tr>
								<th>
									<b>Должность:</b>
								</th>
								<td>{user.position_name}</td>
							</tr>
							<tr>
								<th>
									<b>Подразделение:</b>
								</th>
								<td>{user.department}</td>
							</tr>
						</tbody>
					</table>
					<div className="ModalDescription">
						<b>Дополнительная информация:</b>
						<br />
						<span>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim veniam, quis
							nostrud{" " + user.address}
						</span>
					</div>
					<IconButton
						sx={{
							position: "absolute",
							top: "-5%",
							left: "200px",
						}}
						variant="contained"
						color={"secondary"}
						className="CloseButton"
						onClick={closeModel}
					>
						<CancelIcon fontSize="large" />
					</IconButton>
				</Box>
			</Modal>
		</div>
	);
}
