#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/wait.h>

int main(void) {
    char cmd[16], name[32], value[64];
    while (scanf("%15s %31s", cmd, name) == 2) {
        if (!strcmp(cmd, "SET")) { scanf("%63s", value); setenv(name, value, 1); }
        else if (!strcmp(cmd, "UNSET")) unsetenv(name);
        else {
            const char *v = getenv(name);
            if (!strcmp(cmd, "GET")) { if (v) printf("%s=%s\n", name, v); else printf("%s is not set\n", name); }
            else {
                fflush(stdout);
                if (fork() == 0) exit(0);
                wait(NULL);
                if (v) printf("%s\n", v); else printf("%s is not set\n", name);
            }
        }
    }
    return 0;
}
