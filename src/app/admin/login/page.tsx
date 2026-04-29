"use client";

import dynamic from 'next/dynamic';

const AdminLoginContent = dynamic(() => import('./AdminLoginContent'), { 
  ssr: false,
  loading: () => <div className="min-h-screen flex items-center justify-center bg-[#FDF8F8]">
    <div className="w-16 h-16 rounded-full animate-pulse bg-[#E8C4C4]" />
  </div>
});

export default function AdminLoginPage() {
  return <AdminLoginContent />;
}
