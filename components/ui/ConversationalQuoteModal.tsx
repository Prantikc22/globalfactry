import React, { useState } from "react";
import { Dialog, DialogContent, DialogOverlay } from "@radix-ui/react-dialog";
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

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 bg-black/40 z-50" />
      <DialogContent className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl p-8 flex flex-col gap-6 animate-fade-in">
        {submitted ? (
          <div className="text-center py-12">
            <div className="text-2xl font-bold mb-2">Thank you! 🎉</div>
            <div className="text-gray-600">We’ll get back to you soon.</div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {step === 0 && (
              <div className="space-y-4 text-center">
                <div className="text-xl font-bold">Let's get started!</div>
                <div className="text-gray-600">What do you need help with today?</div>
                <div className="flex justify-center gap-3 mt-6">
                  {SERVICES.map((svc) => (
                    <button
                                           key={svc}
                      className={`px-4 py-2 rounded-lg border transition-all ${service === svc ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-blue-50"}`}
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
              <div className="space-y-4 text-center">
                <div className="text-lg font-semibold">Great, you're interested in <span className="text-blue-600">{service}</span>.</div>
                <div className="text-gray-600">Could you briefly describe your requirement?</div>
                <textarea
                  className="w-full border rounded-lg px-3 py-2 mt-3"
                  rows={3}
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  placeholder="E.g. CNC machining for 1000 parts, material: SS304, delivery in 2 months..."
                  required
                />
                <div className="flex justify-between mt-4">
                  <button className="text-gray-500" onClick={prev}>Back</button>
                  <GradientButton width="100px" height="40px" onClick={next}>Next</GradientButton>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="space-y-4 text-center">
                <div className="text-lg font-semibold">How can we reach you?</div>
                <div className="flex gap-3">
                  <input
                    className="border rounded-lg px-3 py-2 w-1/2"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input
                    className="border rounded-lg px-3 py-2 w-1/2"
                    placeholder="Company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <div className="flex gap-3">
                  <input
                    className="border rounded-lg px-3 py-2 w-1/2"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    className="border rounded-lg px-3 py-2 w-1/2"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <button className="text-gray-500" onClick={prev}>Back</button>
                  <GradientButton width="100px" height="40px" onClick={next}>Next</GradientButton>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="space-y-4 text-center">
                <div className="text-lg font-semibold">Do you have any files or drawings to share?</div>
                <input
                  className="border rounded-lg px-3 py-2 w-full"
                  placeholder="Paste Google Drive link here (optional)"
                  value={driveLink}
                  onChange={(e) => setDriveLink(e.target.value)}
                />
                <div className="flex justify-between mt-4">
                  <button className="text-gray-500" onClick={prev}>Back</button>
                  <GradientButton width="100px" height="40px" onClick={next}>Next</GradientButton>
                </div>
              </div>
            )}
            {step === 4 && (
              <div className="space-y-4 text-center">
                <div className="text-lg font-semibold">Review your request</div>
                <div className="text-left text-gray-700 bg-gray-50 rounded-lg p-4">
                  <div><b>Service:</b> {service}</div>
                  <div><b>About:</b> {about}</div>
                  <div><b>Name:</b> {name}</div>
                  <div><b>Company:</b> {company}</div>
                  <div><b>Email:</b> {email}</div>
                  <div><b>Phone:</b> {phone}</div>
                  <div><b>Drive Link:</b> {driveLink}</div>
                </div>
                <div className="flex justify-between mt-4">
                  <button className="text-gray-500" onClick={prev}>Back</button>
                  <button className="modernGradient rounded-full px-6 py-2 text-white font-semibold" type="submit" style={{minWidth:'140px',height:'40px'}}>Submit Request</button>
                </div>
              </div>
            )}
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
