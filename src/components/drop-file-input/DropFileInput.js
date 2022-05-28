import PropTypes from 'prop-types';
import './drop-file-input.css';
import uploadImg from '../../assets/cloud-upload-regular-240.png';
import { useRef } from 'react';

const DropFileInput = props => {

    const wrapperRef = useRef(null);

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');
    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');
    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    return (
        <div
            ref={wrapperRef}
            className="drop-file-input"
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
        >
            <div className="drop-file-input__label">
                <img src={uploadImg} alt="" />
                <p>Drag & Drop your files here</p>
            </div>
            <input type="file" value="" name="" id="" />
        </div>
    )
}

DropFileInput.propTypes = {}

export default DropFileInput