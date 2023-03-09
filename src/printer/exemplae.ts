export function example(printer: any) {
  const { alignCenter, newLine, println, cut, beep } = printer || {};

  alignCenter();
  newLine();
  println('Example');
  cut();
  beep();
}
