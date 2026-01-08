"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Send,
  ArrowUpRight,
  Calendar,
  X,
} from "lucide-react";

// --- Configuration ---
const PathOptions = [
  {
    id: "A",
    text: "I want to hire you for my company",
    sub: "Full-time, Part-time, or Contract roles",
  },
  {
    id: "B",
    text: "I need your help as a contractor to finish a project",
    sub: "Short-term collaboration or specific task",
  },
  {
    id: "C",
    text: "I want you to build something for me as a freelancer",
    sub: "Websites, Apps, Digital Products",
  },
];

const PathASteps = [
  {
    id: "role",
    question: "What Role are you looking to fill?*",
    type: "select",
    options: ["UX/UI Designer", "Product Designer", "Design Lead"],
  },
  {
    id: "companyName",
    question: "What is the name of the company?*",
    type: "text",
    placeholder: "Company Name Ltd.",
  },
  {
    id: "remote",
    question:
      "I can only work in a remote environment, does this work for you?*",
    type: "select",
    options: ["Yes", "No"],
  },
  {
    id: "contractType",
    question: "What type of contract are you offering?*",
    type: "select",
    options: ["Full-time", "Part-time", "Contract-based"],
  },
  {
    id: "budget",
    question: "What's your estimated budget or salary range for this role?*",
    type: "text",
    placeholder: "e.g. $80k - $120k / year",
  },
  {
    id: "extraInfo",
    question: "Anything else I should know about this opportunity?",
    type: "textarea",
    placeholder: "We are looking for someone who...",
    optional: true,
  },
];

const PathBSteps = [
  {
    id: "projectDesc",
    question: "Tell me a bit about your project",
    type: "textarea",
    placeholder: "We are building a platform that...",
  },
  {
    id: "projectType",
    question: "What type of project is this?*",
    type: "select",
    options: [
      "Website UI/UX design",
      "Web App or SaaS product",
      "Mobile app design",
      "E-commerce store",
      "Other",
    ],
  },
  {
    id: "stage",
    question: "What's the current stage of your project?*",
    type: "select",
    options: [
      "Just starting",
      "Wireframes ready",
      "Need UI Design Only",
      "Need both UX & UI",
      "Almost done, need final touches",
    ],
  },
  {
    id: "deadline",
    question: "Do you have a deadline for this project?",
    type: "date",
    optional: true,
  },
  {
    id: "budget",
    question: "What's your estimated budget for this project?*",
    type: "select",
    options: [
      "Under $5,000",
      "$5,000 - $10,000",
      "$10,000 - $20,000",
      "More than $20,000",
    ],
  },
  {
    id: "references",
    question: "Do you have any design references or inspirations?",
    type: "text",
    placeholder: "https://dribbble.com/...",
    optional: true,
  },
];

const PathCSteps = [
  {
    id: "buildType",
    question: "What are you looking to build?*",
    type: "select",
    options: [
      "A website",
      "A web application",
      "A mobile app",
      "A digital product",
      "Other",
    ],
  },
  {
    id: "designStatus",
    question: "Do you already have wireframes or designs?*",
    type: "select",
    options: [
      "No, I need everything from scratch",
      "Yes, but they need improvements",
      "Yes, and they are final",
    ],
  },
  {
    id: "features",
    question: "What features are essential for your project?",
    type: "textarea",
    placeholder: "User authentication, Payment gateway, Dashboard...",
  },
  {
    id: "budget",
    question: "What's your budget for this project?*",
    type: "select",
    options: [
      "Less than $5,000",
      "$5,000 - $10,000",
      "$10,000 - $20,000",
      "$20,000+",
    ],
  },
];

const FinalStep = [
  {
    id: "contactDetails",
    question: "How can I reach you?*",
    type: "contact",
  },
];

// --- Sub Components ---

const ProgressBar = ({ current, total }) => (
  <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100">
    <motion.div
      className="h-full bg-slate-900"
      initial={{ width: 0 }}
      animate={{ width: `${(current / total) * 100}%` }}
      transition={{ duration: 0.3 }}
    />
  </div>
);

const Navigation = ({ path, stepIndex, totalSteps, onBack }) => (
  <div className="flex justify-between items-center mb-8 mt-2">
    {path ? (
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </button>
    ) : (
      <div />
    )}
    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
      {path ? `Step ${stepIndex + 1} of ${totalSteps}` : "Start"}
    </div>
  </div>
);

// --- Main Wizard Component ---

export default function ContactWizard() {
  const [path, setPath] = useState(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const [direction, setDirection] = useState(1);
  const [showRejection, setShowRejection] = useState(false);
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error

  // Logic
  const getSubSteps = () => {
    if (path === "A") return PathASteps;
    if (path === "B") return PathBSteps;
    if (path === "C") return PathCSteps;
    return [];
  };

  const subSteps = getSubSteps();
  // +1 for final contact step
  const totalSteps = path ? subSteps.length + 1 : 1;

  const isSelectionStep = !path;
  const isFinalStep = path && stepIndex === subSteps.length;
  // Step Data
  let currentStepData = isSelectionStep
    ? { question: "What brings you here today?*" }
    : isFinalStep
    ? FinalStep[0]
    : subSteps[stepIndex];

  // Handlers
  const handleInputChange = (id, value) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleNext = () => {
    // 1. Check for Remote Logic (Path A, Step "remote")
    if (
      path === "A" &&
      currentStepData.id === "remote" &&
      formData["remote"] === "No"
    ) {
      setShowRejection(true);
      return;
    }

    setDirection(1);
    setStepIndex((prev) => prev + 1);
  };

  const handleSkip = () => {
    // Clear any data for this step if skipped? Or just leave undefined.
    setDirection(1);
    setStepIndex((prev) => prev + 1);
  };

  const handleBack = () => {
    setDirection(-1);
    if (showRejection) {
      setShowRejection(false);
      return;
    }
    if (stepIndex === 0 && path) {
      setPath(null);
      setStepIndex(0);
      setFormData({});
    } else {
      setStepIndex((prev) => prev - 1);
    }
  };

  const handlePathSelect = (selectedPath) => {
    setDirection(1);
    setPath(selectedPath);
    setStepIndex(0);
  };

  const handleSubmit = async (finalData) => {
    setStatus("submitting");
    const allData = { ...formData, ...finalData };

    try {
      const currentPathOption = PathOptions.find((p) => p.id === path);

      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formData: allData,
          path: path,
          pathText: currentPathOption
            ? currentPathOption.text
            : "Unknown Inquiry",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({});
      } else {
        console.error("Failed to send email");
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  // Rejection Screen
  if (showRejection) {
    return (
      <div className="bg-slate-50 p-6 md:p-10 rounded-[2.5rem] border border-slate-100 min-h-[500px] flex flex-col justify-center items-center text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
          <X className="w-8 h-8 text-red-500" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Remote Only</h3>
        <p className="text-slate-600 max-w-md mb-8 leading-relaxed">
          I appreciate your interest, but at this moment I am only available for
          <strong> remote</strong> opportunities. If that changes or if you are
          open to remote collaboration in the future, I&apos;d love to connect!
        </p>
        <button
          onClick={handleBack}
          className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors"
        >
          Go Back
        </button>
      </div>
    );
  }

  // Success Screen
  if (status === "success") {
    return (
      <div className="bg-slate-50 p-6 md:p-10 rounded-[2.5rem] border border-slate-100 min-h-[500px] flex flex-col justify-center items-center text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <Check className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Message Sent!
        </h3>
        <p className="text-slate-600 max-w-md mb-8 leading-relaxed">
          Thanks for reaching out! I&apos;ve received your inquiry and will get
          back to you within 48 hours.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setPath(null);
            setStepIndex(0);
          }}
          className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors"
        >
          Start New Inquiry
        </button>
      </div>
    );
  }

  // Error Screen
  if (status === "error") {
    return (
      <div className="bg-slate-50 p-6 md:p-10 rounded-[2.5rem] border border-slate-100 min-h-[500px] flex flex-col justify-center items-center text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
          <X className="w-8 h-8 text-red-500" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Something went wrong
        </h3>
        <p className="text-slate-600 max-w-md mb-8 leading-relaxed">
          I couldn&apos;t send your message. Please try again or email me
          directly at argzon01@gmail.com.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  // --- Render ---
  return (
    <div className="bg-slate-50 p-6 md:p-10 rounded-[2.5rem] border border-slate-100 min-h-[550px] flex flex-col relative overflow-hidden">
      {/* Loading Overlay */}
      {status === "submitting" && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
          <div className="w-10 h-10 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin mb-4"></div>
          <p className="font-bold text-slate-900">Sending message...</p>
        </div>
      )}

      {path && <ProgressBar current={stepIndex + 1} total={totalSteps} />}
      <Navigation
        path={path}
        stepIndex={stepIndex}
        totalSteps={totalSteps}
        onBack={handleBack}
      />

      <div className="flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={isSelectionStep ? "select" : stepIndex}
            custom={direction}
            initial={{ x: direction * 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction * -50, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
              {currentStepData.question}
            </h3>

            <div className="w-full">
              {/* --- PATH SELECTION --- */}
              {isSelectionStep && (
                <div className="flex flex-col gap-3">
                  {PathOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handlePathSelect(opt.id)}
                      className="text-left w-full p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-900 hover:shadow-lg transition-all group group-hover:scale-[1.01]"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-bold text-slate-900 text-lg">
                            {opt.text}
                          </p>
                          <p className="text-sm text-slate-500 mt-1">
                            {opt.sub}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-slate-900 transition-colors" />
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {/* --- MULTIPLE CHOICE --- */}
              {currentStepData.type === "select" && (
                <div className="flex flex-col gap-3">
                  {currentStepData.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        // State updates are async, so we use a temp var to check logic immediately
                        setFormData((prev) => ({
                          ...prev,
                          [currentStepData.id]: opt,
                        }));

                        // Check rejection logic immediately with the new value
                        if (
                          path === "A" &&
                          currentStepData.id === "remote" &&
                          opt === "No"
                        ) {
                          setShowRejection(true);
                        } else {
                          setTimeout(() => {
                            setDirection(1);
                            setStepIndex((prev) => prev + 1);
                          }, 50); // Small delay for visual feedback
                        }
                      }}
                      className={`text-left w-full p-5 rounded-xl border transition-all flex justify-between items-center ${
                        formData[currentStepData.id] === opt
                          ? "bg-slate-900 text-white border-slate-900"
                          : "bg-white border-slate-200 text-slate-900 hover:border-slate-400"
                      }`}
                    >
                      <span className="font-medium">{opt}</span>
                      {formData[currentStepData.id] === opt && (
                        <Check className="w-4 h-4" />
                      )}
                    </button>
                  ))}
                </div>
              )}

              {/* --- TEXT INPUT --- */}
              {currentStepData.type === "text" && (
                <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    value={formData[currentStepData.id] || ""}
                    onChange={(e) =>
                      handleInputChange(currentStepData.id, e.target.value)
                    }
                    placeholder={currentStepData.placeholder}
                    className="w-full bg-white px-6 py-5 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all text-lg"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleNext();
                    }}
                    autoFocus
                  />
                  <div className="flex gap-3">
                    <button
                      onClick={handleNext}
                      disabled={
                        !formData[currentStepData.id] &&
                        !currentStepData.optional
                      }
                      className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      Next <ArrowRight className="w-4 h-4" />
                    </button>
                    {currentStepData.optional && (
                      <button
                        onClick={handleSkip}
                        className="px-6 py-4 rounded-xl font-bold text-slate-500 hover:text-slate-900 transition-colors"
                      >
                        Skip
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* --- DATE INPUT (IMPROVED UI) --- */}
              {currentStepData.type === "date" && (
                <div className="flex flex-col gap-4">
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-slate-400 group-focus-within:text-slate-900 transition-colors" />
                    </div>
                    <input
                      type="date"
                      value={formData[currentStepData.id] || ""}
                      onChange={(e) =>
                        handleInputChange(currentStepData.id, e.target.value)
                      }
                      className="w-full bg-white pl-12 pr-6 py-5 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all text-lg appearance-none relative z-10"
                      autoFocus
                    />
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={handleNext}
                      // Disable if empty AND not optional
                      disabled={
                        !formData[currentStepData.id] &&
                        !currentStepData.optional
                      }
                      className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      Next <ArrowRight className="w-4 h-4" />
                    </button>
                    {currentStepData.optional && (
                      <button
                        onClick={handleSkip}
                        className="px-6 py-4 rounded-xl font-bold text-slate-500 hover:text-slate-900 transition-colors"
                      >
                        Skip
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* --- TEXTAREA --- */}
              {currentStepData.type === "textarea" && (
                <div className="flex flex-col gap-4">
                  <textarea
                    rows={6}
                    value={formData[currentStepData.id] || ""}
                    onChange={(e) =>
                      handleInputChange(currentStepData.id, e.target.value)
                    }
                    placeholder={currentStepData.placeholder}
                    className="w-full bg-white px-6 py-5 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all text-lg resize-none"
                    autoFocus
                  />
                  <div className="flex gap-3">
                    <button
                      onClick={handleNext}
                      disabled={
                        !formData[currentStepData.id] &&
                        !currentStepData.optional
                      }
                      className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      Next <ArrowRight className="w-4 h-4" />
                    </button>
                    {currentStepData.optional && (
                      <button
                        onClick={handleSkip}
                        className="px-6 py-4 rounded-xl font-bold text-slate-500 hover:text-slate-900 transition-colors"
                      >
                        Skip
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* --- FINAL CONTACT FORM --- */}
              {currentStepData.type === "contact" && (
                <ContactDetailsForm onSubmit={handleSubmit} />
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function ContactDetailsForm({ onSubmit }) {
  const [localData, setLocalData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
  });

  const handleChange = (field, val) => {
    setLocalData((prev) => ({ ...prev, [field]: val }));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name*"
          value={localData.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
          className="w-full bg-white px-5 py-4 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors"
        />
        <input
          type="text"
          placeholder="Last Name*"
          value={localData.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
          className="w-full bg-white px-5 py-4 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="email"
          placeholder="Email*"
          value={localData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="w-full bg-white px-5 py-4 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={localData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className="w-full bg-white px-5 py-4 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors"
        />
      </div>
      <input
        type="text"
        placeholder="Company (Optional)"
        value={localData.company}
        onChange={(e) => handleChange("company", e.target.value)}
        className="w-full bg-white px-5 py-4 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors"
      />

      <button
        onClick={() => onSubmit(localData)}
        disabled={
          !localData.firstName || !localData.lastName || !localData.email
        }
        className="mt-4 bg-slate-900 text-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 group w-full"
      >
        Send Request
        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </button>
    </div>
  );
}
