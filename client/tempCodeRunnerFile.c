#include<stdio.h>

int sort(int ar[5])
{
    int i,j,pos,max;
    for(i=0;i<5-1;i++)
    {
        pos=i;
        max=ar[i];
        for(j=i+1;j<5;j++)
        {
            if(ar[j]<max)
            {
                max=ar[j];
                pos=j;
            }
        }
        ar[pos]=ar[i];
        ar[i]=max;
    }
}


int main()
{
    int ar[5]={2,3,4,5,6};
    int i;
    sort(ar);
    for(i=0;i<5;i++)
    {
        printf("%d",ar[i]);
    }

}