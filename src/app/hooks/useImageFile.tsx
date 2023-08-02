import axios from "axios";
import {  useEffect, useState } from "react";

import { useDispatch } from "react-redux"
import { onSetAccionaria, onSetAccionaria2, onSetAccionaria3, onSetActa, onSetComprobante, onSetFiel, onSetRfc } from "../../store/fileSlice";

export const useImageFile = () => {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [response, setResponse] = useState({nombre: ''});

    const dispatch = useDispatch()

    useEffect(() => {
      const sendFileToBackend = async () => {
          if (selectedFile) {
            const formData = new FormData();
            formData.append('archivo', selectedFile);
    
            try {
              const response = await axios.post('http://localhost:8000/api/uploads', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });
              setResponse(response.data)
              console.log('Respuesta del backend:', response.data);
              // Hacer algo con la respuesta del backend si es necesario
            } catch (error) {
              console.error('Error uploading image:', error);
            }
          }
        };
    
        if (selectedFile) {
          sendFileToBackend();
        }
      }, [selectedFile]);
  
    const handleFileChange = async (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        
          setSelectedFile(file);
          dispatch(onSetRfc(file.name))
        
      }
    }

      
    const handleFileChangeFIEL = async (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        
          setSelectedFile(file);
          dispatch(onSetFiel(file.name))
        
      }
    }


    const handleFileChangeActa = async (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        
          setSelectedFile(file);
          dispatch(onSetActa(file.name))
        
      }
    }

    const handleFileChangeComprobante = async (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        
          setSelectedFile(file);
          dispatch(onSetComprobante(file.name))
        
      }
    }

    const handleFileChangeAccionaria = async (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        
          setSelectedFile(file);
          dispatch(onSetAccionaria(file.name))
        
      }
    }
    

    const handleFileChangeAccionaria2 = async (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        
          setSelectedFile(file);
          dispatch(onSetAccionaria2(file.name))
        
      }
    }

    const handleFileChangeAccionaria3 = async (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        
          setSelectedFile(file);
          dispatch(onSetAccionaria3(file.name))
        
      }
    }
    

    return {
        handleFileChange,
        handleFileChangeFIEL,
        handleFileChangeActa,
        handleFileChangeComprobante,
        handleFileChangeAccionaria,
        handleFileChangeAccionaria2,
        handleFileChangeAccionaria3,
        previewImage,
        response,
    }
  
}