#include <stdio.h>

int main() {
    int num;

    printf("Digite um numero positivo: ");
    scanf("%d", &num);

    printf("Os divisores de %d sao: ", num);

    for (int i = 1; i <= num; i++) {
        if (num % i == 0) {
            printf("%d ", i);
        }
    }

    printf("\n");

    return 0;
}
