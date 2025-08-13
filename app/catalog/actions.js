"use server";

import { promises as fs } from 'fs';
import path from 'path';

export async function GetProducts() {
	const filePath = path.join(process.cwd(), 'app/catalog/products.json');
	const fileContents = await fs.readFile(filePath, 'utf8');
	return JSON.parse(fileContents);
}