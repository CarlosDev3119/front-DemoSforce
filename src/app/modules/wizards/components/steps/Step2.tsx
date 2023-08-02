import  {FC, useEffect, useRef, useState} from 'react'
import {KTIcon} from '../../../../../_metronic/helpers'
import {ErrorMessage, Field} from 'formik'
import { useImageFile } from '../../../../hooks/useImageFile';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from '../../../../hooks/useForm';

interface Step2Props {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface DataState {
  checking: string;
  data: { [key: string]: any }; 
}

const initialValues = {
  rfc: ''
}

const Step2: FC<Step2Props> = (  ) => {

  const { handleFileChange} = useImageFile();
  const { checking, data } = useSelector( (state:DataState ) => state.data );
  
  const [values, handleInputChange, reset] = useForm(initialValues)

  const value = localStorage.getItem('idExtraccion')
  
  if(checking === 'cheking' || Object.values(data).length === 0 || value === ''){
    return <h1>Sforce Loading ...</h1>
  }


  return (
    
    <div className='w-100'>
      <div className='w-100'>
 
        <div className='pb-10 pb-lg-15'>
          <h2 className='fw-bolder text-dark'>Carga de Cédula RFC</h2>
        </div>
        <div className='fv-row'>
          <div className='row'>
              <div className='col-lg-'>
      
                <label
                  className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
                  htmlFor=''
                >
                  <KTIcon iconName='folder' className='fs-3x me-5' />
                  <span className='d-block fw-bold text-start'>
                    <span className='text-dark fw-bolder d-block fs-4 mb-2'></span>
                    <span className='text-gray-400 fw-bold fs-6'>
                      Cédula RFC cargada
                    </span>
                    <hr />
                    <a href={data.urlconstancia} target="_blank">{data.urlconstancia}</a>
                  </span>
                </label>
                <input
                  type='text'
                  className='btn-check d-none'
                  name='accountType'
                  id='fileInput2'
                  onChange={handleFileChange}
                />
              </div>
           

          </div>
        </div>
      </div>

 


      <div className='mb-10 fv-row mt-3'>
        <label className='form-label mb-3'>RFC</label>

        <input
          type='text'
          className='form-control form-control-lg form-control-solid'
          name='rfc'
          onChange={ handleInputChange }
          defaultValue={data.rfc}

        />
        {/* <div className='text-danger mt-2'>
          <ErrorMessage name='rfc' />
        </div> */}
      </div>


      <div className='mb-10 fv-row mt-3'>
        <label className='form-label mb-3'>Razón Social</label>

        <input
          type='text'
          className='form-control form-control-lg form-control-solid'
          name='RazonSocial'
          defaultValue={ data.razonsocial }
        />
        {/* <div className='text-danger mt-2'>
          <ErrorMessage name='RazonSocial' />
        </div> */}
      </div>

      <div className='mb-10 fv-row mt-3'>
        <label className='form-label mb-3'>Dirección Fiscal</label>

        <input
          type='text'
          className='form-control form-control-lg form-control-solid'
          name='direccionFiscal'
          defaultValue={ data.direccionfiscal }
        />
        {/* <div className='text-danger mt-2'>
          <ErrorMessage name='direccionFiscal' />
        </div> */}
      </div>

      <div className='mb-10 fv-row mt-3'>
        <label className='form-label mb-3'>Fecha de Inscripción</label>

        <input
          type='text'
          className='form-control form-control-lg form-control-solid'
          name='fechaInscripcion'
          defaultValue={ data.fechainscripcion }
        />
        {/* <div className='text-danger mt-2'>
          <ErrorMessage name='fechaInscripcion' />
        </div> */}
      </div>


    </div>
  )
}

export {Step2}
