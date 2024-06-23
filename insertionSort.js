function insertionSort(array) {
  // Loop over the array starting from the second element (index 1)
  for (let i = 1; i < array.length; i++) {
    // Store the current element to be inserted in the sorted portion
    let current = array[i];
    // Initialize j to point to the last element of the sorted portion
    let j = i - 1;
    // Move elements of the sorted portion that are greater than current to one position ahead
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    // Insert the current element into its correct position
    array[j + 1] = current;
    // Log the array to show its state after each insertion
    console.log(array);
  }
  // Return the sorted array
  return array;
}

// Test the insertionSort function with an example array
console.log(insertionSort([2, 1, 4, 9, 3, 5, 6, 8]));
