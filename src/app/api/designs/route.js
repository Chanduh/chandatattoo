import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const designUrls = await getDesigns();
    return NextResponse.json({ designs: designUrls });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to get new designs' }, { status: 500 });
  }
}

async function getDesigns() {
  const designsDirectory = path.join(process.cwd(), 'public/available');
  const designFiles = await fs.readdir(designsDirectory);
  const designUrls = designFiles.map((file) => `/available/${file}`);
  return designUrls;
}
