import { NextResponse } from "next/server";

export function GET() {
	// return new Response(JSON.stringify({ name: 'John Doe' }),
	// 	{ headers: { 'Content-Type': 'application/json' } });

	return NextResponse.json({ name: 'John Doe' });
}