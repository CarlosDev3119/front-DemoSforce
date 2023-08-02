/* eslint-disable react/jsx-no-target-blank */
import {useIntl} from 'react-intl'
import {SidebarMenuItemWithSub} from './SidebarMenuItemWithSub'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      {/* <SidebarMenuItem
        to='/dashboard'
        icon='element-11'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      /> */}
    
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Subida de Archivos</span>
        </div>
      </div>
      <SidebarMenuItemWithSub
        to='/crafted/pages'
        title='Carga de documentos'
        fontIcon='bi-archive'
        icon='element-plus'
      >
        <SidebarMenuItemWithSub to='/crafted/pages/wizards' title='Registro' hasBullet={true}>
    
          <SidebarMenuItem to='/crafted/pages/wizards/vertical' title='Carga de archivos' hasBullet={true} />

        </SidebarMenuItemWithSub>
      </SidebarMenuItemWithSub>
   
    </>
  )
}

export {SidebarMenuMain}
