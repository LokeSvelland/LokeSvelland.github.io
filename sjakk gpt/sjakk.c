#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char board[8][8]; // Representerer sjakkbrettet

// Initialiserer sjakkbrettet
void initializeBoard() {
  int i, j;
  for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
      board[i][j] = ' ';
    }
  }
}

// Skriver ut sjakkbrettet på skjermen
void printBoard() {
  int i, j;
  for (i = 0; i < 8; i++) {
    for (j = 0; j < 8; j++) {
      printf("%c | ", board[i][j]);
    }
    printf("\n");
  }
}

// Validerer om et sjakktrekk er lovlig
int validateMove(int x1, int y1, int x2, int y2) {
  // Implementere regler for sjakktrekk her
  return 1;
}

int main() {
  char input[5];
  int x1, y1, x2, y2;

  initializeBoard();
  printBoard();

  while (1) {
    printf("Skriv inn ditt sjakktrekk (f.eks. 'e2 e4'): ");
    scanf("%s", input);
    x1 = input[0] - 'a';
    y1 = 8 - (input[1] - '0');
    x2 = input[3] - 'a';
    y2 = 8 - (input[4] - '0');

    if (!validateMove(x1, y1, x2, y2)) {
      printf("Ugyldig trekk! Prøv igjen.\n");
      continue;
    }

    board[x2][y2] = board[x1][y1];
    board[x1][y1] = ' ';

    printBoard();
  }

  return 0;
}
