import {FC} from 'react'
import { ErrorMessage, Field } from 'formik'
import { KTIcon } from '../../../../../_metronic/helpers'
import { useImageFile } from '../../../../hooks/useImageFile';
import { DataState } from './Step2';
import { useSelector } from 'react-redux';

const Step6: FC = () => {

  const {previewImage, handleFileChange} = useImageFile();
  const { data } = useSelector( (state: DataState) => state.data)

  return (
    <div className='w-100'>
    <div className='pb-10 pb-lg-12'>
      <h2 className='fw-bolder text-dark'>Tabla Accionaria</h2>
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
                Identificación cargada
              </span>
              <hr />
              <a href={data.ifeurl1} target="_blank">{data.ifeurl1}</a>
            </span>
          </label>
          <input
            type='file'
            className='btn-check d-none'
            name='accountType'
            id='fileInput6'
            onChange={handleFileChange}
          />
        </div>

      

    </div>

    <div className='fv-row mb-10 mt-3'>
      <label className='form-label required'>Nombre Completo</label>

      <input type="text" name='namefull' defaultValue={data.namefull} className='form-control form-control-lg form-control-solid' />


    </div>

    <div className='fv-row mb-10'>
      <label className='d-flex align-items-center form-label'>
        <span className='required'>CURP</span>
      </label>

      <input
        type="text"
        name='curp'
        className='form-control form-control-lg form-control-solid'
        defaultValue={data.curp}
      />


    </div>

    <div className='fv-row mb-10'>
      <label className='form-label required'>% de Participacion</label>

      <input
        type='text'
        name='porcentaje'
        className='form-control form-control-lg form-control-solid'
        defaultValue={data.porcentaje}
      />

    </div>


  </div>
  )
}

export {Step6}
