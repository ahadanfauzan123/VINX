import { useSession } from 'next-auth/react'
import { redirect } from 'next/dist/server/api-utils'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import AdminHeader from '../../components/adminlayout/AdminHeader'
import AdminUser from '../../components/adminlayout/AdminUser'
import Cards from '../../components/adminlayout/Cards'
import Chart from '../../components/adminlayout/Chart'
import Salary from '../../components/adminlayout/Salary'
import Table from '../../components/adminlayout/Table'
import Header from '../../components/layout/Header'

function Dashboard() {
    const {data:session} = useSession()
    const router = useRouter()
    useEffect(() => {
        if(session?.user?.email !== 'ahadanfauzan123@gmail.com') {
            router.push('/')
        }
    }, [])
  return (
    <div className='bg-theme'>
        {/* admin header */}
        <AdminHeader/>
        <div className='text-color grid grid-cols-4mobile:gid-cols-1 bg-transparent w-full max-w-6xl mx-auto p-5'>
            <div className='col-span-4 p-3 flex flex-col gap-y-8'>
                {/* cards */}
                <Cards/>
                {/* salary/times & also admin */}
                <div className='flex flex-col space-y-6 laptop:space-y-0 items-center laptop:flex-row justify-between mt-8 space-x-0 laptop:space-x-4'>
                    <Salary/>
                    <AdminUser/>

                </div>
                {/* charts */}
                <Chart />
                {/* history table */}
                <Table/>
                {/* product list limit + button */}
            </div>
            <div>
                {/* notification */}
            </div>
        </div>
    </div>
  )
}

export default Dashboard