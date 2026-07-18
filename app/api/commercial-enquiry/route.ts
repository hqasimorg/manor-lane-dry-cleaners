import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.businessName || !body.contactName || !body.email || !body.phone || !body.sector || !body.volume || !body.frequency || !body.requirements) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: Implement email sending with nodemailer
    console.log("Commercial enquiry:", body);

    return NextResponse.json(
      { success: true, message: "Enquiry received" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Commercial API error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
