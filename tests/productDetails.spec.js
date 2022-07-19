const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
    expect(Array.isArray(productDetails('alcool', 'luvas'))).toBeTruthy();
    expect(productDetails('luvas', 'cotonete')).toHaveLength(2);
    expect(typeof productDetails('prato', 'mesa')[0]).toBe('object');
    expect(typeof productDetails('prato', 'mesa')[1]).toBe('object');
    expect(productDetails('luva', 'alcool em gel')[0]).not.toEqual(productDetails('luva', 'alcool em gel')[1]);
    expect(productDetails('prato', 'mesa')[0].details.productId.endsWith('123')).toBeTruthy();
    expect(productDetails('prato', 'mesa')[1].details.productId.endsWith('123')).toBeTruthy();
  });
});
