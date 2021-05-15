let floors = [];
let arr = [];

// Пол.
arr.push([30, 2, 1, 15, 9, 0]);
arr.push([4, 8, 1, 24, 4, 0]);
arr.push([3, 12, 1, 13.5, 16, 0]);
arr.push([2, 10, 1, -1, 5, 0]);

// Стены.
var h = 2;
var w = 0.5;
arr.push([w, 10, h, -2, 5, -h / 2]);
arr.push([w, 8, h, 0, 4, -h / 2]);
arr.push([2, w, h, -1, 0, -h / 2]);
arr.push([22, w, h, 11, 8, -h / 2]);

arr.push([w, 8, h, 22, 4, -h / 2]);
arr.push([w, 8, h, 26, 4, -h / 2]);
arr.push([4, w, h, 24, 0, -h / 2]);
arr.push([4, w, h, 28, 8, -h / 2]);
arr.push([w, 2, h, 30, 9, -h / 2]);

arr.push([15, w, h, 22.5, 10, -h / 2]);
arr.push([3, w, h, 13.5, 22, -h / 2]);
arr.push([14, w, h, 5, 10, -h / 2]);

arr.push([w, 12, h, 12, 16, -h / 2]);
arr.push([w, 12, h, 15, 16, -h / 2]);

floors.push(arr);
arr = [];

// Пол.
arr.push([2, 10, 1, -1, 5, 0]);
arr.push([18, 3, 1, 9, 8.5, 0]);
arr.push([13, 10, 1, 24.5, 12, 0]);
arr.push([4, 7, 1, 24, 3.5, 0]);

// Пол.
arr.push([2, 0.5, 2, -1, 0, -1]);
arr.push([0.5, 10, 2, -2, 5, -1]);
arr.push([0.5, 7, 2, 0, 3.5, -1]);
arr.push([22, 0.5, 2, 11, 7, -1]);
arr.push([0.5, 7, 2, 22, 3.5, -1]);
arr.push([4, 0.5, 2, 24, 0, -1]);
arr.push([0.5, 7, 2, 26, 3.5, -1]);
arr.push([5, 0.5, 2, 28.5, 7, -1]);
arr.push([0.5, 10, 2, 31, 12, -1]);
arr.push([20, 0.5, 2, 8, 10, -1]);
arr.push([0.5, 7, 2, 18, 13.5, -1]);
arr.push([13, 0.5, 2, 24.5, 17, -1]);

floors.push(arr);
arr = [];

arr.push([2, 13, 1, -1, 6.5, 0]);
arr.push([18, 3, 1, 9, 11.5, 0]);
arr.push([13, 14, 1, 24.5, 17, 0]);
arr.push([4, 10, 1, 25, 5, 0]);
arr.push([4, 6, 1, 24, 27, 0]);

// Стены.
arr.push([2, 0.5, 2, -1, 0, -1]);
arr.push([0.5, 10, 2, 0, 5, -1]);
arr.push([23, 0.5, 2, 11.5, 10, -1]);
arr.push([0.5, 10, 2, 23, 5, -1]);
arr.push([4, 0.5, 2, 25, 0, -1]);
arr.push([0.5, 10, 2, 27, 5, -1]);
arr.push([4, 0.5, 2, 29, 10, -1]);
arr.push([0.5, 14, 2, 31, 17, -1]);
arr.push([5, 0.5, 2, 28.5, 24, -1]);
arr.push([0.5, 6, 2, 26, 27, -1]);
arr.push([0.5, 6, 2, 22, 27, -1]);
arr.push([4, 0.5, 2, 20, 24, -1]);
arr.push([0.5, 11, 2, 18, 18.5, -1]);
arr.push([20, 0.5, 2, 8, 13, -1]);
arr.push([0.5, 13, 2, -2, 6.5, -1]);


floors.push(arr);
arr = [];

// A0.
arr.push([4, 8, 1, 29, 15, 0]);
arr.push([55, 3, 1, 54.5, 9.5, 0]);
arr.push([4, 8, 1, 68, 4, 0]);
arr.push([39, 0.5, 2, 46.5, 8, -1]);
arr.push([0.5, 8, 2, 66, 4, -1]);
arr.push([4, 0.5, 2, 68, 0, -1]);
arr.push([0.5, 8, 2, 70, 4, -1]);
arr.push([12, 0.5, 2, 76, 8, -1]);
arr.push([0.5, 3, 2, 82, 9.5, -1]);
arr.push([51, 0.5, 2, 56.5, 11, -1]);
arr.push([0.5, 8, 2, 31, 15, -1]);
arr.push([4, 0.5, 2, 29, 19, -1]);
arr.push([0.5, 11, 2, 27, 13.5, -1]);
floors.push(arr);
arr = [];

// A1.
arr.push([68, 4, 1, 50, 10, 0]);
arr.push([4, 7, 1, 29, 15.5, 0]);
arr.push([4, 8, 1, 68, 4, 0]);
arr.push([50, 0.5, 2, 41, 8, -1]);
arr.push([4, 8, 2, 68, 4, -1]);
arr.push([0.5, 8, 2, 70, 4, -1]);
arr.push([14, 0.5, 2, 77, 8, -1]);
arr.push([0.5, 4, 2, 84, 10, -1]);
arr.push([54, 1, 2, 57, 11.5, -1]);
arr.push([0.5, 8, 2, 30, 15, -1]);
arr.push([3, 0.5, 2, 28.5, 19, -1]);
arr.push([0.5, 7, 2, 27, 15.5, -1]);
arr.push([11, 0.5, 2, 21.5, 12, -1]);
arr.push([0.5, 4, 2, 16, 10, -1]);
floors.push(arr);
arr = [];

// A2.
arr.push([65, 4, 1, 49.5, 10, 0]);
arr.push([4, 7, 1, 29, 15.5, 0]);
arr.push([4, 8, 1, 68, 4, 0]);
arr.push([4, 10, 1, 29, 3, 0]);
arr.push([10, 0.5, 2, 22, 8, -1]);
arr.push([0.5, 10, 2, 27, 3, -1]);
arr.push([0.5, 10, 2, 31, 3, -1]);
arr.push([35, 0.5, 2, 48.5, 8, -1]);
arr.push([0.5, 8, 2, 66, 4, -1]);
arr.push([4, 0.5, 2, 68, 0, -1]);
arr.push([0.5, 8, 2, 70, 4, -1]);
arr.push([12, 0.5, 2, 76, 8, -1]);
arr.push([0.5, 4, 2, 82, 10, -1]);
arr.push([51, 0.5, 2, 56.5, 12, -1]);
arr.push([0.5, 7, 2, 31, 15.5, -1]);
arr.push([4, 0.5, 2, 29, 19, -1]);
arr.push([0.5, 7, 2, 27, 15.5, -1]);
arr.push([10, 0.5, 2, 22, 12, -1]);
arr.push([0.5, 4, 2, 17, 10, -1]);
floors.push(arr);
arr = [];



// A3.
arr.push([86, 4, 1, 38, 10, 0]);
arr.push([4, 7, 1, 29, 15.5, 0]);
arr.push([4, 8, 1, 68, 4, 0]);
arr.push([71, 0.5, 2, 30.5, 8, -1]);
arr.push([0.5, 8, 2, 66, 4, -1]);
arr.push([4, 0.5, 2, 68, 0, -1]);
arr.push([0.5, 8, 2, 70, 4, -1]);
arr.push([11, 0.5, 2, 75.5, 8, -1]);
arr.push([0.5, 4, 2, 81, 10, -1]);
arr.push([50, 0.5, 2, 56, 12, -1]);
arr.push([0.5, 7, 2, 31, 15.5, -1]);
arr.push([4, 0.5, 2, 29, 19, -1]);
arr.push([0.5, 7, 2, 27, 15.5, -1]);
arr.push([32, 0.5, 2, 11, 12, -1]);
floors.push(arr);
arr = [];

// A4.
arr.push([62, 4, 1, 44, 10, 0]);
arr.push([4, 7, 1, 29, 15.5, 0]);
arr.push([4, 8, 1, 68, 4, 0]);
arr.push([53, 0.5, 2, 39.5, 8, -1]);
arr.push([0.5, 8, 2, 66, 4, -1]);
arr.push([4, 0.5, 2, 68, 0, -1]);
arr.push([0.5, 8, 2, 70, 4, -1]);
arr.push([5, 0.5, 2, 72.5, 8, -1]);
arr.push([0.5, 4, 2, 75, 10, -1]);
arr.push([44, 0.5, 2, 53, 12, -1]);
arr.push([0.5, 7, 2, 31, 15.5, -1]);
arr.push([4, 0.5, 2, 29, 19, -1]);
arr.push([0.5, 7, 2, 27, 15.5, -1]);
arr.push([14, 0.5, 2, 20, 12, -1]);
arr.push([0.5, 4, 2, 13, 10, -1]);
floors.push(arr);
arr = [];

// A5.
arr.push([66, 4, 1, 42, 10, 0]);
arr.push([4, 7, 1, 29, 15.5, 0]);
arr.push([4, 8, 1, 68, 4, 0]);
arr.push([57, 0.5, 2, 37.5, 8, -1]);
arr.push([0.5, 8, 2, 66, 4, -1]);
arr.push([4, 0.5, 2, 68, 0, -1]);
arr.push([0.5, 8, 2, 70, 4, -1]);
arr.push([5, 0.5, 2, 72.5, 8, -1]);
arr.push([0.5, 4, 2, 75, 10, -1]);
arr.push([44, 0.5, 2, 53, 12, -1]);
arr.push([0.5, 7, 2, 31, 15.5, -1]);
arr.push([4, 0.5, 2, 29, 19, -1]);
arr.push([0.5, 7, 2, 27, 15.5, -1]);
arr.push([18, 0.5, 2, 18, 12, -1]);
arr.push([0.5, 4, 2, 9, 10, -1]);
floors.push(arr);
arr = [];

// M0.
arr.push([11, 4, 1, 12.5, 30, 0]);
arr.push([6, 2, 1, 7, 33, 0]);
arr.push([2, 46, 1, 5, 57, 0]);
arr.push([4, 12, 1, 8, 80, 0]);
arr.push([9, 20, 1, 10.5, 94, 0]);
arr.push([69, 4, 1, 49.5, 102, 0]);
arr.push([4, 6, 1, 52, 107, 0]);
arr.push([4, 6, 1, 82, 107, 0]);
arr.push([17, 16, 1, 67.5, 92, 0]);
arr.push([8, 12, 1, 122, 92, 0]);
arr.push([4, 62, 1, 124, 55, 0]);
arr.push([8, 12, 1, 118, 22, 0]);

arr.push([11, 0.5, 2, 12.5, 28, -1]);
arr.push([0.5, 4, 2, 18, 30, -1]);
arr.push([8, 0.5, 2, 14, 32, -1]);
arr.push([0.5, 2, 2, 10, 33, -1]);
arr.push([4, 0.5, 2, 8, 34, -1]);
arr.push([0.5, 40, 2, 6, 54, -1]);
arr.push([4, 0.5, 2, 8, 74, -1]);
arr.push([0.5, 20, 2, 10, 84, -1]);
arr.push([5, 0.5, 2, 12.5, 86, -1]);
arr.push([0.5, 18, 2, 15, 95, -1]);
arr.push([9, 0.5, 2, 10.5, 104, -1]);
arr.push([0.5, 24, 2, 6, 92, -1]);
arr.push([2, 0.5, 2, 5, 80, -1]);
arr.push([0.5, 48, 2, 4, 56, -1]);
arr.push([3, 0.5, 2, 5.5, 32, -1]);
arr.push([0.5, 4, 2, 7, 30, -1]);
arr.push([44, 0.5, 2, 37, 100, -1]);
arr.push([0.5, 14, 2, 59, 93, -1]);
arr.push([17, 0.5, 2, 67.5, 86, -1]);
arr.push([0.5, 14, 2, 76, 93, -1]);
arr.push([8, 0.5, 2, 80, 100, -1]);
arr.push([0.5, 10, 2, 84, 105, -1]);
arr.push([4, 0.5, 2, 82, 110, -1]);
arr.push([0.5, 6, 2, 80, 107, -1]);
arr.push([26, 0.5, 2, 67, 104, -1]);
arr.push([0.5, 6, 2, 54, 107, -1]);
arr.push([4, 0.5, 2, 52, 110, -1]);
arr.push([0.5, 6, 2, 50, 107, -1]);
arr.push([35, 1, 2, 32.5, 104.5, -1]);
arr.push([8, 0.5, 2, 118, 16, -1]);
arr.push([0.5, 8, 2, 122, 20, -1]);
arr.push([4, 0.5, 2, 124, 24, -1]);
arr.push([0.5, 72, 2, 126, 60, -1]);
arr.push([8, 0.5, 2, 122, 96, -1]);
arr.push([0.5, 10, 2, 118, 91, -1]);
arr.push([4, 0.5, 2, 120, 86, -1]);
arr.push([0.5, 66, 2, 122, 61, -1]);
arr.push([8, 0.5, 2, 118, 28, -1]);
arr.push([0.5, 12, 2, 114, 22, -1]);
arr.push([6, 0.5, 2, 117, 24, -1]);
arr.push([0.5, 4, 2, 120, 22, -1]);
floors.push(arr);
arr = [];

// M1.
arr.push([4, 2, 1, 16, 17, 0]);
arr.push([6, 8, 1, 11, 20, 0]);
arr.push([3, 70, 1, 9.5, 59, 0]);
arr.push([8, 22, 1, 12, 97, 0]);
arr.push([34, 3, 1, 33, 100.5, 0]);
arr.push([34, 9, 1, 67, 103.5, 0]);
arr.push([4, 8, 1, 61, 90, 0]);
arr.push([4, 8, 1, 73, 90, 0]);
arr.push([16, 13, 1, 67, 92.5, 0]);
arr.push([34, 3, 1, 101, 100.5, 0]);
arr.push([8, 20, 1, 122, 96, 0]);
arr.push([3, 77, 1, 124.5, 54.5, 0]);
arr.push([8, 8, 1, 118, 20, 0]);

arr.push([10, 0.5, 2, 13, 16, -1]);
arr.push([0.5, 2, 2, 18, 17, -1]);
arr.push([4, 0.5, 2, 16, 18, -1]);
arr.push([0.5, 6, 2, 14, 21, -1]);
arr.push([3, 0.5, 2, 12.5, 24, -1]);
arr.push([0.5, 70, 2, 11, 59, -1]);
arr.push([5, 0.5, 2, 13.5, 86, -1]);
arr.push([0.5, 13, 2, 16, 92.5, -1]);
arr.push([43, 0.5, 2, 37.5, 99, -1]);
arr.push([0.5, 13, 2, 59, 92.5, -1]);
arr.push([4, 0.5, 2, 61, 86, -1]);
arr.push([0.5, 8, 2, 63, 90, -1]);
arr.push([8, 0.5, 2, 67, 94, -1]);
arr.push([0.5, 8, 2, 71, 90, -1]);
arr.push([4, 0.5, 2, 73, 86, -1]);
arr.push([0.5, 13, 2, 75, 92.5, -1]);
arr.push([43, 0.5, 2, 96.5, 99, -1]);
arr.push([0.5, 13, 2, 118, 92.5, -1]);
arr.push([5, 0.5, 2, 120.5, 86, -1]);
arr.push([0.5, 74, 2, 123, 55, -1]);
arr.push([9, 0.5, 2, 118.5, 24, -1]);
arr.push([0.5, 8, 2, 114, 20, -1]);
arr.push([12, 0.5, 2, 120, 16, -1]);
arr.push([0.5, 90, 2, 126, 61, -1]);
arr.push([8, 0.5, 2, 122, 106, -1]);
arr.push([0.5, 4, 2, 118, 104, -1]);
arr.push([34, 0.5, 2, 101, 102, -1]);
arr.push([0.5, 6, 2, 84, 105, -1]);
arr.push([34, 0.5, 2, 67, 108, -1]);
arr.push([0.5, 6, 2, 50, 105, -1]);
arr.push([34, 0.5, 2, 33, 102, -1]);
arr.push([0.5, 6, 2, 16, 105, -1]);
arr.push([8, 0.5, 2, 12, 108, -1]);
arr.push([0.5, 92, 2, 8, 62, -1]);
floors.push(arr);
arr = [];

// M2.
arr.push([4, 2, 1, 16, 17, 0]);
arr.push([6, 8, 1, 11, 20, 0]);
arr.push([3, 70, 1, 9.5, 59, 0]);
arr.push([8, 22, 1, 12, 97, 0]);
arr.push([43, 3, 1, 37.5, 100.5, 0]);
arr.push([16, 9, 1, 67, 103.5, 0]);
arr.push([4, 8, 1, 61, 90, 0]);
arr.push([4, 8, 1, 73, 90, 0]);
arr.push([16, 13, 1, 67, 92.5, 0]);
arr.push([43, 3, 1, 96.5, 100.5, 0]);
arr.push([8, 20, 1, 122, 96, 0]);
arr.push([3, 95, 1, 124.5, 45.5, 0]);
arr.push([9, 8, 1, 118.5, 20, 0]);

arr.push([10, 0.5, 2, 13, 16, -1]);
arr.push([0.5, 2, 2, 18, 17, -1]);
arr.push([4, 0.5, 2, 16, 18, -1]);
arr.push([0.5, 6, 2, 14, 21, -1]);
arr.push([3, 0.5, 2, 12.5, 24, -1]);
arr.push([0.5, 70, 2, 11, 59, -1]);
arr.push([5, 0.5, 2, 13.5, 86, -1]);
arr.push([0.5, 13, 2, 16, 92.5, -1]);
arr.push([43, 0.5, 2, 37.5, 99, -1]);
arr.push([0.5, 13, 2, 59, 92.5, -1]);
arr.push([4, 0.5, 2, 61, 86, -1]);
arr.push([0.5, 8, 2, 63, 90, -1]);
arr.push([8, 0.5, 2, 67, 94, -1]);
arr.push([0.5, 8, 2, 71, 90, -1]);
arr.push([4, 0.5, 2, 73, 86, -1]);
arr.push([0.5, 13, 2, 75, 92.5, -1]);
arr.push([43, 0.5, 2, 96.5, 99, -1]);
arr.push([0.5, 13, 2, 118, 92.5, -1]);
arr.push([5, 0.5, 2, 120.5, 86, -1]);
arr.push([0.5, 74, 2, 123, 55, -1]);
arr.push([9, 0.5, 2, 118.5, 24, -1]);
arr.push([0.5, 8, 2, 114, 20, -1]);

arr.push([9, 0.5, 2, 118.5, 16, -1]);
arr.push([0.5, 18, 2, 123, 7, -1]);
arr.push([0.5, 108, 2, 126, 52, -1]);

arr.push([8, 0.5, 2, 122, 106, -1]);
arr.push([0.5, 4, 2, 118, 104, -1]);
arr.push([43, 0.5, 2, 96.5, 102, -1]);
arr.push([0.5, 6, 2, 75, 105, -1]);
arr.push([16, 0.5, 2, 67, 108, -1]);
arr.push([0.5, 6, 2, 59, 105, -1]);
arr.push([43, 0.5, 2, 37.5, 102, -1]);
arr.push([0.5, 6, 2, 16, 105, -1]);
arr.push([8, 0.5, 2, 12, 108, -1]);
arr.push([0.5, 92, 2, 8, 62, -1]);
floors.push(arr);
arr = [];

// M3.
arr.push([7, 8, 1, 14.5, 20, 0]);
arr.push([3, 70, 1, 9.5, 51, 0]);
arr.push([8, 22, 1, 12, 97, 0]);
arr.push([34, 3, 1, 33, 100.5, 0]);
arr.push([34, 9, 1, 67, 103.5, 0]);
arr.push([4, 8, 1, 61, 90, 0]);
arr.push([4, 8, 1, 73, 90, 0]);
arr.push([16, 13, 1, 67, 92.5, 0]);
arr.push([34, 3, 1, 101, 100.5, 0]);
arr.push([8, 20, 1, 122, 96, 0]);
arr.push([3, 77, 1, 124.5, 54.5, 0]);
arr.push([8, 8, 1, 118, 20, 0]);

arr.push([10, 0.5, 2, 13, 16, -1]);
arr.push([0.5, 8, 2, 18, 20, -1]);
arr.push([4, 0.5, 2, 16, 24, -1]);
arr.push([0.5, 6, 2, 14, 21, -1]);
arr.push([3, 0.5, 2, 12.5, 24, -1]);
arr.push([0.5, 70, 2, 11, 59, -1]);
arr.push([5, 0.5, 2, 13.5, 86, -1]);
arr.push([0.5, 13, 2, 16, 92.5, -1]);
arr.push([43, 0.5, 2, 37.5, 99, -1]);
arr.push([0.5, 13, 2, 59, 92.5, -1]);
arr.push([4, 0.5, 2, 61, 86, -1]);
arr.push([0.5, 8, 2, 63, 90, -1]);
arr.push([8, 0.5, 2, 67, 94, -1]);
arr.push([0.5, 8, 2, 71, 90, -1]);
arr.push([4, 0.5, 2, 73, 86, -1]);
arr.push([0.5, 13, 2, 75, 92.5, -1]);
arr.push([43, 0.5, 2, 96.5, 99, -1]);
arr.push([0.5, 13, 2, 118, 92.5, -1]);
arr.push([5, 0.5, 2, 120.5, 86, -1]);
arr.push([0.5, 74, 2, 123, 55, -1]);
arr.push([9, 0.5, 2, 118.5, 24, -1]);
arr.push([0.5, 8, 2, 114, 20, -1]);
arr.push([12, 0.5, 2, 120, 16, -1]);
arr.push([0.5, 90, 2, 126, 61, -1]);
arr.push([8, 0.5, 2, 122, 106, -1]);
arr.push([0.5, 4, 2, 118, 104, -1]);
arr.push([34, 0.5, 2, 101, 102, -1]);
arr.push([0.5, 6, 2, 84, 105, -1]);
arr.push([34, 0.5, 2, 67, 108, -1]);
arr.push([0.5, 6, 2, 50, 105, -1]);
arr.push([34, 0.5, 2, 33, 102, -1]);
arr.push([0.5, 6, 2, 16, 105, -1]);
arr.push([8, 0.5, 2, 12, 108, -1]);
arr.push([0.5, 92, 2, 8, 62, -1]);
floors.push(arr);
arr = [];

// M4.
arr.push([7, 8, 1, 14.5, 20, 0]);
arr.push([4, 70, 1, 9, 51, 0]);
arr.push([9, 22, 1, 11.5, 97, 0]);
arr.push([102, 5, 1, 67, 97.5, 0]);
arr.push([17, 9, 1, 67.5, 90.5, 0]);
arr.push([10, 21, 1, 123, 97.5, 0]);
arr.push([4, 73, 1, 126, 50.5, 0]);
arr.push([8, 8, 1, 120, 18, 0]);
arr.push([11, 0.5, 2, 12.5, 16, -1]);
arr.push([0.5, 8, 2, 18, 20, -1]);
arr.push([7, 0.5, 2, 14.5, 24, -1]);
arr.push([0.5, 70, 2, 11, 59, -1]);
arr.push([5, 0.5, 2, 13.5, 86, -1]);
arr.push([0.5, 9, 2, 16, 90.5, -1]);
arr.push([43, 0.5, 2, 37.5, 95, -1]);
arr.push([0.5, 9, 2, 59, 90.5, -1]);
arr.push([17, 0.5, 2, 67.5, 86, -1]);
arr.push([0.5, 9, 2, 76, 90.5, -1]);
arr.push([0.5, 9, 2, 64, 90.5, -1]);
arr.push([0.5, 9, 2, 71, 90.5, -1]);
arr.push([42, 0.5, 2, 97, 95, -1]);
arr.push([0.5, 8, 2, 118, 91, -1]);
arr.push([6, 0.5, 2, 121, 87, -1]);
arr.push([0.5, 73, 2, 124, 58.5, -1]);
arr.push([8, 0.5, 2, 120, 22, -1]);
arr.push([0.5, 8, 2, 116, 18, -1]);
arr.push([12, 0.5, 2, 122, 14, -1]);
arr.push([0.5, 94, 2, 128, 61, -1]);
arr.push([10, 0.5, 2, 123, 108, -1]);
arr.push([0.5, 8, 2, 118, 104, -1]);
arr.push([102, 0.5, 2, 67, 100, -1]);
arr.push([0.5, 8, 2, 16, 104, -1]);
arr.push([9, 0.5, 2, 11.5, 108, -1]);
arr.push([0.5, 92, 2, 7, 62, -1]);
floors.push(arr);

export default floors;