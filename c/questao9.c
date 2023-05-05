#include <stdio.h>

int main() {
    int opcao, quantidade;
    float valor_total = 0.0;

    do {

        printf("Escolha a fruta que deseja comprar:\n");
        printf("1 - ABACAXI (R$ 5,00 a unidade)\n");
        printf("2 - MAÇA (R$ 1,00 a unidade)\n");
        printf("3 - PERA (R$ 4,00 a unidade)\n");
        printf("Digite 0 para finalizar a compra.\n");

   
        scanf("%d", &opcao);

    
        if (opcao >= 1 && opcao <= 3) {
      
            printf("Digite a quantidade de frutas que deseja comprar:\n");
            scanf("%d", &quantidade);

     
            switch (opcao) {
                case 1:
                    valor_total += 5.0 * quantidade;
                    break;
                case 2:
                    valor_total += 1.0 * quantidade;
                    break;
                case 3:
                    valor_total += 4.0 * quantidade;
                    break;
            }
        } else if (opcao != 0) {
            printf("Opção inválida. Tente novamente.\n");
        }
    } while (opcao != 0);


    printf("O valor total da compra é: R$ %.2f\n", valor_total);

    return 0;
}
