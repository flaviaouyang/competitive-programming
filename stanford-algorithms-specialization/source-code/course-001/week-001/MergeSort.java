import java.util.Arrays;

class MergeSort {
    public static void main (String[] args) {
        // System.out.println("hello world");
        int[] nums = {4, 2, 6, 10, 0, 99, 2, 100, 4, 3};
        System.out.println("Unsorted array is ");
        System.out.println(Arrays.toString(nums));
        mergeSort(nums);
        System.out.println("Sorted array is ");
        for(int i=0; i<nums.length; i++){
            System.out.print(" " + nums[i] + " ");
        }
        System.out.println();

    }

    public static int[] mergeSort(int[] array) {
        if (array.length > 1) {
            // find half point of array
            int mid = array.length / 2;
            // System.out.println("mid is " + mid);

            // divide array into two arrays: left and right
            int[] left = new int[mid];
            for(int i = 0; i < mid; i++) {
                left[i] = array[i];
                // System.out.println("left: " + left[i]);
            }

            int[] right = new int[array.length - mid];
            for(int i = 0; i < array.length-mid; i++) {
                right[i] = array[mid + i];
                // System.out.println("right: " + right[i]);
            }

            // call mergeSort recursively on left and right arrays
            mergeSort(left);
            mergeSort(right);

            int i = 0;
            int j = 0;
            int k = 0;
            while (i < left.length && j < right.length) {
                if(left[i] < right[j]) {
                    array[k] = left[i];
                    i++;
                } else {
                    array[k] = right[j];
                    j++;
                }
                k++;
            }

            while (i < left.length){
                array[k] = left[i];
                i++;
                k++;
            }

            while(j < right.length){
                array[k] = right[j];
                j++;
                k++;
            }
        } 
        return array;
    }
}