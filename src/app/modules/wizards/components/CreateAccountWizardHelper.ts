import * as Yup from 'yup'

export interface ICreateAccount {
  inicio: string
  accountTeamSize: string
  rfc: string
  accountPlan: string
  serieName: string
  fechaEmision: string
  dateField: string
  businessDescription: string
  businessEmail: string
  direction: string
  holder: string
  expired: string
  cardExpiryYear: string
  cardCvv: string
  saveCard: string
  RazonSocial: string
  direccionFiscal: string
  fechaInscripcion: string
  actaNumber: string
  noteNumber: string
  dateConstitution: string
  altaDate: string
  activity: string
  curp: string
  namefull: string
  porcentaje: string
  curp2: string
  namefull2: string
  porcentaje2: string
  curp3: string
  namefull3: string
  porcentaje3: string
  namefull4: string
  curp4: string
}


const createAccountSchemas = [
  Yup.object({
    inicio: Yup.string().required().label('Account Type'),
  }),
  Yup.object({
    accountType2: Yup.string().label('Account Type'),
  }),
  Yup.object({
    rfc: Yup.string().label('RFC'),
    RazonSocial: Yup.string().label('Razón Social'),
    direccionFiscal: Yup.string().label('Dirección Fiscal'),
    fechaInscripcion: Yup.string().label('Fecha de Inscripción'),

  }),
  Yup.object({
    serieName: Yup.string().label('Numero de serie'),
    fechaEmision: Yup.string().label('Fecha de Emision'),
    dateField: Yup.string().label('Fecha de vigencia'),
    businessEmail: Yup.string().label('Contact Email'),
  }),
  Yup.object({
    direction: Yup.string().label('Dirección'),
    holder: Yup.string().label('Tituar'),
    expired: Yup.string().label('Expiration Month'),
    cardExpiryYear: Yup.string().label('Expiration Year'),
    cardCvv: Yup.string().label('CVV'),
  }),
  Yup.object({
    actaNumber: Yup.string().required().label('Número de acta'),
    noteNumber: Yup.string().required().label('Número de notaría'),
    dateConstitution: Yup.string().required().label('Fecha de constitucion'),
    altaDate: Yup.string().required().label('Fecha de alta'),
    activity: Yup.string().required().label('Actividad ó Giro'),
  }),
  Yup.object({
    curp: Yup.string().required().label('CURP'),
    namefull: Yup.string().required().label('Nombre completo '),
    porcentaje: Yup.string().required().label('% de Participacion'),
  }),
  Yup.object({
    curp2: Yup.string().required().label('CURP'),
    namefull2: Yup.string().required().label('Nombre completo '),
    porcentaje2: Yup.string().required().label('% de Participacion'),
  }),
  Yup.object({
    curp3: Yup.string().required().label('CURP'),
    namefull3: Yup.string().required().label('Nombre completo '),
    porcentaje3: Yup.string().required().label('% de Participacion'),
  }),
  Yup.object({
    curp4: Yup.string().required().label('CURP'),
    namefull4: Yup.string().required().label('Nombre completo '),
  }),
]

const inits = {
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

export {createAccountSchemas, inits}
