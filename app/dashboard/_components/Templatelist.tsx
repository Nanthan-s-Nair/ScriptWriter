import Templates from '@/app/(data)/Template'
import React, { useEffect, useState } from 'react'
import Templatecard from './Templatecard'
import { StaticImageData } from 'next/image'

export interface TEMPLATE {
    name: string,
    desc: string,
    icon: StaticImageData, 
    case: string,
    slug: string,
    prompt: string,
    form?: FORM[]
}

export interface FORM {
    label: string,
    field: string,
    name: string,
    required?: boolean
}

function Templatelist({ userinput }: any) {
    const [templist, settemplist] = useState(Templates)
    
    useEffect(() => {
        if (userinput) {
            const filterdata = Templates.filter(item => item.name.toLowerCase().includes(userinput.toLowerCase()));
            settemplist(filterdata);
        } else {
            settemplist(Templates);
        }
    }, [userinput])

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {templist.map((item: TEMPLATE) => (
                <Templatecard {...item} key={item.slug} />
            ))}
        </div>
    )
}

export default Templatelist