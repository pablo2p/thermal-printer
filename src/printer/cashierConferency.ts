export function cashierConferency(printer: any) {
  const { alignCenter, newLine, println, cut, beep } = printer || {};

  alignCenter();
  newLine();
  println('Testing Print');
  cut();
  beep();
}
