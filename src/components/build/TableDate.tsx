export default function TableDate({ date }: any) {
  const newDate = new Date(date);

  const formattedDate = newDate.toLocaleString('en-UK', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    // hour: '2-digit',
    // minute: '2-digit',
    // second: '2-digit',
    hour12: true
  });

//   console.log(formattedDate);
  

  return <div>{formattedDate}</div>;
}
