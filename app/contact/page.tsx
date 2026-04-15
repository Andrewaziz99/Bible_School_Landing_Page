"use client";

import React from 'react';
import { PageHero } from "@/components/ui/PageHero";
import { useLang } from "@/components/providers/LanguageProvider";
import { Button, Input, Card } from "@/components/ui";
import { CTASection } from "@/components/sections/CTASection";
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const { t } = useLang();

  const breadcrumbs = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.contact'), href: '/contact' }
  ];

  return (
    <>
      <PageHero 
        title={t('nav.contact')} 
        breadcrumbs={breadcrumbs} 
      />
      <section className="py-24 bg-slate-50 relative">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-1 space-y-6">
               <Card variant="elevated" className="p-8 border-none shadow-sm flex flex-col gap-6 h-full">
                  <div>
                    <h3 className="text-2xl font-black text-slate-800 mb-6">Contact Information</h3>
                    <p className="text-slate-600 mb-8">We would love to hear from you. Please reach out with any questions about our curricula or platform.</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                       <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                          <MapPin className="w-5 h-5" />
                       </div>
                       <div>
                         <h4 className="font-bold text-slate-900">Address</h4>
                         <p className="text-slate-600 text-sm mt-1">123 Street, Cairo, Egypt</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                          <Phone className="w-5 h-5" />
                       </div>
                       <div>
                         <h4 className="font-bold text-slate-900">Phone</h4>
                         <p className="text-slate-600 text-sm mt-1">+20 123 456 7890</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4">
                       <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                          <Mail className="w-5 h-5" />
                       </div>
                       <div>
                         <h4 className="font-bold text-slate-900">Email</h4>
                         <p className="text-slate-600 text-sm mt-1">contact@example.com</p>
                       </div>
                    </div>
                  </div>
               </Card>
            </div>
            
            <div className="lg:col-span-2">
               <Card variant="elevated" className="p-8 md:p-12 border-none shadow-md">
                 <h3 className="text-2xl font-black text-slate-800 mb-8">Send a Message</h3>
                 <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Message sent!"); }}>
                   <div className="grid md:grid-cols-2 gap-6">
                     <Input label="Full Name" placeholder="John Doe" required />
                     <Input label="Email Address" type="email" placeholder="john@example.com" required />
                   </div>
                   <Input label="Church Name" placeholder="St. Mark Coptic Orthodox Church" />
                   
                   <div className="flex flex-col gap-2">
                     <label className="text-sm font-bold text-slate-700">Message</label>
                     <textarea 
                       className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 min-h-[150px] focus:outline-none focus:border-teal-500 transition-colors resize-y" 
                       placeholder="How can we help you?"
                       required
                     />
                   </div>
                   
                   <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">
                      Send Message
                   </Button>
                 </form>
               </Card>
            </div>
            
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
