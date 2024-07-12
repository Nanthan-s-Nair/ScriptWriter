"use client"

import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/Templatelist'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import send from '../../../../components/send.png'
import { Loader2Icon } from 'lucide-react'

interface PROPS {
    reqtemp?: TEMPLATE
    userinp:any
    loading:boolean
}

function Inputsec({ reqtemp,userinp,loading }: PROPS) {

  const[fdata,setfdata]=useState<any>();

  const handle=(ev:any)=>{
    const {name,value}=ev.target;
    setfdata({...fdata,[name]:value})
  }

  const onSubmit=(e:any)=>{
    e.preventDefault();
    userinp(fdata)
  }

  return (
    <div className='p-5 shadow-md border rounded-lg'>
      {/* @ts-ignore */}
      <Image src={reqtemp?.icon} alt='iconz' height={70} width={70} />
      <h2 className='font-bold text-2xl mb-2 text-blue-700'>{reqtemp?.name}</h2>

      <form onSubmit={onSubmit}>
        {reqtemp?.form?.map((item, index) => (
          <div key={index} className='my-2 flex flex-col gap-2 mb-7'>
            <label>{item.label}</label>
            {item.field == 'input' ?
              <Input name={item.name} required={item.required} onChange={handle}/> :
              item.field == 'textarea' ?
              <Textarea name={item.name} required={item.required} onChange={handle}/> : null
            }
          </div>
        ))}
        <Button type='submit' disabled={loading} className='bg-transparent'>
          {loading&&<Loader2Icon className='animate-spin'/>}
          <Image src={send} alt='send img' height={50} width={50}/>
        </Button>
      </form>
    </div>
  )
}

export default Inputsec