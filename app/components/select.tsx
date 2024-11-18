'use client'
import React, { useState } from 'react'
import { reqHeroList } from '@/app/api/route';
import { useEffect } from "react";
const getHeroList = async() => {
  let result:any = await reqHeroList()
  return result
}
  
export default function Select() {
  const [pool,setPool] = useState<any>([])
  const listItems = pool.map(hero => <li key={hero.name} >{hero.name}</li>);
  useEffect(() => {
    getHeroList().then(res => {
      console.log(res)
      setPool(res.data.hero)
    })
  }, [])
  useEffect(() => {
    console.log(pool); // 这里会在pool更新后打印
  }, [pool]);
  return (
    <div>
      <ul>{ listItems }</ul>
    </div>
  )
}
