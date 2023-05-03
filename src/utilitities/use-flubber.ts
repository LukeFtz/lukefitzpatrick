import { interpolate } from "flubber";
import { MotionValue, useTransform } from "framer-motion";

export const getIndex = (_: any, index: number) => index;

export function useFlubber(
  progress: MotionValue<number>,
  paths: string[]
  // prevValue: number,
  // newValue: number
) {
  // const newPaths = [paths[prevValue], paths[newValue]];
  return useTransform(progress, [0, 1], paths, {
    mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 0.1 }),
  });
}

// export function useFlubber(progress: MotionValue<number>, paths: string[]) {
//   return useTransform(progress, paths.map(getIndex), paths, {
//     mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 0.1 }),
//   });
// }
