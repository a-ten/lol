'use client'
import React, { useState } from 'react'
import { reqHeroList } from '@/app/api/route';
import { useEffect } from "react";
const getHeroList = async() => {
  let result:any = await reqHeroList()
  return result
}
  
export default function HeroList() {
    const [selected,setSelected] = useState<any>([])
  return (
    <div>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index}>This is div #{index + 1}</div>
      ))}
    </div>
  )
}
