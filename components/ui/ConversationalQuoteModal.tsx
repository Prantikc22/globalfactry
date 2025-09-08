import React, { useState } from "react";
import { Dialog, DialogContent, DialogOverlay, DialogTitle, DialogDescription } from "@radix-ui/react-dialog";
// VisuallyHidden polyfill for accessibility if import fails
const VisuallyHidden: React.FC<{children: React.ReactNode}> = ({children}) => (
  <span style={{position:'absolute',width:1,height:1,overflow:'hidden',clip:'rect(1px,1px,1px,1px)',whiteSpace:'nowrap'}}>{children}</span>
);

import GradientButton from "./button-1";

const SERVICES = [
  "Contract Manufacturing",
  "Jobwork",
  "Others",
];

export default function ConversationalQuoteModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [service, setService] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [about, setAbout] = useState("");
  const [driveLink, setDriveLink] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Steps: 0 = Welcome, 1 = Service, 2 = About, 3 = Contact, 4 = Drive, 5 = Review
  const next = () => setStep((s) => s + 1);
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Integrate with SheetDB API
    fetch('https://sheetdb.io/api/v1/twntf20f2fuq0', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        data: {
          Timestamp: new Date().toLocaleString(),
          Service: service,
          Requirement: about,
          Name: name,
          Company: company,
          Email: email,
          Phone: phone,
          DriveLink: driveLink,
          Status: 'New',
        }
      })
    }).then(() => {
      onClose();
      setSubmitted(false);
      setStep(0);
      setService(null);
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setAbout("");
      setDriveLink("");
    });
  };

  if (!open) return null;
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50" />
      <DialogContent className={`fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 bg-neutral-900/90 text-white rounded-3xl shadow-2xl p-10 flex flex-col gap-8 animate-fade-in border border-neutral-800 backdrop-blur-lg ${open ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-95'} transition-all duration-200`}>
        {/* Accessibility: Dialog Title and Description */}
        <DialogTitle asChild>
          <VisuallyHidden>
            {step === 0 && "Let's get started!"}
            {step === 1 && `Great, you're interested in ${service || ''}.`}
            {step === 2 && "How can we reach you?"}
            {step === 3 && "Do you have any files or drawings to share?"}
            {step === 4 && "Review your request"}
            {submitted && "Thank you!"}
          </VisuallyHidden>
        </DialogTitle>
        <DialogDescription asChild>
          <VisuallyHidden>
            {step === 0 && "What do you need help with today?"}
            {step === 1 && "Could you briefly describe your requirement?"}
            {step === 2 && "Please provide your contact details."}
            {step === 3 && "You can share a Google Drive link if you have any files."}
            {step === 4 && "Review all details before submitting."}
            {submitted && "Submission success message."}
          </VisuallyHidden>
        </DialogDescription>
        {/* Close (cross) button */}
        <button
          className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors text-2xl rounded-full bg-neutral-800/70 hover:bg-neutral-700 p-2 focus:outline-none shadow-md"
          aria-label="Close"
          type="button"
          onClick={onClose}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6L14 14M14 6L6 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
        {submitted ? (
          <div className="text-center py-12">
            <div className="text-2xl font-bold mb-2 text-blue-400">Thank you! 🎉</div>
            <div className="text-neutral-300 text-base">We’ll get back to you soon.</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {step === 0 && (
              <div className="space-y-6 text-center">
                <div className="text-2xl font-extrabold tracking-tight">Let's get started!</div>
                <div className="text-neutral-300 text-base">What do you need help with today?</div>
                <div className="flex justify-center gap-3 mt-6">
                  {SERVICES.map((svc) => (
                    <button
                      key={svc}
                      className={`px-5 py-2.5 rounded-xl border border-neutral-700 transition-all shadow-sm ${service === svc ? "bg-blue-600 text-white shadow-md hover:bg-blue-700 transition-all" : "bg-neutral-800 text-neutral-200 hover:bg-neutral-700/80 transition-all"}`}
                      onClick={() => {
                        setService(svc);
                        next();
                      }}
                    >
                      {svc}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {step === 1 && (
              <div className="space-y-6 text-center">
                <div className="text-xl font-semibold">Great, you're interested in <span className="text-blue-600">{service}</span>.</div>
                <div className="text-neutral-300 text-base">Could you briefly describe your requirement?</div>
                <textarea
                  className="w-full border border-neutral-700 rounded-xl px-4 py-3 mt-3 bg-neutral-800 text-neutral-100 placeholder-neutral-400 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  rows={3}
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  placeholder="E.g. CNC machining for 1000 parts, material: SS304, delivery in 2 months..."
                  required
                />
                <div className="flex justify-between mt-8 gap-4">
                  <button className="text-neutral-400 hover:text-blue-400 transition-colors" onClick={prev}>Back</button>
                  <GradientButton width="100px" height="40px" onClick={next}>Next</GradientButton>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-6 text-center">
                <div className="text-xl font-semibold">How can we reach you?</div>
                <div className="flex gap-3">
                  <input
                    className="border border-neutral-700 rounded-xl px-4 py-3 w-1/2 bg-neutral-800 text-neutral-100 placeholder-neutral-400 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input
                    className="border border-neutral-700 rounded-xl px-4 py-3 w-1/2 bg-neutral-800 text-neutral-100 placeholder-neutral-400 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                    placeholder="Company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <div className="flex gap-3">
                  <input
                    className="border border-neutral-700 rounded-xl px-4 py-3 w-1/2 bg-neutral-800 text-neutral-100 placeholder-neutral-400 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    className="border border-neutral-700 rounded-xl px-4 py-3 w-1/2 bg-neutral-800 text-neutral-100 placeholder-neutral-400 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="flex justify-between mt-8 gap-4">
                  <button className="text-neutral-400 hover:text-blue-400 transition-colors" onClick={prev}>Back</button>
                  <GradientButton width="100px" height="40px" onClick={next}>Next</GradientButton>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="space-y-6 text-center">
                <div className="text-xl font-semibold">Do you have any files or drawings to share?</div>
                <input
                  className="border border-neutral-700 rounded-xl px-4 py-3 w-full bg-neutral-800 text-neutral-100 placeholder-neutral-400 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  placeholder="Paste Google Drive link here (optional)"
                  value={driveLink}
                  onChange={(e) => setDriveLink(e.target.value)}
                />
                <div className="flex justify-between mt-8 gap-4">
                  <button className="text-neutral-400 hover:text-blue-400 transition-colors" onClick={prev}>Back</button>
                  <GradientButton width="100px" height="40px" onClick={next}>Next</GradientButton>
                </div>
              </div>
            )}
            {step === 4 && (
              <div className="space-y-6 text-center">
                <div className="text-xl font-semibold">Review your request</div>
                <div className="text-left text-neutral-200 bg-neutral-800/80 rounded-xl p-5 shadow-inner">
                  <div><b>Service:</b> {service}</div>
                  <div><b>About:</b> {about}</div>
                  <div><b>Name:</b> {name}</div>
                  <div><b>Company:</b> {company}</div>
                  <div><b>Email:</b> {email}</div>
                  <div><b>Phone:</b> {phone}</div>
                  <div><b>Drive Link:</b> {driveLink}</div>
                </div>
                <div className="flex justify-between mt-8 gap-4">
                  <button className="text-neutral-400 hover:text-blue-400 transition-colors" onClick={prev}>Back</button>
                  <button className="modernGradient rounded-full px-6 py-2 text-white font-semibold shadow-md hover:brightness-110 transition-all" type="submit" style={{minWidth:'140px',height:'40px'}}>Submit Request</button>
                </div>
              </div>
            )}
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
