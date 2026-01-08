import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { formData, path, pathText } = body;

    // Construct Email Content
    const emailContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px;">New Contact Inquiry</h1>
        <p style="color: #64748b; font-size: 16px;">
          You have received a new inquiry from your portfolio website wizard.
        </p>

        <div style="background-color: #f8fafc; padding: 16px; border-radius: 12px; margin: 24px 0;">
          <h3 style="margin-top: 0; color: #334155;">Inquiry Type:</h3>
          <p style="font-size: 18px; font-weight: bold; color: #0f172a; margin-bottom: 0;">${pathText}</p>
        </div>

        <h3 style="color: #334155;">Detailed Responses:</h3>
        <table style="width: 100%; border-collapse: collapse;">
          ${Object.entries(formData)
            .map(
              ([key, value]) => `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; width: 40%; font-weight: 500;">
                ${formatKey(key)}
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a;">
                ${value ? value.toString() : "N/A"}
              </td>
            </tr>
          `
            )
            .join("")}
        </table>

        <div style="margin-top: 32px; font-size: 12px; color: #94a3b8; text-align: center;">
          Sent from argzon.com Contact Wizard
        </div>
      </div>
    `;

    const data = await resend.emails.send({
      from: "Portfolio Wizard <onboarding@resend.dev>",
      to: ["argzon01@gmail.com"],
      subject: `New Inquiry: ${pathText}`,
      html: emailContent,
    });

    if (data.error) {
      return NextResponse.json({ error: data.error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Helper to make keys readable (camelCase to Title Case)
function formatKey(key) {
  // Map specific IDs to readable labels matching the wizard
  const labelMap = {
    role: "Role",
    companyName: "Company Name",
    remote: "Remote Work?",
    contractType: "Contract Type",
    budget: "Budget",
    extraInfo: "Extra Info",
    projectDesc: "Project Description",
    projectType: "Project Type",
    stage: "Project Stage",
    deadline: "Deadline",
    references: "References",
    buildType: "Build Type",
    designStatus: "Design Status",
    features: "Features",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone",
    company: "Company",
  };

  return labelMap[key] || key.replace(/([A-Z])/g, " $1").trim();
}
