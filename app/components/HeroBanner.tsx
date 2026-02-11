/* eslint-disable */
"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

const HeroBanner: React.FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollingText = gsap.utils.toArray<HTMLElement>(".rail h4");

    const tl = horizontalLoop(scrollingText, {
      repeat: -1,
    });

    Observer.create({
      onChangeY(self) {
        let factor = 2.5;
        if (self.deltaY < 0) {
          factor *= -1;
        }
        gsap
          .timeline({
            defaults: {
              ease: "none",
            },
          })
          .to(tl, { timeScale: factor * 2.5, duration: 0.2 })
          .to(tl, { timeScale: factor / 2.5, duration: 1 }, "+=0.3");
      },
    });

    function horizontalLoop(items: HTMLElement[], config: any) {
      items = gsap.utils.toArray(items);
      config = config || {};
      let tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () => {
          tl.totalTime(tl.rawTime() + tl.duration() * 100);
        },
      }),
        length = items.length,
        startX = items[0].offsetLeft,
        times: number[] = [],
        widths: number[] = [],
        xPercents: number[] = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap =
          config.snap === false
            ? (v: number) => v
            : gsap.utils.snap(config.snap || 1),
        totalWidth: number,
        curX: number,
        distanceToStart: number,
        distanceToLoop: number,
        item: HTMLElement,
        i: number;
      gsap.set(items, {
        xPercent: (i, el) => {
          let w = (widths[i] = parseFloat(
            gsap.getProperty(el, "width", "px") as string
          ));
          xPercents[i] = snap(
            (parseFloat(gsap.getProperty(el, "x", "px") as string) / w) * 100 +
            parseFloat(gsap.getProperty(el, "xPercent") as string)
          );
          return xPercents[i];
        },
      });
      gsap.set(items, { x: 0 });
      totalWidth =
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        items[length - 1].offsetWidth *
        parseFloat(gsap.getProperty(items[length - 1], "scaleX") as string) +
        (parseFloat(config.paddingRight) || 0);
      for (i = 0; i < length; i++) {
        item = items[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop =
          distanceToStart +
          widths[i] * (gsap.getProperty(item, "scaleX") as number);
        tl.to(
          item,
          {
            xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
            duration: distanceToLoop / pixelsPerSecond,
          },
          0
        )
          .fromTo(
            item,
            {
              xPercent: snap(
                ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
              ),
            },
            {
              xPercent: xPercents[i],
              duration:
                (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
              immediateRender: false,
            },
            distanceToLoop / pixelsPerSecond
          )
          .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
      }
      function toIndex(index: number, vars: any) {
        vars = vars || {};
        Math.abs(index - curIndex) > length / 2 &&
          (index += index > curIndex ? -length : length);
        let newIndex = gsap.utils.wrap(0, length, index),
          time = times[newIndex];
        if (time > tl.time() !== index > curIndex) {
          vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
          time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
      }
      tl.next = (vars: any) => toIndex(curIndex + 1, vars);
      tl.previous = (vars: any) => toIndex(curIndex - 1, vars);
      tl.current = () => curIndex;
      tl.toIndex = (index: number, vars: any) => toIndex(index, vars);
      tl.times = times;
      tl.progress(1, true).progress(0, true);
      if (config.reversed && tl.vars && tl.vars.onReverseComplete) {
        tl.vars.onReverseComplete();
        tl.reverse();
      }
      return tl;
    }
  }, []);

  return (
    <div className="scrolling-text mt-[-10%]" ref={bannerRef}>
      <div className="rail">
        <h4>FASTAPI</h4>
        <h4>LANGCHAIN</h4>
        <h4>RAG</h4>
        <h4>LANGGRAPH</h4>
        <h4>OPENAPI</h4>
        <h4>LLM</h4>
        <h4>MACHINE</h4>
        <h4>LEARNING</h4>
      </div>
    </div>
  );
};

export default HeroBanner;
