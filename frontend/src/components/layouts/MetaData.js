import React from 'react'
import {Helmet} from 'react-helmet'

const MetaData = ({title})=>{
    return (
        <Helmet>
            <title>{`${title}-Developed By Anik Saha`}</title>
        </Helmet>
    )
}

export default MetaData
