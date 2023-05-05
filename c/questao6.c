#include <stdio.h>

int main() {
   int i, sum=0;
   
   for (i=1; i<1000; i++) {
      if (i%3 == 0 || i%5 == 0) {
         sum += i;
      }
   }
   
   printf("A soma de todos os números naturais abaixo de 1000 que são múltiplos de 3 ou 5 é: %d\n", sum);
   
   return 0;
}
