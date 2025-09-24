import React from 'react';

const BentoGrid = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-6 grid-rows-4 gap-4 h-[600px]">
          
          {/* Better Now Closer Card - Large top left */}
          <div className="col-span-3 row-span-2 bg-gray-100 rounded-2xl p-6 flex flex-col justify-center items-start">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">👨</span>
                </div>
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">👩</span>
                </div>
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">👦</span>
                </div>
              </div>
            </div>
            <h2 className="text-4xl font-bold text-green-700 leading-tight">
              better<br />
              now<br />
              closer
            </h2>
          </div>

          {/* Handshake Card - Top right */}
          <div className="col-span-3 row-span-1 bg-green-700 rounded-2xl p-6 flex items-center justify-center">
            <div className="text-white">
              <svg className="w-24 h-24" viewBox="0 0 100 100" fill="none">
                <path d="M20 50 C30 40, 70 40, 80 50 C70 60, 30 60, 20 50" 
                      stroke="currentColor" strokeWidth="3" fill="none"/>
                <circle cx="25" cy="45" r="3" fill="currentColor"/>
                <circle cx="75" cy="45" r="3" fill="currentColor"/>
              </svg>
            </div>
          </div>

          {/* Team Adaptation Card - Red card */}
          <div className="col-span-2 row-span-2 bg-red-600 rounded-2xl p-4 flex flex-col">
            <div className="bg-white rounded-lg p-4 mb-4">
              <div className="text-red-600 text-sm mb-1">24 Mar    09:00-10:00</div>
              <h3 className="text-red-600 text-lg font-bold mb-2">
                Team ✈️<br />Adaptation
              </h3>
              <div className="text-red-600 text-xs">HR grooming</div>
            </div>
          </div>

          {/* Sync Logo Card */}
          <div className="col-span-2 row-span-1 bg-gray-100 rounded-2xl p-6 flex items-center justify-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-600 rounded transform rotate-45"></div>
              <span className="text-3xl font-bold text-red-600">sync</span>
            </div>
          </div>

          {/* Bring People Together Card */}
          <div className="col-span-2 row-span-2 bg-gray-100 rounded-2xl p-4">
            <h3 className="text-red-600 text-2xl font-bold mb-2">
              Bring People<br />Together
            </h3>
            <div className="text-red-600 text-sm mb-4">[ sync.com ]</div>
            <div className="flex gap-2">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-xs">👨</span>
              </div>
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-xs">👦</span>
              </div>
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-xs">👩</span>
              </div>
            </div>
          </div>

          {/* Chat Messages Card - Bottom left */}
          <div className="col-span-2 row-span-1 bg-gray-100 rounded-2xl p-4">
            <div className="space-y-2">
              <div className="bg-green-600 text-white p-2 rounded-lg text-sm flex items-center gap-2">
                <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs">👩</span>
                Hi! Where are you?
              </div>
              <div className="bg-green-200 text-green-800 p-2 rounded-lg text-sm flex items-center gap-2">
                <span className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white text-xs">👨</span>
                I'll be in touch
              </div>
            </div>
          </div>

          {/* Video Call Card - Bottom center */}
          <div className="col-span-2 row-span-1 bg-green-700 rounded-2xl p-4 flex flex-col items-center justify-center">
            <div className="bg-gray-800 text-white p-2 rounded-lg mb-3 text-sm">
              I'll be in touch
            </div>
            <div className="flex gap-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-xs">👨</span>
              </div>
              <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center">
                <span className="text-xs">👩</span>
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-xs">👦</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
