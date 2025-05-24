#include<stdio.h>

int main(){
    int no;
    printf("Enter the number of elements: ");
    scanf("%d", &no);
    int arr[no];
    printf("Enter the elements: ");
    for(int i = 0; i < no; i++){
        scanf("%d", &arr[i]);
    }
    // Bubble sort algo
    for(int i = 0; i < no-1; i++){
        for(int j = 0; j < no-i-1; j++){
            if(arr[j] > arr[j+1]){
                int temp;
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    printf("Sorted array: ");
    for(int i = 0; i < no; i++){
        printf("%d ", arr[i]);
    }
    return 0;
}