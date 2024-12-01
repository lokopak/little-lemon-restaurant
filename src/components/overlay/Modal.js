import Button from "../button/Button";
import "./Modal.css";

export default function Modal({ title, description, onClose }) {
  return (
    <>
      <div className="modal-overlay"></div>
      <div className="modal">
        <h2 className="modal-title">{title}</h2>
        <p className="modal-description">{description}</p>
        <div className="modal-actions">
          <Button color="accent" label="Close" onClick={onClose} />
        </div>
      </div>
    </>
  );
}
