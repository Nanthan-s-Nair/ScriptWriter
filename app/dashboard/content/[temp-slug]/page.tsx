"use client"
import React, { use, useState } from 'react'
import Inputsec from '../_components/Inputsec'
import Outputsec from '../_components/Outputsec'
import { TEMPLATE } from '../../_components/Templatelist'
import Template from '@/app/(data)/Template'
import { chatSession } from '@/utils/Model'
import { db } from '@/utils/Db'
import { AIOutput } from '@/utils/Schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment' 

interface PROPS {
    params: {
        'temp-slug': string
    }
}

const Cc: React.FC<PROPS> = (props) => {
    const reqtemp: TEMPLATE | undefined = Template?.find((item) => item.slug === props.params['temp-slug']);
    const [loading, setLoading] = useState(false);
    const [aiout, setAiout] = useState<string>('');
    const { user } = useUser();

    const Aicontent = async (fdata: any) => {
        setLoading(true);
        const sele = reqtemp?.prompt;
        const finalprom = JSON.stringify(fdata) + "," + sele;
        const result = await chatSession.sendMessage(finalprom);
        console.log(result.response.text());
        setAiout(result?.response.text());
        await savedb(fdata, reqtemp?.slug, result?.response.text());
        setLoading(false);
    }

    const savedb = async (fdata: any, slug: any, aiout: string) => {
        const result = await db.insert(AIOutput).values({
            formData: fdata,
            templateSlug: slug,
            aiResponse: aiout,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            createdAt: moment().format('DD/MM/yyyy'),
        })
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5 bg-slate-100'>
            <Inputsec reqtemp={reqtemp} userinp={(r: any) => Aicontent(r)} loading={loading}/>
            <div className='col-span-2'><Outputsec aiout={aiout}/></div>
        </div>
    )
}

export default Cc;