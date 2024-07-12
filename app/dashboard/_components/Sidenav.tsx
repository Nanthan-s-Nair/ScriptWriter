"use client"
import React from 'react';
import Image from 'next/image';
import { Home, FileClock, Settings,Pickaxe } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Import useRouter from 'next/navigation'

function Sidenav() {
    const Menulist = [
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard'
        },
        {
            name: 'History',
            icon: FileClock,
            path: '/dashboard/history' 
        },
        {
            name: 'Settings',
            icon: Settings,
            path: '/dashboard/settings'
        },
    ];

    const router = useRouter(); // Use useRouter from next/navigation

    return (
        <div className='h-screen p-4 shadow-sm border'>
            <div className='flex justify-center border-b border-b-blue-600'>
                <Image src={'/logo.svg'} alt='logo' width={210} height={180} />
            </div>
            <div className='mt-7'>
                {Menulist.map((menu, index) => (
                    <div
                        key={index}
                        className={`flex gap-3 mb-3 p-3 hover:bg-violet-500 hover:text-white rounded-lg cursor-pointer items-center`}
                        onClick={() => router.push(menu.path)}
                    >
                        <menu.icon className='h-7 w-6' />
                        <h2 className='text-lg'>{menu.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sidenav;
