import { useRef, useState } from "react";

// 组件定义
export default function SvgTurntable() {
  // 控制播放状态
  const [playing, setPlaying] = useState(false);
  // 获取音频标签引用
  const audioRef = useRef<HTMLAudioElement>(null);

  // 点击事件：切换播放状态并控制音频播放/暂停
  const handleClick = () => {
    setPlaying((prev) => {
      const next = !prev;
      if (audioRef.current) {
        if (next) audioRef.current.play(); // 播放
        else audioRef.current.pause();     // 暂停
      }
      return next;
    });
  };

  return (
    // 外层容器，设置大小、阴影、居中、鼠标样式等
    <div
      style={{
        width: 200, // 宽度
        height: 200, // 高度
        position: "relative", // 相对定位
        cursor: "pointer", // 鼠标样式
        margin: "20px 750px", // 上下外边距
        userSelect: "none", // 禁止选中
        filter: playing ? "drop-shadow(0 0 32px #7f53ac)" : "none", // 播放时发光
        transition: "filter 0.4s", // 阴影过渡
      }}
      onClick={handleClick} // 点击触发播放/暂停
      title="点击播放/暂停vivian的播客"
    >
      {/* 唱片SVG部分 */}
      <svg
        width="345" // SVG画布宽度
        height="345" // SVG画布高度
        style={{
          position: "absolute", // 绝对定位
          top: 0, // 微调位置
          left: 0,
          animation: playing ? "rotate 2.5s linear infinite" : "none", // 播放时旋转动画
          transformOrigin: "50% 50%", // 旋转中心
        }}
      >
        {/* 唱片外圈 */}
        <circle cx="170" cy="170" r="150" fill="url(#disc)" />
        {/* 唱片刻痕（多层同心圆） */}
        {[1,2,3,4,5,6,7,8].map(i => (
          <circle
            key={i}
            cx="170"
            cy="170"
            r={120 + i*6}
            fill="none"
            stroke="#333"
            strokeWidth="1"
            opacity={0.18}
          />
        ))}
        {/* 唱片中心标签（渐变、发光、动画） */}
        <circle
          cx="170"
          cy="170"
          r="70"
          fill={playing ? "url(#centerPlay)" : "url(#centerIdle)"}
          stroke="#fff"
          strokeWidth="5"
          filter={playing ? "url(#pulseGlow)" : "none"} // 播放时发光滤镜
          className={playing ? "pulse" : ""} // 播放时脉冲动画
        />
        {/* 中心圈纹（让转动更明显） */}
        {[1,2,3,4,5,6,7,8,9,10].map(i => (
          <circle
            key={i}
            cx="170"
            cy="170"
            r={35 + i*3}
            fill="none"
            stroke={playing ? "#fff" : "#eee"}
            strokeWidth={i % 2 === 0 ? 1.2 : 0.7}
            opacity={playing ? 0.25 : 0.12}
          />
        ))}
        {/* 唱片中心孔 */}
        <circle cx="170" cy="170" r="10" fill="#fff" />
        {/* 渐变和滤镜定义 */}
        <defs>
          {/* 唱片外圈渐变 */}
          <radialGradient id="disc" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#444" />
            <stop offset="80%" stopColor="#222" />
            <stop offset="100%" stopColor="#111" />
          </radialGradient>
          {/* 静止时中心标签渐变 */}
          <radialGradient id="centerIdle" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f7b731" />
            <stop offset="100%" stopColor="#e74c3c" />
          </radialGradient>
          {/* 播放时中心标签渐变 */}
          <radialGradient id="centerPlay" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7f53ac" />
            <stop offset="60%" stopColor="#647dee" />
            <stop offset="100%" stopColor="#43cea2" />
          </radialGradient>
          {/* 发光滤镜定义 */}
          <filter id="pulseGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>
      {/* 唱针SVG部分 */}
      <svg
        width="160"
        height="60"
        style={{
          position: "absolute",
          top: playing ? 30 : 0, // 播放时位置变化
          left: playing ? 210 : 250, // 播放时位置变化
          zIndex: 2,
          transition: "all 0.5s cubic-bezier(.4,2,.6,1)", // 平滑过渡
          transform: playing ? "rotate(-18deg)" : "rotate(-45deg)", // 播放时旋转
        }}
      >
        {/* 针臂 */}
        <rect x="0" y="24" width="120" height="8" rx="4" fill="url(#arm)" />
        {/* 针头 */}
        <ellipse cx="130" cy="28" rx="14" ry="14" fill="#222" stroke="#7f53ac" strokeWidth="4" />
        {/* 高光 */}
        <ellipse cx="135" cy="25" rx="4" ry="2" fill="#fff" opacity="0.5" />
        {/* 针臂渐变定义 */}
        <defs>
          <linearGradient id="arm" x1="0" y1="0" x2="120" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#bbb" />
            <stop offset="1" stopColor="#888" />
          </linearGradient>
        </defs>
      </svg>
      {/* 动画和滤镜样式 */}
      <style>
        {`
          @keyframes rotate {
            100% { transform: rotate(360deg); }
          }
          .pulse {
            animation: pulseGlow 2.5s ease-in-out infinite;
          }
          @keyframes pulseGlow {
            0%   { filter: url(#pulseGlow); opacity: 1; }
            50%  { filter: none; opacity: 0.7; }
            100% { filter: url(#pulseGlow); opacity: 1; }
          }
        `}
      </style>
      {/* 音频标签，src为你的音乐文件路径 */}
      <audio ref={audioRef} src="/layoutResource/test.mp3"/>
    </div>
  );
}