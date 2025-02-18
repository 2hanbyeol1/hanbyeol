export const capitalize = (str: string) =>
  str[0].toUpperCase() + str.slice(1, str.length);

export const parseDateToYYYYMM = (date: Date) =>
  `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}`;

export const parseDateToAriaLabel = (date: Date) =>
  `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
