import React, { useRef } from 'react';
import { useField } from 'formik';
import { KTIcon } from '../../../../../_metronic/helpers';

export const FileInput = ({ label, ...props }) => {
  const [field, , helpers] = useField(props.name);
  const fileInputRef = useRef(null);

  const handleDivClick = () => {
    // Trigger the file input click when the div is clicked
    // fileInputRef.current.click();
  };

  const handleChange = (event) => {
    helpers.setValue(event.currentTarget.files[0]);
  };

  return (
    <div onClick={handleDivClick}>
      <input type="file"  ref={fileInputRef} {...field} {...props} />
      <label
        className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
        htmlFor={props.id}
      >
        <KTIcon iconName='folder' className='fs-3x me-5' />

        <span className='d-block fw-bold text-start'>
          <span className='text-dark fw-bolder d-block fs-4 mb-2'>Seleccionar Archivo</span>
          <span className='text-gray-400 fw-bold fs-6'>Carga de documento Cédula RFC</span>
        </span>
      </label>
    </div>
  );
};

