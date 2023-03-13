export function giracreditoEvaluation(printer: any) {
  // const { alignCenter, newLine, println, cut, beep } = printer || {}
  printer?.setCharacterSet("PC860_PORTUGUESE");
  printer?.alignCenter();
  printer?.newLine();
  printer?.bold(true);
  printer?.setTextDoubleHeight();
  printer?.setTextDoubleWidth();
  printer?.println('Cresci e Perdi Ponta Grossa');                 //nome unidade
  printer?.setTextNormal(); 
  printer?.bold(false);
  printer?.println('CNPJ: 23212902000197');                          //rua + numero
  printer?.println('R. Tiradentes, 550');                          //rua + numero
  printer?.println('Centro');                                     // bairro
  printer?.println('Ponta Grossa TEL: 19987553052');              //cidade + telefone empresa
  printer?.println('ID avaliação: asd3234wer234242wer234');       //id avaliacao
  printer?.newLine();
  printer?.drawLine(); 
  printer?.setTextDoubleHeight();
  printer?.setTextDoubleWidth();
  printer?.println('RECIBO/GIRACRÉDITO');
  printer.setTextNormal(); 
  printer?.drawLine(); 
  printer?.newLine();
  printer?.alignLeft(); 
  printer?.println('10/03/2023 09:59:20')             //data avaliação
  printer?.println('Eu "Nome cliente", CPF n° "111.111.110-30", declaro que por ter vendido produtos seminovos para a Cresci e Perdi, recebi a quantia de "R$ 10,00 (DEZ REAIS)", em Giracrédito. Declaro que os itens vendidos à CRESCI E PERDI são de minha propriedade e estou ciente que serão por ela comercializados a outrem, sem que eu tenha participação no negócio. Declaro por fim, que tive tempo hábil para avaliar o negócio que fiz, tomei minha decisão de forma absolutamente consciente, não podendo dela legalmente me arrepender.');
  printer?.println('Endereço: Rua x de maio 125, Centro');        //rua + numero + bairro 
  printer?.println('Data de Nascimento: 09/01/1985');             //data nascimento cliente 
  printer?.println('Telefone:(61) 98354-1215');                   //telefone cliente 
  printer?.alignCenter();
  printer?.newLine();
  printer?.newLine();
  printer?.println('----------------------');
  printer?.println('"Nome Cliente"');
  printer?.newLine();
  printer?.alignRight();
  printer?.println('Via Empresa');                  
  // printer?.println('Via Cliente');
  // printer?.alignCenter();
  // printer?.newLine();
  // printer?.println('UTILIZANDO O GIRACRÉDITO VOCÊ OBTÉM PREÇOS');   
  // printer?.println('EXCLUSIVOS EM NOSSOS PRODUTOS');
  // printer?.println('Seja um franqueado TEL: (11) 3578-8008');
  // printer?.println('WHATSAPP: (19) 99255-9223');
  // printer?.print('www.crescieperdi.com.br');
  printer?.cut();
  // printer?.beep();
}
