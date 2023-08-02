import { useDispatch, useSelector } from "react-redux"
import { onFinishLoading, onLoading, onSetData } from "../../store/dataSlice";
import controlApi from "../../api/controlApi";


export const useData = () => {

    const dispatch = useDispatch();

    const startGetData = async ( ) => {
        try{
            
            const { data } = await controlApi.get('/extractions');
            const idExtr = localStorage.getItem('idExtraccion');
            if(Number(idExtr) === data.data.idextracciones){
                dispatch( onLoading() );
                // console.log(idExtr, '-', data.data.idextracciones )

            }else{
                localStorage.setItem('idExtraccion', `${data.data.idextracciones}`)
                dispatch( onSetData( data.data ))
                dispatch( onFinishLoading() );
            }
      
          
        }catch(error){
            dispatch( onFinishLoading() );

            console.log(error);
        }
    }

    return {
        startGetData
    }


}