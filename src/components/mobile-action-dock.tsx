"use client";

import { Heart, MessageCircle } from "lucide-react";
import Link from "next/link";

export function MobileActionDock() {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] pb-safe">
            <div className="bg-white/90 backdrop-blur-lg border-t border-gray-200 p-3 pb-6 flex gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
                {/* Chat Button */}
                <button
                    onClick={() => window.open("https://wa.me/919371202875", "_blank")}
                    className="flex-1 flex items-center justify-center gap-2 bg-green-50 text-green-700 font-bold py-3 px-4 rounded-xl active:scale-95 transition-transform"
                >
                    <MessageCircle className="w-5 h-5" />
                    <span>Chat</span>
                </button>

                {/* Donate Button */}
                <Link
                    href="/donate"
                    className="flex-1 flex items-center justify-center gap-2 bg-yellow-500 text-black font-bold py-3 px-4 rounded-xl shadow-lg active:scale-95 transition-transform relative overflow-hidden"
                >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 z-0 flex translate-x-[-100%] animate-[shimmer_2s_infinite] items-center justify-center">
                        <div className="h-full w-14 bg-white/20 skew-x-[-20deg] blur-sm" />
                    </div>

                    <Heart className="w-5 h-5 fill-black/20" />
                    <span className="relative z-10">Donate Now</span>
                </Link>
            </div>
        </div>
    );
}
