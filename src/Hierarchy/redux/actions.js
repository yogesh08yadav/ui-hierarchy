import { ADD_MEMBER, ADD_MEM_BACK, ADD_MEM_DESIGN, ADD_MEM_HR, DEL_MEMBER, DEL_MEM_BACK, DEL_MEM_DESIGN, DEL_MEM_HR, EDITED_DATA_BACK, EDITED_DATA_DESIGN, EDITED_DATA_FRONT, EDITED_DATA_HR } from "./actionTypes"

export const addMember = (data) => {
    return{
        type: ADD_MEMBER,
        payload: data
    }
}

export const delMember = (data) => {
    return{
        type: DEL_MEMBER,
        payload: data
    }
}

export const addMemBack = (data) => {
    return{
        type: ADD_MEM_BACK,
        payload: data
    }
}

export const delMemBack = (data) => {
    return{
        type: DEL_MEM_BACK,
        payload: data
    }
}

export const editedFrontData = (data) => {
    return{
        type: EDITED_DATA_FRONT,
        payload: data
    }
}

export const editedBackData = (data) => {
    return{
        type: EDITED_DATA_BACK,
        payload: data
    }
}

export const addMemHr = (data) => {
    return{
        type: ADD_MEM_HR,
        payload: data
    }
}

export const delMemHr = (data) => {
    return{
        type: DEL_MEM_HR,
        payload: data
    }
}

export const editedHrData = (data) => {
    return{
        type: EDITED_DATA_HR,
        payload: data
    }
}

export const addMemDesign = (data) => {
    return{
        type: ADD_MEM_DESIGN,
        payload: data
    }
}

export const delMemDesign = (data) => {
    return{
        type: DEL_MEM_DESIGN,
        payload: data
    }
}

export const editedDesignData = (data) => {
    return{
        type: EDITED_DATA_DESIGN,
        payload: data
    }
}