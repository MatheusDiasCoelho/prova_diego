#include <stdio.h>

int main() {
    int numeros[10];
    int i, soma = 0;
    float media;


    for(i = 0; i < 10; i++) {
        printf("Digite o %do número: ", i+1);
        scanf("%d", &numeros[i]);
        soma += numeros[i]; 
    }

    media = (float) soma / 10; 

    printf("A média dos números lidos é: %.2f", media);

    return 0;
}
