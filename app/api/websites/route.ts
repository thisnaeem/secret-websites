import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export const runtime = 'nodejs' // add this line

export async function GET() {
  try {
    const websites = await prisma.website.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return NextResponse.json({ data: websites });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: "Failed to fetch websites" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const website = await prisma.website.create({
      data: {
        title: body.title,
        url: body.url,
        description: body.description,
        category: body.category,
      }
    });
    
    return NextResponse.json({ data: website }, { status: 201 });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: "Failed to add website" },
      { status: 500 }
    );
  }
}