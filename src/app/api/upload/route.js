import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { getSortedImagesList } from '../../../helpers';

const getFilesFromUploads = () => {
  const directoryPath = path.join(__dirname, "../../../../../public/uploads/");
  const files = fs.readdirSync(directoryPath);

  return files;
};

export async function POST(req) {
  const formData = await req.formData();
  const formDataValues = Array.from(formData.values());

  // get the last image number
  const files = getFilesFromUploads();
  const sortedImagesList = getSortedImagesList(files);
  const lastFileName = sortedImagesList.at(-1);

  let lastIndex = lastFileName?.substring(
    lastFileName?.lastIndexOf("-") + 1, 
    lastFileName?.lastIndexOf(".")
  ) || 0;

  for (const file of formDataValues) {
    if (typeof file === 'object' && 'arrayBuffer' in file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const fileNumber = +lastIndex + 1;
      const fileExt = file.name.slice(file.name.lastIndexOf('.') + 1);
      const fileName = `${new Date().toISOString().split('T')[0].replace(/:/g, "-") + '-' + fileNumber + '.' + fileExt}`;

      // need this for don't get lastIndex from files any loop
      lastIndex = fileNumber 

      fs.writeFileSync(`public/uploads/${fileName}`, buffer);
    }
  }
  
  return NextResponse.json({ success: true });
}

export async function GET() {
  const files = getFilesFromUploads();
  
  return NextResponse.json(files);
}
