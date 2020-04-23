export const easingEaseOutExpo = (
  currentTime: number,
  startValue: number,
  changeValue = 1,
  duration = 1
) =>
  changeValue * (-1 * Math.pow(2, (-10 * currentTime) / duration) + 1) +
  startValue;

export const easingEaseInExpo = (
  currentTime: number,
  startValue: number,
  changeValue = 1,
  duration = 1
) => changeValue * Math.pow(2, 10 * (currentTime / duration - 1)) + startValue;
