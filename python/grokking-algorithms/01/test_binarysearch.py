from binarysearch import binalysearch


def test_binarysearch():
    assert binalysearch([1, 3, 5, 8], 1) == 0
    #  1 , [3],  5 ,  8  LOW: 0  HIGH: 3 MID: 1 GUESS: 3
    # [1],  3 ,  5 ,  8  LOW: 0  HIGH: 0 MID: 0 GUESS: 1

    assert binalysearch([1, 3, 5, 8], 8) == 3
    #  1 , [3],  5 ,  8  LOW: 0  HIGH: 3 MID: 1 GUESS: 3
    #  1 ,  3 , [5],  8  LOW: 2  HIGH: 3 MID: 2 GUESS: 5
    #  1 ,  3 ,  5 , [8] LOW: 3  HIGH: 3 MID: 2 GUESS: 8

    assert binalysearch([1, 3, 5, 8], 2) == -1
    #  1 , [3],  5 ,  8  LOW: 0  HIGH: 3 MID: 1 GUESS: 3
    # [1],  3 ,  5 ,  8  LOW: 0  HIGH: 0 MID: 0 GUESS: 1
    #  1 ,  3 ,  5 ,  8  LOW: 1  HIGH: 0 MID: X GUESS: X (now LOW gets higher than HIGH)
