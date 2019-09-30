/**
 *  Overview
 *  You are given an n x n 2D matrix representing an image.
 *  Rotate the image by 90 degrees (clockwise).
 *  Note:
 *  You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length;
    let i = 0;
    const mObj = {};
    for (let col=n-1; col >= 0; col-=1 ) {
        for (let row = 0; row < n; row+=1) {
            mObj[row+'_'+col] = matrix[row][col];
            matrix[row][col] = mObj[i+'_'+row] || mObj[i+'_'+row] === 0 ? mObj[i+'_'+row] : matrix[i][row];
        }
        i++;
    }
};