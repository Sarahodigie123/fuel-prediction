'use client';
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function mainpage() {
    return (
      <div className="grid place-items-center h-screen">
        <div className="shadow-lg p-10 rounded-lg border-t-4 border-purple-400">
         
          <form
            onSubmit={(e) => {
              e.preventDefault();
              loginAPI();
            }}
            className="flex flex-col gap-3"
          >
            
           
  
           
            <Link href="/FuelQuoteForm" style={{ display: 'block', textAlign: 'center' }}>
             <span className="bg-purple-600 text-white font-bold cursor-pointer px-5 py-2 rounded-md hover:bg-purple-700 ">
            
            Get A Quote!
              
              </span>
              </Link>
           
            <Link href="/fuel_history" style={{ display: 'block', textAlign: 'center' }}>
             <span className="bg-purple-600 text-white font-bold cursor-pointer px-10 py-2 rounded-md hover:bg-purple-700 ">
            
            
              History
              </span>
              </Link>
              <Link href="/profile" style={{ display: 'block', textAlign: 'center' }}>
             <span className="bg-purple-600 text-white font-bold cursor-pointer px-3 py-2 rounded-md hover:bg-purple-700 ">
            
            
              Manage Profile
              </span>
              </Link>  
              <Link href="/login" style={{ display: 'block', textAlign: 'center' }}>
             <span className="bg-purple-600 text-white font-bold cursor-pointer px-10 py-2 rounded-md hover:bg-purple-700 ">
            
            
              Log out
              </span>
              </Link>             
          </form>
        </div>
      </div>
    );
  }
  

