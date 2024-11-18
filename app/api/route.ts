import { NextResponse } from "next/server"
import request from "../utils/request";

export const reqHeroList = () => request.get('//game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js')
export async function GET(request: Request) {
}
export async function POST(request: Request) {
    console.log('post')
    const date = await request.json()
    const r = await request.json()
    return NextResponse.json({
        code: 0,
        message: '添加成功',
    })
}