import React, {FC} from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {ErrorMessage, Field, Formik} from 'formik'
import { useImageFile } from '../../../../hooks/useImageFile';
import { useSelector } from 'react-redux';
import { DataState } from './Step2';

const Step4: FC = () => {

  const { handleFileChange} = useImageFile();
  const { data } = useSelector( (state: DataState) => state.data)

  return (
    <div className='w-100'>
    <div className='pb-10 pb-lg-12'>
      <h2 className='fw-bolder text-dark'>Comprobante de Domicilio</h2>
    </div>

    <div className='row'>
        <div className='col-lg-12'>

          <label
            className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
            htmlFor=''
          >
            <KTIcon iconName='folder' className='fs-3x me-5' />
            <span className='d-block fw-bold text-start'>
              <span className='text-gray-400 fw-bold fs-6'>
                Comprobante cargado
              </span>
              <hr />
              <a href={data.urlconstancia} target="_blank">{data.urlcomprobante}</a>
            </span>
          </label>
          <input
            type='file'
            className='btn-check d-none'
            name='accountType'
            id='fileInput4'
            onChange={handleFileChange}
          />
        </div>

    </div>

    <div className='fv-row mb-10 mt-3'>
      <label className='form-label required'>Dirección</label>

      <input type="text" name='direction' defaultValue={data.direction} className='form-control form-control-lg form-control-solid' />
 
    </div>

    <div className='fv-row mb-10'>
      <label className='d-flex align-items-center form-label'>
        <span className='required'>Titular</span>
      </label>

      <input
        type="text"
        name='holder'
        defaultValue={ data.holder}
        className='form-control form-control-lg form-control-solid'
      />


    </div>

    <div className='fv-row mb-10'>
      <label className='form-label required'>Vigencia</label>

      <input
        type='text'
        name='expired'
        defaultValue={data.expired}
        className='form-control form-control-lg form-control-solid'
      />

    </div>


  </div>
  )
}

export {Step4}
