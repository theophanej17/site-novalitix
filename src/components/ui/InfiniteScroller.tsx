"use client";

import { twMerge } from "tailwind-merge";
import React, { useEffect, useRef, useState } from "react";

interface InfiniteScrollerProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  speed?: number;
  className?: string;
  repeat?: number;
  direction?: "horizontal" | "vertical";
  scrollDirection?: "forward" | "backward";
  centerItems?: boolean;
}

export const InfiniteScroller = <T,>({
  items = [],
  renderItem = () => <></>,
  speed = 50000,
  className = "",
  repeat = 2,
  direction = "horizontal",
  scrollDirection = "forward",
  centerItems
}: InfiniteScrollerProps<T>) => {
  const scrollItems = new Array(repeat).fill(items).flat();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current && !isHovering) {
        const { scrollLeft, scrollTop, scrollWidth, scrollHeight, clientWidth, clientHeight } = scrollRef.current;
        const step = scrollDirection === "forward" ? 1 : -1;

        if (direction === "horizontal") {
          if (scrollDirection === "forward") {
            if (scrollLeft < scrollWidth - clientWidth) {
              scrollRef.current.scrollLeft += step;
            } else {
              scrollRef.current.scrollLeft = 0;
            }
          } else {
            if (scrollLeft > 0) {
              scrollRef.current.scrollLeft += step;
            } else {
              scrollRef.current.scrollLeft = scrollWidth - clientWidth;
            }
          }
        } else { // Vertical
          if (scrollDirection === "forward") {
            if (scrollTop < scrollHeight - clientHeight) {
              scrollRef.current.scrollTop += step;
            } else {
              scrollRef.current.scrollTop = 0;
            }
          } else {
            if (scrollTop > 0) {
              scrollRef.current.scrollTop += step;
            } else {
              scrollRef.current.scrollTop = scrollHeight - clientHeight;
            }
          }
        }
      }
    }, speed / 1000);

    return () => clearInterval(interval);
  }, [speed, isHovering, direction, scrollDirection]);

  const containerClasses = twMerge(
    "flex gap-6 hide-scrollbar overflow-auto",
    direction === "horizontal" ? "flex-row" : "flex-col",
    centerItems
      ? direction === "horizontal"
        ? "justify-center items-center"
        : "items-center justify-center"
      : "",
    "scrollbar-none", 
    "[-ms-overflow-style:none]", 
    "[scrollbar-width:none]", 
    "[&::-webkit-scrollbar]:hidden", 
    className
  );
  

  return (
    <div
      ref={scrollRef}
      className={containerClasses}
      // className={twMerge("flex gap-6 hide-scrollbar overflow-auto", className)}
      onMouseEnter={() => setIsHovering(true)}
      onTouchStart={() => setIsHovering(true)}
      onTouchEnd={() => setIsHovering(false)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {scrollItems.map((item, index) => (
        <React.Fragment key={index}>{renderItem(item, index)}</React.Fragment>
      ))}
    </div>
  );
};
