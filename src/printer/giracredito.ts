export function giracredito(printer: any) {
  // const { alignCenter, newLine, println, cut, beep } = printer || {}
  printer?.setCharacterSet("PC860_PORTUGUESE");
  printer?.alignCenter();
  printer?.newLine();
  printer?.bold(true);
  printer?.setTextDoubleHeight();
  printer?.setTextDoubleWidth();
  printer?.println('Cresci e Perdi Ponta Grossa');
  printer?.setTextNormal(); 
  printer?.bold(false);
  printer?.println('CNPJ: 23212902000197');                          //rua + numero
  printer?.println('R. Tiradentes,');
  printer?.println('Centro');
  printer?.println('Ponta Grossa TEL: 19987553052');
  printer?.println('ID avaliação: asd3234wer234242wer234');
  printer?.bold(true);
  printer?.newLine();
  printer?.drawLine(); 
  printer?.setTextDoubleHeight();
  printer?.setTextDoubleWidth();
  printer?.println('GIRACRÉDITO');
  printer?.setTextNormal(); 
  printer?.drawLine(); 
  printer?.newLine();
  printer?.alignLeft(); 
  printer?.bold(false);
  printer?.println("07/03/2023 10:22:00");
  printer?.bold(true);
  printer?.setTextDoubleHeight();
  printer?.setTextDoubleWidth();
  printer?.println('CPF: 259.665.938-76');
  printer?.bold(false);
  printer?.setTextNormal(); 
  printer?.println('Cliente: VICTOR MATHEUS');
  printer?.println('Telefone: (19) 98755-3052');
  printer?.alignCenter();
  printer?.newLine();
  printer?.bold(true);
  printer?.setTextDoubleHeight();
  printer?.setTextDoubleWidth();
  printer?.println('VALOR: R$ 100,00');
  printer?.printQR("02156103214655464165144646323", {
    cellSize: 4,             // 1 - 8
    correction: 'M',         // L(7%), M(15%), Q(25%), H(30%)
    model: 2
});
  printer?.bold(false);
  printer?.newLine();
  printer?.setTextNormal(); 
  printer?.println('02156103214655464165144646323');
  printer?.newLine();
  printer?.bold(true);
  printer?.println('Válido até a data: 07/03/2024 07:15:18');
  printer?.newLine();
  printer?.println('**É OBRIGATÓRIA A APRESENTAÇÃO DESTE NA COMPRA**');
  printer?.newLine();
  printer?.println('UTILIZANDO O GIRACRÉDITO VOCÊ OBTÉM PREÇOS');
  printer?.println('EXCLUSIVOS EM NOSSOS PRODUTOS');
  printer?.println('Seja um franqueado TEL: (11) 3578-8008');
  printer?.print('WHATSAPP: (19) 99255-9223');
  printer?.print('www.crescieperdi.com.br');
  printer?.cut();
  // printer?.beep();
}
