#include <stdio.h>
int main() {
    int m,s=0;
    for(m=10;m>1;m=m/2)
    {
        s=s+m;
    }
    printf("%d",s);
}