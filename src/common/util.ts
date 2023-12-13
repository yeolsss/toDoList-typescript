export const getDate = (setDate: string = ''): string => {
  const today = setDate === '' ? new Date() : new Date(setDate);

  const year = String(today.getFullYear()); // 년도
  const month = String(today.getMonth() + 1).padStart(2, '0'); // 월
  const date = String(today.getDate()).padStart(2, '0'); // 날짜
  const hours = String(today.getHours()).padStart(2, '0');
  const minutes = String(today.getMinutes()).padStart(2, '0');
  const seconds = String(today.getSeconds()).padStart(2, '0');
  return `${year}.${month}.${date} ${hours}:${minutes}:${seconds}`;
};
