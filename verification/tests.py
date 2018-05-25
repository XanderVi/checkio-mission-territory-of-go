"""
TESTS is a dict with all of your tests.
Keys for this will be the categories' names.
Each test is a dict with
    "input" -- input data for a user function
    "answer" -- your right answer
    "explanation" -- not necessarily a key, it's used for an additional info in animation.
"""


TESTS = {
    "Basics": [
        {
            "input": ['+++++++++',
                      'BBB++++++',
                      '++B++++++',
                      '++B++++++',
                      'BBB++++++',
                      '+++++++++',
                      '+++++++++',
                      'WWWWWWWWW',
                      '+++++++++'],
            "answer": {'B': 4, 'W': 9}
        },
        {
            "input": ['++B++++++',
                      '+BB++++++',
                      'BB+++++++',
                      '+++++++++',
                      '+++++++++',
                      '++WWW++++',
                      '++W+W++++',
                      '++WWW++++',
                      '+++++++++'],
            "answer": {'B': 3, 'W': 1}
        }
    ],
    "Extra": [
        {
            "input": ['+++++++++',
                      '++++B++++',
                      '+++B+++++',
                      '++B++++++',
                      '+B+++++++',
                      '++++++WWW',
                      '++++++W++',
                      '++++++WWW',
                      '+++++++++'],
            "answer": {'B': 0, 'W': 2}
        },
        {
            "input": ['+++++W+++',
                      '+++++W+++',
                      '+++++W+++',
                      'WWWWWW+++',
                      '+++++BBBB',
                      '+++++B+++',
                      '+++BBB+++',
                      '+++B+++++',
                      '+++B+++++'],
            "answer": {'B': 16, 'W': 15}
        },
	{
            "input": ['+B++BW+++',
                      '+B++BW+++',
                      '+BBBBWW++',
                      '+B++++W++',
                      'BB++++W++',
                      'WWW+++WWW',
                      '++W++++++',
                      'WWW+++BBB',
                      '++W+++B++'],
            "answer": {'B': 10, 'W': 16}
        },
        {
            "input": ['+++++++++',
                      '+++++++++',
                      'WWWWWWWWW',
                      'BBBBBBBBB',
                      '++++B++++',
                      '++++B++++',
                      'BBBBBBBBB',
                      '++++B++++',
                      '++++B++++'],
            "answer": {'B': 32, 'W': 18}
        },
        {
            "input": ['+++BW++++',
                      '+++BW++++',
                      '+BBBW++++',
                      '+B++W++++',
                      '+B++W++++',
                      '+BBBW++++',
                      '+++BW++++',
                      '+BBBW++++',
                      '+B++W++++'],
            "answer": {'B': 15, 'W': 36}
        },
	{
            "input": ['+++++++++',
                      '+++++++++',
                      '+++++++++',
                      'WWWWWW+++',
                      '+++++W+++',
                      'BBBBBW+++',
                      'BWWWWW+++',
                      'BBB++++++',
                      '++B++++++'],
            "answer": {'B': 2, 'W': 0}
        },
        {
            "input": ['+++++++++',
                      '+++BBBBBB',
                      'BBBB+++B+',
                      'WWWB+++B+',
                      '++WBBBBB+',
                      '++W++++++',
                      '++WWWWW++',
                      '++++++W++',
                      '++++++W++'],
            "answer": {'B': 18, 'W': 18}
        },
        {
            "input": ['++++W++W+',
                      '++++W++W+',
                      '++++WW+W+',
                      'BBB++W+++',
                      '++B++WWW+',
                      '++BBB++WW',
                      '+B++B++++',
                      '+BBBB++++',
                      '++B++++++'],
            "answer": {'B': 10, 'W': 12}
        },
        {
            "input": ['+++++++',
                      '+++++++',
                      '+++++++',
                      'WWWWW++',
                      'BBBBW++',
                      '+B+BW++',
                      '+++BW++'],
            "answer": {'B': 5, 'W': 29}
        },
        {
            "input": ['+++++++',
                      'BBBBBB+',
                      'WWWWWBB',
                      '+W++W++',
                      '+W++W++',
                      '+WWWW++',
                      '+++++++'],
            "answer": {'B': 8, 'W': 4}
        },
	{
            "input": ['+++++++',
                      '+++++++',
                      '+++++++',
                      '+BBB+++',
                      '+++BBBB',
                      'WWWB+++',
                      '++W++++'],
            "answer": {'B': 0, 'W': 2}
        },
        {
            "input": ['+W+++',
                      '+WWW+',
                      'BBBWW',
                      '++B++',
                      'B+B++'],
            "answer": {'B': 3, 'W': 4}
        },
        {
            "input": ['+++++',
                      'BBBB+',
                      'WWWB+',
                      '++WBB',
                      '+++++'],
            "answer": {'B': 7, 'W': 0}
        },
        {
            "input": ['+++++',
                      'BBWW+',
                      'BBWW+',
                      'BBWW+',
                      '+++++'],
            "answer": {'B': 0, 'W': 0}
        }
    ]
}
