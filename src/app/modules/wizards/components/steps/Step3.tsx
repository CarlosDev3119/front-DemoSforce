import {FC} from 'react'
import {Field, ErrorMessage} from 'formik'
import { KTIcon } from '../../../../../_metronic/helpers'
import { useImageFile } from '../../../../hooks/useImageFile';
import { useSelector } from 'react-redux';
import { DataState } from './Step2';

const Step3: FC = () => {

  const { handleFileChange} = useImageFile();
  const { data } = useSelector( (state: DataState) => state.data)

  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-12'>
        <h2 className='fw-bolder text-dark'>Datos Fiscales: Certificado Fiel</h2>
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
                  Certificado Fiel cargado
                </span>
                <hr />
                <a href={data.urlcertificado} target="_blank">{data.urlconstancia}</a>
              </span>
            </label>
            <input
              type='file'
              className='btn-check d-none'
              name='accountType'
              id='fileInput3'
              onChange={handleFileChange}
            />
          </div>

      </div>

      <div className='fv-row mb-10 mt-3'>
        <label className='form-label required'>Número de Serie</label>

        <input type="text" name='serieName' defaultValue={ data.seriename} className='form-control form-control-lg form-control-solid' />

      </div>

      <div className='fv-row mb-10'>
        <label className='d-flex align-items-center form-label'>
          <span className='required'>Fecha de emisión</span>
        </label>

        <input
          type="text"
          name='fechaEmision'
          className='form-control form-control-lg form-control-solid'
          defaultValue={ data.fechaemision}
        />


      </div>

      <div className='fv-row mb-10'>
        <label className='form-label required'>Fecha de vigencia</label>

        <input
          type='text'
          name='dateField'
          className='form-control form-control-lg form-control-solid'
          defaultValue={ data.datefield}
        />

      </div>


    </div>
  )
}

export {Step3}
