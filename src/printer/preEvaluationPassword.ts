export function preEvaluationPassword(printer: any) {
  // const { alignCenter, newLine, println, cut, beep } = printer || {};

  printer?.setCharacterSet("PC860_PORTUGUESE");
  printer?.alignCenter();
  printer?.newLine();
  printer?.bold(true);
  printer?.drawLine();
  printer?.setTextDoubleHeight();
  printer?.setTextDoubleWidth();
  printer?.println('>> SENHA : 300  <<');
  printer?.setTextNormal(); 
  printer?.drawLine();
  printer?.println('Cliente: Victor Matheus');
  printer?.print('10/03/2023 11:00:00');
  printer?.cut();
  // printer?.beep();
}
