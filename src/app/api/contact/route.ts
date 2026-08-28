import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "src", "data");
const DATA_FILE = path.join(DATA_DIR, "submissions.json");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, requirement, message } = body;

    // Simple validation
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: "Company Name and Phone Number are required." },
        { status: 400 }
      );
    }

    const newSubmission = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      name,
      phone,
      email: email || "",
      requirement: requirement || "Distribution Panel",
      message: message || "",
    };

    // Ensure data directory exists
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }

    // Read existing submissions
    let submissions = [];
    if (fs.existsSync(DATA_FILE)) {
      try {
        const fileContent = fs.readFileSync(DATA_FILE, "utf-8");
        submissions = JSON.parse(fileContent);
      } catch (err) {
        console.error("Error reading submissions file, resetting database:", err);
      }
    }

    // Append new submission
    submissions.push(newSubmission);

    // Save back to file
    fs.writeFileSync(DATA_FILE, JSON.stringify(submissions, null, 2), "utf-8");

    // Output a direct alert in the server console
    console.log("\n==================================================");
    console.log("🚨 [ALERT] NEW TECHNICAL ENQUIRY SUBMITTED!");
    console.log(`👤 Name:       ${newSubmission.name}`);
    console.log(`📞 Phone:      ${newSubmission.phone}`);
    console.log(`📧 Email:      ${newSubmission.email}`);
    console.log(`⚙️ Requirement: ${newSubmission.requirement}`);
    console.log(`📝 Message:    ${newSubmission.message}`);
    console.log("==================================================\n");

    return NextResponse.json({
      success: true,
      message: "Form submission recorded successfully.",
      submission: newSubmission,
    });
  } catch (error: any) {
    console.error("Enquiry submission handler error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
