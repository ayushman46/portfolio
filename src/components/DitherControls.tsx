import { useState } from "react";
import { Settings, X } from "lucide-react";

interface DitherControlsProps {
  waveColor: [number, number, number];
  colorNum: number;
  waveAmplitude: number;
  waveFrequency: number;
  waveSpeed: number;
  disableAnimation: boolean;
  enableMouseInteraction: boolean;
  mouseRadius: number;
  onWaveColorChange: (color: [number, number, number]) => void;
  onColorNumChange: (value: number) => void;
  onWaveAmplitudeChange: (value: number) => void;
  onWaveFrequencyChange: (value: number) => void;
  onWaveSpeedChange: (value: number) => void;
  onDisableAnimationChange: (value: boolean) => void;
  onEnableMouseInteractionChange: (value: boolean) => void;
  onMouseRadiusChange: (value: number) => void;
}

export default function DitherControls({
  waveColor,
  colorNum,
  waveAmplitude,
  waveFrequency,
  waveSpeed,
  disableAnimation,
  enableMouseInteraction,
  mouseRadius,
  onWaveColorChange,
  onColorNumChange,
  onWaveAmplitudeChange,
  onWaveFrequencyChange,
  onWaveSpeedChange,
  onDisableAnimationChange,
  onEnableMouseInteractionChange,
  onMouseRadiusChange,
}: DitherControlsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Settings Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-20 right-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all"
        title="Customize Background"
      >
        {isOpen ? <X size={20} className="text-white" /> : <Settings size={20} className="text-white" />}
      </button>

      {/* Settings Panel */}
      {isOpen && (
        <div className="fixed top-32 right-6 z-50 w-80 max-h-[70vh] overflow-y-auto bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 p-6">
          <h2 className="text-2xl font-bold text-white mb-6">Customize</h2>

          {/* Colors */}
          <div className="space-y-4 mb-6">
            <h3 className="text-sm font-semibold text-white/80 mb-3">Colors</h3>
            
            <div className="grid grid-cols-3 gap-3">
              {/* Red */}
              <div className="bg-gray-800/60 rounded-xl p-4">
                <label className="text-sm text-white/70 block mb-2">Red</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={waveColor[0]}
                  onChange={(e) => onWaveColorChange([parseFloat(e.target.value), waveColor[1], waveColor[2]])}
                  className="w-full accent-red-500"
                />
                <span className="text-xs text-white/60 mt-1 block text-right">{waveColor[0].toFixed(2)}</span>
              </div>

              {/* Green */}
              <div className="bg-gray-800/60 rounded-xl p-4">
                <label className="text-sm text-white/70 block mb-2">Green</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={waveColor[1]}
                  onChange={(e) => onWaveColorChange([waveColor[0], parseFloat(e.target.value), waveColor[2]])}
                  className="w-full accent-green-500"
                />
                <span className="text-xs text-white/60 mt-1 block text-right">{waveColor[1].toFixed(2)}</span>
              </div>

              {/* Blue */}
              <div className="bg-gray-800/60 rounded-xl p-4">
                <label className="text-sm text-white/70 block mb-2">Blue</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={waveColor[2]}
                  onChange={(e) => onWaveColorChange([waveColor[0], waveColor[1], parseFloat(e.target.value)])}
                  className="w-full accent-blue-500"
                />
                <span className="text-xs text-white/60 mt-1 block text-right">{waveColor[2].toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Color Intensity */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm text-white/80">Color Intensity</label>
              <span className="text-sm text-white/60">{colorNum}</span>
            </div>
            <input
              type="range"
              min="2"
              max="16"
              step="1"
              value={colorNum}
              onChange={(e) => onColorNumChange(parseInt(e.target.value))}
              className="w-full accent-purple-500"
            />
          </div>

          {/* Wave Amplitude */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm text-white/80">Wave Amplitude</label>
              <span className="text-sm text-white/60">{waveAmplitude.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={waveAmplitude}
              onChange={(e) => onWaveAmplitudeChange(parseFloat(e.target.value))}
              className="w-full accent-cyan-500"
            />
          </div>

          {/* Wave Frequency */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm text-white/80">Wave Frequency</label>
              <span className="text-sm text-white/60">{waveFrequency.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="10"
              step="0.1"
              value={waveFrequency}
              onChange={(e) => onWaveFrequencyChange(parseFloat(e.target.value))}
              className="w-full accent-cyan-500"
            />
          </div>

          {/* Disable Animation */}
          <div className="mb-6">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm text-white/80">Disable Animation</span>
              <div className="relative">
                <input
                  type="checkbox"
                  checked={disableAnimation}
                  onChange={(e) => onDisableAnimationChange(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </div>
            </label>
          </div>

          {/* Wave Speed */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm text-white/80">Wave Speed</label>
              <span className="text-sm text-white/60">{waveSpeed.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="0.2"
              step="0.01"
              value={waveSpeed}
              onChange={(e) => onWaveSpeedChange(parseFloat(e.target.value))}
              className="w-full accent-pink-500"
              disabled={disableAnimation}
            />
          </div>

          {/* Mouse Interaction */}
          <div className="mb-6">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm text-white/80">Mouse Interaction</span>
              <div className="relative">
                <input
                  type="checkbox"
                  checked={enableMouseInteraction}
                  onChange={(e) => onEnableMouseInteractionChange(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
              </div>
            </label>
          </div>

          {/* Mouse Radius */}
          <div className="mb-2">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm text-white/80">Mouse Radius</label>
              <span className="text-sm text-white/60">{mouseRadius.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={mouseRadius}
              onChange={(e) => onMouseRadiusChange(parseFloat(e.target.value))}
              className="w-full accent-pink-500"
              disabled={!enableMouseInteraction}
            />
          </div>
        </div>
      )}
    </>
  );
}
