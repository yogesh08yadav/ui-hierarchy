import { ADD_MEMBER, ADD_MEM_BACK, ADD_MEM_DESIGN, ADD_MEM_HR, DEL_MEMBER, DEL_MEM_BACK, DEL_MEM_DESIGN,
     DEL_MEM_HR, EDITED_DATA_BACK, EDITED_DATA_DESIGN, EDITED_DATA_FRONT, EDITED_DATA_HR } from "./actionTypes"


const storeList = (storageName,firstElem) => {
        const frontendEngList = localStorage.getItem(storageName)
        let chat = [firstElem]
        if(frontendEngList) {
            chat = JSON.parse(frontendEngList)
        }
        return chat
    }

const initialState = {
    frontendEngList : storeList('frontend_list',{id: '007', name: "Yogesh Kumar", phone:'9012345621',email:'yogesh@gmail.com'}),
    backendEngList : storeList('backend_list',{id: '008', name: "Backend Kumar", phone:'9012356721',email:'backend@gmail.com'}),
    hrList : storeList('hr_list',{id: '009', name: "Hr Kumar", phone:'9019956721',email:'hr@gmail.com'}),
    designList : storeList('design_list',{id: '010', name: "Design Kumar", phone:'9012356231',email:'design@gmail.com'}),
}

export const hierarchyReducer = (state = initialState, {type, payload}) => {
    switch(type){

        case ADD_MEMBER:
            localStorage.setItem('frontend_list',JSON.stringify([...state.frontendEngList,payload]))
            return{
                ...state,
                frontendEngList: [...state.frontendEngList, payload]
            }

        case DEL_MEMBER:
            let updatedList = state.frontendEngList.filter((f) => f !== payload)
            localStorage.setItem('frontend_list',JSON.stringify(updatedList))
            return{
                ...state,
                frontendEngList: updatedList
            }
        
        case EDITED_DATA_FRONT:
            localStorage.setItem('frontend_list',JSON.stringify(payload))
            return{
                ...state,
                frontendEngList: payload
            }

        case ADD_MEM_BACK:
            localStorage.setItem('backend_list',JSON.stringify([...state.backendEngList,payload]))
                return{
                    ...state,
                    backendEngList: [...state.backendEngList, payload]
                }
    
        case DEL_MEM_BACK:
                let updatedListBack = state.backendEngList.filter((f) => f !== payload)
                localStorage.setItem('backend_list',JSON.stringify(updatedListBack))
                return{
                    ...state,
                    backendEngList: updatedListBack
                }

        case EDITED_DATA_BACK:
            localStorage.setItem('backend_list',JSON.stringify(payload))
                    return{
                        ...state,
                        backendEngList: payload
                    }

        case ADD_MEM_HR:
            localStorage.setItem('hr_list',JSON.stringify([...state.hrList,payload]))
            return{
                ...state,
                hrList : [...state.hrList, payload]
            }
        
        case DEL_MEM_HR:
                let updatedListHr = state.hrList.filter((f) => f !== payload)
                localStorage.setItem('hr_list',JSON.stringify(updatedListHr))
                return{
                    ...state,
                    hrList: updatedListHr
                }

        case EDITED_DATA_HR:
                localStorage.setItem('hr_list',JSON.stringify(payload))
                return{
                        ...state,
                        hrList: payload
                    }

        case ADD_MEM_DESIGN:
                localStorage.setItem('design_list',JSON.stringify([...state.designList,payload]))
                return{
                        ...state,
                        designList : [...state.designList, payload]
                    }

        case DEL_MEM_DESIGN:
                    let updatedListDesign = state.designList.filter((f) => f !== payload)
                    localStorage.setItem('design_list',JSON.stringify(updatedListDesign))

                    return{
                        ...state,
                        designList: updatedListDesign
                    }

        case EDITED_DATA_DESIGN:
                    localStorage.setItem('design_list',JSON.stringify(payload))
                        return{
                            ...state,
                            designList: payload
                        }
        
        default:
            return state
    }
}