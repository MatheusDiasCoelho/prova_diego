#include <stdio.h>

int main() {
    int n, i, fib, a = 0, b = 1;

    printf("Digite o valor de n: ");
    scanf("%d", &n);

    if (n == 0) {
        fib = a;
    } else if (n == 1) {
        fib = b;
    } else {
        for (i = 2; i <= n; i++) {
            fib = a + b;
            a = b;
            b = fib;
        }
    }

    printf("O enesimo termo da sequencia de Fibonacci eh: %d\n", fib);

    return 0;
}
