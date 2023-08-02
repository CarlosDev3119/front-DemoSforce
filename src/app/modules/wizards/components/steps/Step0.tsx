/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {KTIcon} from '../../../../../_metronic/helpers'
import {ErrorMessage, Field} from 'formik'

const Step0: FC = () => {
  return (
    <div className='w-100'>
      <div className='pb-10 pb-lg-15'>
        <h2 className='fw-bolder d-flex align-items-center text-dark'>
          Registro de Empresas
          <i
            className='fas fa-exclamation-circle ms-2 fs-7'
            data-bs-toggle='tooltip'
            title='Billing is issued based on your selected account type'
          ></i>
        </h2>

        <div className='text-gray-400 fw-bold fs-6'>
          Inicia la carga de tus documentos.
        </div>
      </div>

      <div className='fv-row'>
        <div className='row'>


          <div className='col-lg-6'>
            <input
              type='radio'
              className='btn-check'
              name='inicio'
              value='corporate'
              id='kt_create_account_form_account_type_corporate'
            />
            <label
              className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
              htmlFor='kt_create_account_form_account_type_corporate'
            >
              <KTIcon iconName='briefcase' className='fs-3x me-5' />

              <span className='d-block fw-bold text-start'>
                <span className='text-dark fw-bolder d-block fs-4 mb-2'>Persona Moral</span>
                <span className='text-gray-400 fw-bold fs-6'>
                  Create corporate account to mane users
                </span>
              </span>
            </label>
          </div>

 
        </div>
      </div>
    </div>
  )
}

export {Step0}
