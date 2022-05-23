import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './style/sidebar.css'

const Sidebar = ({ data }) => {
    const [expand, isExpand] = useState(false)

    const showDetails = () => {
        isExpand(!expand)
    }

    if (data.isExpand) {
        return (
            <div className='sidebar'>
                <div className='rootSpan' >
                    <span className='sidebar_span' onClick={showDetails}>{data.name}</span>
                    <br />
                    <span  className='sidebar_span' onClick={showDetails}>
                        {expand ? '-' : '+'}
                    </span>
                </div>
                {
                    expand &&
                    <div style={{ paddingLeft: '15px' }}>
                        {data.item.map((elem, idx) => {
                            return <Sidebar key={idx} data={elem} />
                        })}
                    </div>
                }
            </div>
        )
    }
    else {
        return <NavLink to={data.path} style={{textDecoration:'none',color:'azure'}}>
           <span>{data.name}</span>
        </NavLink>
    }
}

export default Sidebar