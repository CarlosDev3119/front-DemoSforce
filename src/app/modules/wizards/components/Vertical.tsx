import {useEffect, useRef, useState} from 'react'
import {KTIcon} from '../../../../_metronic/helpers'
import {Step1} from './steps/Step1'
import {Step2} from './steps/Step2'
import {Step3} from './steps/Step3'
import {Step4} from './steps/Step4'
import {Step5} from './steps/Step5'
import {StepperComponent} from '../../../../_metronic/assets/ts/components'
import {createAccountSchemas, ICreateAccount, inits} from './CreateAccountWizardHelper'
import { Step6 } from './steps/Step6'
import { Step7 } from './steps/Step7'
import { Step8 } from './steps/Step8'
import { Step9 } from './steps/Step9'
import { Step10 } from './steps/Step10'
import { Step0 } from './steps/Step0'
import { useData } from '../../../hooks/useData'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../../hooks/useForm'

import {from, interval} from 'rxjs';
import {distinctUntilChanged, debounceTime, switchMap, tap} from 'rxjs/operators';
import { LayoutProvider } from '../../../../_metronic/layout/core'
import { onClearData, onLoading } from '../../../../store/dataSlice'



interface DataState {
  checking: string;
  data: { [key: string]: any }; 
}

const initialValues = {
  inicio: 'personal',
  accountTeamSize: '50+',
  rfc: '',
  accountPlan: '1',
  serieName: '',
  fechaEmision: '',
  dateField: '',
  businessDescription: '',
  businessEmail: 'corp@support.com',
  direction: '',
  holder: '',
  expired: '',
  cardExpiryYear: '2025',
  cardCvv: '123',
  saveCard: '1',
  RazonSocial: '',
  direccionFiscal: '',
  fechaInscripcion: '',
  actaNumber: '',
  noteNumber: '',
  dateConstitution: '',
  altaDate:'',
  activity:'',
  curp: '',
  namefull: '',
  porcentaje: '',
  curp2: '',
  namefull2: '',
  porcentaje2: '',
  curp3: '',
  namefull3: '',
  porcentaje3: '',
  curp4: '',
  namefull4: '',
}


const Vertical = () => {

  const stepperRef = useRef<HTMLDivElement | null>(null);
  const stepper = useRef<StepperComponent | null>(null);
  const [currentSchema, setCurrentSchema] = useState(createAccountSchemas[0]);
  const [initValues, setInitialValues] = useState(initialValues);

  const [values, handleInputChange, reset] = useForm(initialValues);

  const { startGetData } = useData();
  
  const myData = useSelector(( state: DataState ) => state.data);

  const dispatch = useDispatch();
 
    
  

  const loadStepper = () => {
    stepper.current = StepperComponent.createInsance(stepperRef.current as HTMLDivElement)
  }

  const prevStep = () => {
    if (!stepper.current) {
      return
    }

    stepper.current.goPrev()

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 1])
  }

  const submitStep = (e) => {
    e.preventDefault();
    if (!stepper.current) {
      return
    }

    if (stepper.current.currentStepIndex !== stepper.current.totalStepsNumber) {
      stepper.current.goNext()
    } else {
      stepper.current.goto(1)
      reset()
    }

    setCurrentSchema(createAccountSchemas[stepper.current.currentStepIndex - 1])
  }

  useEffect(() => {
    if (!stepperRef.current) {
      return
    }

    loadStepper()
  }, [stepperRef]);

  // useEffect(() => {
    
  //   if( stepper.current?.currentStepIndex === 3) {
  //     startGetData()
  //   }
  //   return () => {
      
  //   }
  // }, [ stepper.current?.currentStepIndex])

  useEffect(() => {
    localStorage.setItem('idExtraccion', '');
  },[stepper.current?.currentStepIndex])

  useEffect(() => {
    
    if( stepper.current?.currentStepIndex === 3) {
      
      const data = myData.data;
      const subscription = from([data])
        .pipe(
          debounceTime(1000),
          switchMap((latestData) => {
            if (stepper.current?.currentStepIndex === 3 ) {
              return interval(10000).pipe(
                distinctUntilChanged(),
                switchMap(() => startGetData())
                );
              }
              return interval(5000).pipe(distinctUntilChanged());
            })
          )
          .subscribe({complete: () => console.log('completo')});


        return () => {
          subscription.unsubscribe();
        };

      }
  }, [myData.data, stepper.current?.currentStepIndex]);



  return (
    <div
      ref={stepperRef}
      className='stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid'
      id='kt_create_account_stepper'
    >
      {/* begin::Aside*/}
      <div className='card d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px w-xxl-400px me-9'>
        {/* begin::Wrapper*/}
        <div className='card-body px-6 px-lg-10 px-xxl-15 py-20'>
          {/* begin::Nav*/}
          <div className='stepper-nav'>

            {/* begin::Step 1*/}
            <div className='stepper-item current' data-kt-stepper-element='nav'>
              {/* begin::Wrapper*/}
              <div className='stepper-wrapper'>
                {/* begin::Icon*/}
                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>0</span>
                </div>
                {/* end::Icon*/}

                {/* begin::Label*/}
                <div className='stepper-label'>
                  <h3 className='stepper-title'>Registro de Empresas</h3>

                  <div className='stepper-desc fw-semibold'>Seleccionar tipo de registro</div>
                </div>
                {/* end::Label*/}
              </div>
              {/* end::Wrapper*/}

              {/* begin::Line*/}
              <div className='stepper-line h-40px'></div>
              {/* end::Line*/}
            </div>
            {/* end::Step 1*/}

            {/* begin::Step 2*/}
            <div className='stepper-item' data-kt-stepper-element='nav'>
              {/* begin::Wrapper*/}
              <div className='stepper-wrapper'>
                {/* begin::Icon*/}
                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>1</span>
                </div>
                {/* end::Icon*/}

                {/* begin::Label*/}
                <div className='stepper-label'>
                  <h3 className='stepper-title'>Carga de documentos</h3>
                  <div className='stepper-desc fw-semibold'>Carga todos tus archivos</div>
                </div>
                {/* end::Label*/}
              </div>
              {/* end::Wrapper*/}
              
              {/* begin::Line*/}
              <div className='stepper-line h-40px'></div>
              {/* end::Line*/}
            </div>
            {/* end::Step 2*/}


            {/* begin::Step 2*/}
            <div className='stepper-item' data-kt-stepper-element='nav'>
              {/* begin::Wrapper*/}
              <div className='stepper-wrapper'>
                {/* begin::Icon*/}
                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>2</span>
                </div>
                {/* end::Icon*/}

                {/* begin::Label*/}
                <div className='stepper-label'>
                  <h3 className='stepper-title'>Cédula RFC</h3>
                  <div className='stepper-desc fw-semibold'>Carga de Cédula RFC</div>
                </div>
                {/* end::Label*/}
              </div>
              {/* end::Wrapper*/}
              
              {/* begin::Line*/}
              <div className='stepper-line h-40px'></div>
              {/* end::Line*/}
            </div>
            {/* end::Step 2*/}
            

            {/* begin::Step 3*/}
            <div className='stepper-item' data-kt-stepper-element='nav'>
              {/* begin::Wrapper*/}
              <div className='stepper-wrapper'>
                {/* begin::Icon*/}
                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>3</span>
                </div>
                {/* end::Icon*/}

                {/* begin::Label*/}
                <div className='stepper-label'>
                  <h3 className='stepper-title'>Certificado FIEL</h3>
                  <div className='stepper-desc fw-semibold'>Carga de Certificado</div>
                </div>
                {/* end::Label*/}
              </div>
              {/* end::Wrapper*/}

              {/* begin::Line*/}
              <div className='stepper-line h-40px'></div>
              {/* end::Line*/}
            </div>
            {/* end::Step 3*/}

            {/* begin::Step 4*/}
            <div className='stepper-item' data-kt-stepper-element='nav'>
              {/* begin::Wrapper*/}
              <div className='stepper-wrapper'>
                {/* begin::Icon*/}
                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>4</span>
                </div>
                {/* end::Icon*/}

                {/* begin::Label*/}
                <div className='stepper-label'>
                  <h3 className='stepper-title'>Comprobante de domicilio</h3>
                  <div className='stepper-desc fw-semibold'>Carga de datos domiciliarios</div>
                </div>
                {/* end::Label*/}
              </div>
              {/* end::Wrapper*/}

              {/* begin::Line*/}
              <div className='stepper-line h-40px'></div>
              {/* end::Line*/}
            </div>
            {/* end::Step 4*/}


            {/* begin::Step 5*/}
            <div className='stepper-item' data-kt-stepper-element='nav'>
              {/* begin::Wrapper*/}
              <div className='stepper-wrapper'>
                {/* begin::Icon*/}
                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>5</span>
                </div>
                {/* end::Icon*/}

                {/* begin::Label*/}
                <div className='stepper-label'>
                  <h3 className='stepper-title'>Acta Constitutiva</h3>
                  <div className='stepper-desc fw-semibold'>Carga del acta constitutiva</div>
                </div>
                {/* end::Label*/}
              </div>
              {/* end::Wrapper*/}

              {/* begin::Line*/}
              <div className='stepper-line h-40px'></div>
              {/* end::Line*/}
            </div>
            {/* end::Step 5*/}


           {/* begin::Step 6*/}
           <div className='stepper-item' data-kt-stepper-element='nav'>
              {/* begin::Wrapper*/}
              <div className='stepper-wrapper'>
                {/* begin::Icon*/}
                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>6</span>
                </div>
                {/* end::Icon*/}

                {/* begin::Label*/}
                <div className='stepper-label'>
                  <h3 className='stepper-title'>Accionaria</h3>
                  <div className='stepper-desc fw-semibold'>Tabla Accionaria</div>
                </div>
                {/* end::Label*/}
              </div>
              {/* end::Wrapper*/}

              {/* begin::Line*/}
              <div className='stepper-line h-40px'></div>
              {/* end::Line*/}
            </div>
            {/* end::Step 6*/}

              {/* begin::Step 7*/}
           <div className='stepper-item' data-kt-stepper-element='nav'>
              {/* begin::Wrapper*/}
              <div className='stepper-wrapper'>
                {/* begin::Icon*/}
                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>7</span>
                </div>
                {/* end::Icon*/}

                {/* begin::Label*/}
                <div className='stepper-label'>
                  <h3 className='stepper-title'>Accionaria 2</h3>
                  <div className='stepper-desc fw-semibold'>Tabla Accionaria</div>
                </div>
                {/* end::Label*/}
              </div>
              {/* end::Wrapper*/}

              {/* begin::Line*/}
              <div className='stepper-line h-40px'></div>
              {/* end::Line*/}
            </div>
            {/* end::Step 7*/}

          {/* begin::Step 8*/}
           <div className='stepper-item' data-kt-stepper-element='nav'>
              {/* begin::Wrapper*/}
              <div className='stepper-wrapper'>
                {/* begin::Icon*/}
                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>8</span>
                </div>
                {/* end::Icon*/}

                {/* begin::Label*/}
                <div className='stepper-label'>
                  <h3 className='stepper-title'>Accionaria 3</h3>
                  <div className='stepper-desc fw-semibold'>Tabla Accionaria</div>
                </div>
                {/* end::Label*/}
              </div>
              {/* end::Wrapper*/}

              {/* begin::Line*/}
              <div className='stepper-line h-40px'></div>
              {/* end::Line*/}
            </div>
            {/* end::Step 8*/}

               {/* begin::Step 9*/}
            <div className='stepper-item' data-kt-stepper-element='nav'>
              {/* begin::Wrapper*/}
              <div className='stepper-wrapper'>
                {/* begin::Icon*/}
                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>9</span>
                </div>
                {/* end::Icon*/}

                {/* begin::Label*/}
                <div className='stepper-label'>
                  <h3 className='stepper-title'>Representante Legal</h3>
                  <div className='stepper-desc fw-semibold'>administrador</div>
                </div>
                {/* end::Label*/}
              </div>
              {/* end::Wrapper*/}

              {/* begin::Line*/}
              <div className='stepper-line h-40px'></div>
              {/* end::Line*/}
            </div>
            {/* end::Step 9*/}


            {/* begin::Step 10*/}
            <div className='stepper-item' data-kt-stepper-element='nav'>
              {/* begin::Wrapper*/}
              <div className='stepper-wrapper'>
                {/* begin::Icon*/}
                <div className='stepper-icon w-40px h-40px'>
                  <i className='stepper-check fas fa-check'></i>
                  <span className='stepper-number'>10</span>
                </div>
                {/* end::Icon*/}

                {/* begin::Label*/}
                <div className='stepper-label'>
                  <h3 className='stepper-title'>Datos del Contacto</h3>
                  <div className='stepper-desc fw-semibold'>Registra la información del usuario</div>
                </div>
                {/* end::Label*/}
              </div>
              {/* end::Wrapper*/}
            </div>
            {/* end::Step 10*/}
          </div>
          {/* end::Nav*/}
        </div>
        {/* end::Wrapper*/}
      </div>
      {/* begin::Aside*/}


      <div className='d-flex flex-row-fluid flex-center bg-body rounded'>

            <form className='py-20 w-100 w-xl-700px px-9' noValidate id='kt_create_account_form' onSubmit={submitStep}>
              
                
              <div className='current' data-kt-stepper-element='content'>
                <Step0 />
              </div>

              <div data-kt-stepper-element='content'>
                <Step1 />
              </div> 

              <div data-kt-stepper-element='content'>
                <Step2 handleInputChange={handleInputChange}/>
              </div>

              <div data-kt-stepper-element='content'>
                <Step3 />
              </div>

              <div data-kt-stepper-element='content'>
                <Step4 />
              </div>

              <div data-kt-stepper-element='content'>
                <Step5 />
              </div>

              <div data-kt-stepper-element='content'>
                <Step6 />
              </div>

              <div data-kt-stepper-element='content'>
                <Step7 />
              </div>

             <div data-kt-stepper-element='content'>
                <Step8 />
              </div>

              <div data-kt-stepper-element='content'>
                <Step9 />
              </div>

              <div data-kt-stepper-element='content'>
                <Step10 />
              </div> 


              <div className='d-flex flex-stack pt-10'>
                <div className='mr-2'>
                  <button
                    onClick={prevStep}
                    type='button'
                    className='btn btn-lg btn-light-primary me-3'
                    data-kt-stepper-action='previous'
                  >
                    <KTIcon iconName='arrow-left' className='fs-4 me-1' />
                    Atras
                  </button>
                </div>

              
                         <div>
                  <button type='submit' className='btn btn-lg btn-primary me-3'>
                    <span className='indicator-label'>
                      {stepper.current?.currentStepIndex !==
                        stepper.current?.totalStepsNumber!  && 'Continuar'}
                      {stepper.current?.currentStepIndex ===
                        stepper.current?.totalStepsNumber!  && 'Completar'}
                      <KTIcon iconName='arrow-right' className='fs-3 ms-2 me-0' />
                    </span>
                  </button>
                </div>
                
                
                </div>
           
            </form>

      </div>
    </div>
  )
}

export {Vertical}
