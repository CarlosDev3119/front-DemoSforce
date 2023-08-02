/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect} from 'react'
import {Outlet, Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../_metronic/helpers'

const AuthLayout = () => {
  useEffect(() => {
    const root = document.getElementById('root')
    if (root) {
      root.style.height = '100%'
    }
    return () => {
      if (root) {
        root.style.height = 'auto'
      }
    }
  }, [])

  return (
    <div className='d-flex flex-column flex-lg-row flex-column-fluid h-100'>
      {/* begin::Body */}
      <div className='d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1'>
        {/* begin::Form */}
        <div className='d-flex flex-center flex-column flex-lg-row-fluid'>
          {/* begin::Wrapper */}
          <div className='w-lg-500px p-10'>
            <Outlet />
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Form */}

        {/* begin::Footer */}
        <div className='d-flex flex-center flex-wrap px-5'>
          {/* begin::Links */}
          <div className='d-flex fw-semibold text-primary fs-base'>
            <a href='#' className='px-5' target='_blank'>
              Terms
            </a>

            <a href='#' className='px-5' target='_blank'>
              Plans
            </a>

            <a href='#' className='px-5' target='_blank'>
              Contact Us
            </a>
          </div>
          {/* end::Links */}
        </div>
        {/* end::Footer */}
      </div>
      {/* end::Body */}

      {/* begin::Aside */}
      <div
        className='d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center order-1 order-lg-2'
        style={{backgroundImage: `url(${toAbsoluteUrl('/media/misc/bg-login.png')})`}}
      >
        {/* begin::Content */}
        <div className='d-flex flex-column flex-center py-15 px-5 px-md-15 w-100'>
          {/* begin::Logo */}
          <Link to='/' className='mb-10'>
            <img alt='Logo' src={toAbsoluteUrl('/media/misc/sforce-login.png')} className='h-120px' />
          </Link>
          {/* end::Logo */}


          {/* begin::Text */}
          <div className='text-white fs-base text-center'>
              Nuestro equipo está integrado por colaboradores altamente comprometidos con el éxito de nuestros{' '}
              <a href='#' className='opacity-75-hover text-warning fw-bold me-1'>
                clientes.
              </a>
              Nuestro enfoque principal es ayudar a nuestros clientes a transformar sus operaciones 
              actuales para llevarlos a un modelo digital, donde los asistentes virtuales permitan que los 
              colaboradores se enfoquen en actividades de mayor valor dentro de su rol, para que las actividades repetitivas, de alto volumen, 
              bajo valor, pero aún necesarias, sean realizadas por asistentes virtuales.
        
           
          </div>
          {/* end::Text */}
        </div>
        {/* end::Content */}
      </div>
      {/* end::Aside */}
    </div>
  )
}

export {AuthLayout}
