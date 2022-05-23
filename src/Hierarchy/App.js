import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import data from './components/Data'
import Header from './components/Header'
import Home from './components/Home'
import { addMemBack, addMember, addMemDesign, addMemHr, delMemBack, delMember, delMemDesign, delMemHr, editedBackData, editedDesignData, editedFrontData, editedHrData } from './redux/actions'
import ShowMembers from './components/ShowMembers'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const list = useSelector(state => state.hierarchReducer)

    const moveMember = () => {
        toast.warn("Cannot move the member as there is only one team")
    }

    return (
        <>
            <BrowserRouter>
                <Header />
                <div style={{ backgroundColor: '#3F3351', height: '100vh', color: 'azure', margin: '0px', padding: '0px', display: 'flex',overflow:'scroll' }}>
                    < Sidebar data={data} />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/engfrontend' element={<ShowMembers title="Frontend Team" list={list.frontendEngList} addMember={addMember} delMember={delMember} editedData={editedFrontData} moveMember={addMemBack} />} />
                        <Route path='/engbackend' element={<ShowMembers title="Backend Team" list={list.backendEngList} addMember={addMemBack} delMember={delMemBack} editedData={editedBackData} moveMember={addMember} />}  />
                        <Route path='/hr' element={<ShowMembers title="Recruitment Team" list={list.hrList} addMember={addMemHr} delMember={delMemHr} editedData={editedHrData} moveMember={moveMember} />} />
                        <Route path='/design' element={<ShowMembers title="Design Team" list={list.designList} addMember={addMemDesign} delMember={delMemDesign} editedData={editedDesignData} moveMember={moveMember} />} />
                    </Routes>
                </div>
            </BrowserRouter>
            <ToastContainer autoClose={1500} />
        </>
    )
}

export default App