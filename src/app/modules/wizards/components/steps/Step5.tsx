import React, {FC} from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../../../_metronic/helpers'
import {ErrorMessage, Field} from 'formik'
import { useImageFile } from '../../../../hooks/useImageFile';
import { DataState } from './Step2';
import { useSelector } from 'react-redux';

const Step5: FC = () => {

  const { handleFileChange} = useImageFile();

  const { data } = useSelector( (state: DataState) => state.data)

  return (
    <div className='w-100'>
    <div className='pb-10 pb-lg-12'>
      <h2 className='fw-bolder text-dark'>Datos Legales: Acta Constitutiva</h2>
    </div>

    <div className='row'>
        <div className='col-lg-12'>

          <label
            className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
            htmlFor=''
          >
            <KTIcon iconName='folder' className='fs-3x me-5' />
            <span className='d-block fw-bold text-start'>
              <span className='text-dark fw-bolder d-block fs-4 mb-2'></span>
              <span className='text-gray-400 fw-bold fs-6'>
                Acta constitutiva cargada
              </span>
              <hr />
              <a href={data.urlactacons} target="_blank">{data.urlactacons}</a>
            </span>
          </label>
          <input
            type='file'
            className='btn-check d-none'
            name='accountType'
            id='fileInput5'
            onChange={handleFileChange}
          />
        </div>

      

    </div>

    <div className='fv-row mb-10 mt-3'>
      <label className='form-label required'>Número de acta</label>

      <input type="text" name='actaNumber'  defaultValue={data.actanumber} className='form-control form-control-lg form-control-solid' />
 
    </div>

    <div className='fv-row mb-10'>
      <label className='d-flex align-items-center form-label'>
        <span className='required'>Número de notaría</span>
      </label>

      <input
        type="text"
        name='noteNumber'
        className='form-control form-control-lg form-control-solid'
        defaultValue={data.notenumber}
      />
  

    </div>

    <div className='fv-row mb-10'>
      <label className='form-label required'>Fecha de constitucion</label>

      <input
        type='text'
        name='dateConstitution'
        className='form-control form-control-lg form-control-solid'
        defaultValue={data.dateconstitution}

      />
 
    </div>

    <div className='fv-row mb-10'>
      <label className='form-label required'>Fecha de alta</label>

      <input
        type='text'
        name='altaDate'
        className='form-control form-control-lg form-control-solid'
        defaultValue={data.altadate}

      />

    </div>

    <div className='fv-row mb-10'>
      <label className='form-label required'>Actividad ó Giro</label>

      <input
        type='text'
        name='activity'
        className='form-control form-control-lg form-control-solid'
        defaultValue={data.activity}
      />

    </div>


  </div>
  )
}

export {Step5}
