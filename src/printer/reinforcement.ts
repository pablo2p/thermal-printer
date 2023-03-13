export function reinforcement(printer: any) {
  // const { alignCenter, newLine, println, cut, beep } = printer || {};

  printer?.setCharacterSet("PC860_PORTUGUESE");
  printer?.alignCenter();
  printer?.newLine();
  printer?.bold(true);
  printer?.setTextDoubleHeight();
  printer?.setTextDoubleWidth();
  printer?.println('Cresci e Perdi Ponta Grossa');
  printer?.setTextNormal(); 
  printer?.bold(false);
  printer?.println('CNPJ: 23.212.902/0001-97');
  printer?.println('R. Tiradentes, 120');
  printer?.println('Centro');
  printer?.println('Ponta Grossa TEL: 19987553052'); 
  printer?.drawLine();
  printer?.bold(true);
  printer?.setTextDoubleHeight();
  printer?.setTextDoubleWidth();
  printer?.println('Comprovante de Reforço');
  printer?.setTextNormal();
  printer?.drawLine();
  printer?.println('10/03/2023 16:30:00');
  printer?.println('Valor do Reforço: R$ 2500,00');
  printer?.println('Assinatura: ');
  printer?.cut();
  // printer?.beep();
}
