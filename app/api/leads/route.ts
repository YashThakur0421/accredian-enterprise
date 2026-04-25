import { NextRequest, NextResponse } from "next/server";

interface LeadData {
  name: string;
  email: string;
  company: string;
  size: string;
  phone?: string;
  message?: string;
}

// In-memory store (replace with a real DB in production)
const leads: (LeadData & { createdAt: string; id: string })[] = [];

export async function POST(req: NextRequest) {
  try {
    const body: LeadData = await req.json();

    // Basic validation
    if (!body.name || !body.email || !body.company || !body.size) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      ...body,
      createdAt: new Date().toISOString(),
    };

    leads.push(lead);

    console.log("[Lead Captured]", lead);

    return NextResponse.json(
      {
        success: true,
        message: "Lead captured successfully",
        leadId: lead.id,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[Lead API Error]", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve leads (admin use)
export async function GET() {
  return NextResponse.json({
    total: leads.length,
    leads: leads.map((l) => ({
      id: l.id,
      name: l.name,
      email: l.email,
      company: l.company,
      size: l.size,
      createdAt: l.createdAt,
    })),
  });
}
