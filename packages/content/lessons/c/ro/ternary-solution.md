```c
#include <stdio.h>

int main(void) {
    int role, temp;
    scanf("%d %d", &role, &temp);

    printf("%d %s\n", role, role == 1 ? "rola incarcata" : "role incarcate");
    printf("Sala: %s\n", temp > 30 ? "CALD" : "OK");
    return 0;
}
```
