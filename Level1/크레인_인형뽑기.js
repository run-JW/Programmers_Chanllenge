function solution(board, moves) {
    const dollBox = [];
    let dollHis = 0;
    let boomCount = 0;

    for(const move of moves) { 
        for(let i = 0; i < board.length; i++) {
            if(board[i][move - 1] !== 0) {
                if(dollHis === board[i][move - 1]) {
                    dollBox.pop();
                    boomCount += 2;
                    if(dollBox.length === 0) dollHis = 0;
                    else dollHis = dollBox[dollBox.length - 1];
                    board[i][move - 1] = 0;
                    break;
                }
                else {
                    dollHis = board[i][move-1];
                    dollBox.push(board[i][move - 1]);
                    board[i][move - 1] = 0;
                    break;
                }
            }
        }
    }
    return boomCount;
}
