# Selection Sort

## Що таке Selection Sort

Selection Sort — це алгоритм сортування, який на кожному кроці знаходить найменший елемент у невідсортованій частині масиву та ставить його на потрібне місце.

---

## Принцип роботи

1. Знаходимо найменший елемент у масиві.
2. Міняємо його місцями з першим елементом.
3. Переходимо до наступної частини масиву.
4. Повторюємо, доки весь масив не буде відсортований.

---

## Складність алгоритму

- Найгірший випадок: O(n²)
- Середній випадок: O(n²)
- Найкращий випадок: O(n²)

---

## Приклад на Python

```python
def selection_sort(arr):
    n = len(arr)

    for i in range(n):
        min_index = i

        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j

        arr[i], arr[min_index] = arr[min_index], arr[i]

    return arr
```

---

## Приклад на JavaScript

```javascript
function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let minIndex = i;

        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr;
}
```