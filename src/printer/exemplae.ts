export function example(printer: any) {
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
  printer?.println('R. Tiradentes,');
  printer?.println('Centro');
  printer?.println('Ponta Grossa TEL: 19987553052');
  printer?.println('ID avaliação: asd3234wer234242wer234');
  

  
  printer?.println('Seja um franqueado TEL: (11) 3578-8008');
  printer?.print('WHATSAPP: (19) 99255-9223');
  printer?.print('www.crescieperdi.com.br');
  printer?.cut();
  // printer?.beep();
}
