// import {GET_DETAILS} from "./type"
import {GetApiDetails,DeleteApiDetails,PostApiDetails} from "../../API/axioRequest"

export const GetApiAction=()=>{
    return function(dispatch)
    {
        return GetApiDetails().then((res)=>{
            // console.log(res);
            dispatch({
                type:'GET_DETAILS',
                payload:res.data
            })
        })
    }
}

export const DeleteApiAction=(id)=>{
    return function(dispatch)
    {
        return DeleteApiDetails(id).then((res)=>{
            console.log(res);
            dispatch({
                type:'DELETE_DETAILS',
                payload:true,
            })
        })
    }
}
export const PostApiAction=(request)=>{
    return function(dispatch)
    {
        return PostApiDetails(request).then((res)=>{
            console.log("resonse from post data...",res);
            dispatch({
                type:'POST_DETAILS',
                payload:'',
            })
        })
    }
}