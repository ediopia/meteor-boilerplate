import * as React from "react";
import AuthRoutes from "../../components/AuthRoutes";

interface AuthModalProps {
	onClose: () => void
}

const AuthModal: React.FC<AuthModalProps> = ({onClose}) => {
	return (
		<div className="modal is-active">
			<div onClick={onClose} className="modal-background"/>
			<button
				type="button"
				onClick={onClose}
				className="modal-close is-large"
				aria-label="close"
			/>
			<div style={{maxWidth: "320px"}} className="modal-content">
				<div className="box">
					<AuthRoutes onClose={onClose}/>
				</div>
			</div>
		</div>
	);
}

export default AuthModal;
