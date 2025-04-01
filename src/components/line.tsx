export function VerticalLine({ height = "h-full", color = "bg-black", width = "w-px" }) {
    return (
      <div className={`${height} ${color} ${width}`} />
    );
  }


export  function HorizontalLine({ width = "w-full", color = "bg-black", height = "h-px" }) {
    return (
      <div className={`${width} ${color} ${height}`} />
    );
  }