import { useState } from "react";

// Definir una interfaz para el tipo de datos devuelto por el hook 'useForm'
interface FormValues {
    [key: string]: string;
  }
  
  // Usar la interfaz en el hook 'useForm'
  export const useForm = (initialState: FormValues = {}): [FormValues, (event: React.ChangeEvent<HTMLInputElement>) => void, () => void] => {
    const [values, setValues] = useState<FormValues>(initialState);
  
    const reset = () => {
      setValues(initialState);
    };
  
    const handleInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setValues({
        ...values,
        [target.name]: target.value,
      });
    };
  
    return [values, handleInputChange, reset];
  };
  