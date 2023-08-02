/* eslint-disable jsx-a11y/anchor-is-valid */
import { useSelector } from "react-redux";
import {FC} from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../../../_metronic/helpers'
import { useImageFile } from '../../../../hooks/useImageFile';
import { MatiButtonComponent } from "../formsAbstract/MetaMapBtn";

export interface FileState {
  files: {
    rfc: string;
    fiel: string;
    acta: string;
    comprobante: string;
    accionaria: string;
    accionaria2: string;
    accionaria3: string;
  };
}

const Step1: FC = () => {

  const { 
    handleFileChange, response, handleFileChangeFIEL, handleFileChangeActa,
    handleFileChangeComprobante,
    handleFileChangeAccionaria,
    handleFileChangeAccionaria2,
    handleFileChangeAccionaria3,
  } = useImageFile();

  const fileState = useSelector( (state: FileState) => state.files );


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


        <div className='col-lg-4'>
          
          <label
            className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
            htmlFor='fileInputRFC'
          >
            <KTIcon iconName='folder' className='fs-3x me-5' />
            <span className='d-block fw-bold text-start'>
              <span className='text-dark fw-bolder d-block fs-4 mb-2'>{(fileState.rfc !== '')?"": "Subir Archivo"}</span>
              <span className='text-gray-400 fw-bold fs-6'>
                {
                  (fileState.rfc !== '')?"RFC Cargado": "Cédula de RFC"
                }
              </span>
            </span>
          </label>
          <input
            type='file'
            className='btn-check d-none'
            name='rfcFile'
            id='fileInputRFC'
            onChange={handleFileChange}
          />
        </div>

        {/* <div className='col-lg-4'>
      
          <label
            className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
            htmlFor='fileInput2'
          >
            <KTIcon iconName='folder' className='fs-3x me-5' />
            <span className='d-block fw-bold text-start'>
              <span className='text-dark fw-bolder d-block fs-4 mb-2'>{(fileState.fiel !== '')?"": "Subir Archivo"}</span>
              <span className='text-gray-400 fw-bold fs-6'>
              {
                  (fileState.fiel !== '')?"Fiel Cargado": "Certificado Fiel"
                }
              </span>
            </span>
          </label>
          <input
            type='file'
            className='btn-check d-none'
            name='fielFile'
            id='fileInput2'
            onChange={handleFileChangeFIEL}
          />
        </div> */}

        <div className='col-lg-4'>
      
          <label
            className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
            htmlFor='actaFile'
          >
            <KTIcon iconName='folder' className='fs-3x me-5' />
            <span className='d-block fw-bold text-start'>
              <span className='text-dark fw-bolder d-block fs-4 mb-2'>{(fileState.acta !== '')?"": "Subir Archivo"}</span>
              <span className='text-gray-400 fw-bold fs-6'>
              {
                  (fileState.acta !== '')?"Acta Cargada": "Acta constitutiva"
                }
              </span>
            </span>
          </label>
          <input
            type='file'
            className='btn-check d-none'
            name='fielFile'
            id='actaFile'
            onChange={handleFileChangeActa}
          />
        </div>

        <div className='col-lg-4'>
          
          <label
            className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
            htmlFor='comprobanteFile'
          >
            <KTIcon iconName='folder' className='fs-3x me-5' />
            <span className='d-block fw-bold text-start'>
              <span className='text-dark fw-bolder d-block fs-4 mb-2'>{(fileState.comprobante !== '')?"": "Subir Archivo"}</span>
              <span className='text-gray-400 fw-bold fs-6'>
                {
                  (fileState.comprobante !== '')?"Comprobante Cargado": "Comprobante de domicilio"
                }
              </span>
            </span>
          </label>
          <input
            type='file'
            className='btn-check d-none'
            name='comprobanteFile'
            id='comprobanteFile'
            onChange={handleFileChangeComprobante}
          />
        </div>

        

        <div className='col-lg-12 mt-3'>
          
          <label
            className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
            htmlFor=''
          >
            <span className='d-block fw-bold text-start'>
              <span className='text-dark fw-bolder d-block fs-4 mb-2 justify-center'>Validacion de Identificación</span>
              <span className='text-gray-400 fw-bold fs-6'>
                
               <hr />
               Compartir URl 
               <br />
               <a href="https://signup.getmati.com/?merchantToken=64a5ba17fb42cc001b53d81f&flowId=64a5ba17fb42cc001b53d81d" target="_blank">https://signup.getmati.com/?merchantToken=64a5ba17fb42cc001b53d81f&flowId=64a5ba17fb42cc001b53d81d</a>

              </span>

               <hr />
                  <div className='col-lg-12 mt-3'>
                      <span className='text-dark fw-bolder d-block fs-4 mb-2 justify-center'>Validar con</span>
                      <span className='text-gray-400 fw-bold fs-6'>
                        
                  
                              <label
                                className='btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center'
                                htmlFor=''
                              >
                            <div className='col-lg-4 mt-3'>

                                  <img
                                    src= {toAbsoluteUrl('/media/misc/qr.png')}
                                    alt='Imagen'
                                    style={{
                                      maxWidth: '100%',
                                      maxHeight: '100%',
                                      display: 'block',
                                      margin: 'auto',
                                    }}
                                  />
                              </div>
                              <div className='col-lg-3 mt-3'>

                                    <span className='text-dark fw-bolder d-block fs-4 mb-2 justify-center'>ó</span>

                                </div>

                                <div className='col-lg-4 mt-3'>

                                    <MatiButtonComponent />

                                </div>

                                
                              </label>
                          
                      </span>
              
                    </div>

                    
            </span>
          </label>
      
        </div>
        


    
     
        </div>
      </div>
    </div>
  )
}

export {Step1}
