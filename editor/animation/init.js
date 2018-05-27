//Dont change it
//Dont change it
requirejs(['ext_editor_io', 'jquery_190', 'raphael_210'],
    function (extIO, $, TableComponent) {

        const difference = (a1, a2) => a1.filter(v => ! a2.includes(v));
        const intersection = (a1, a2) => a1.filter(v => a2.includes(v));
        const union = (a1, a2) => a1.concat(a2.filter(v=>!a1.includes(v)));
        const clone = a1 => a1.concat([]);

        function solution(board) {

            const [width, height] = [board[0].length, board.length];

            const check_adjacent = (point)=>{
                const [y, x] = [parseInt(point / 10), point % 10];
                let empty_points = [];
                let find_stones = [];

                [[y-1, x], [y+1, x], [y, x-1], [y, x+1]].forEach(co=>{
                    const [ty, tx] = co;
                    if (![-1, height].includes(ty)
                            && ![-1, width].includes(tx)) {
                        if (board[ty].substr(tx, 1) === '+') {
                            empty_points.push(ty*10+tx);
                        } else {
                            find_stones =
                                union(find_stones,
                                    [board[ty].substr(tx, 1)]);
                        }
                    }
                });
                return [empty_points, find_stones];
            };

            const search = (y, x, done_points)=>{
                let next_points = [y*10+x]
                let stone_kinds = [];
                let sub_total = [y*10+x];

                while (next_points.length) {
                    const search_points = clone(next_points);
                    next_points = [];
                    search_points.forEach(p=>{
                        const [points, stones] = check_adjacent(p);
                        stone_kinds = union(stone_kinds, stones);
                        next_points = union(next_points, points);
                    });
                    next_points = difference(next_points, done_points);
                    done_points = union(done_points, next_points);
                    sub_total = union(sub_total, next_points);
                };
                return [stone_kinds, sub_total, done_points];
            };

            const result = {'B': [], 'W': []};
            let done_points = [];
            board.forEach((row, y)=>{
                row.split('').forEach((stone, x)=>{
                    if (stone === '+' && ! done_points.includes(y*10+x)){
                        done_points.push(y*10+x);
                        let edges = [];
                        let area = [];
                        [edges, area, done_points]
                            = search(y, x, done_points);
                        if (edges.length === 1){
                            const s = edges.pop();
                            result[s] = result[s].concat(area);
                        }
                    }
                });
            });
            return result;
        }

        function goGameCanvas(dom, input) {
            const attr = {
                rect: {
                    line: {
                        'stroke': 'orange',
                        'stroke-width': 3,
                    },
                    W: {
                        'stroke-width': 0,
                        'fill': 'white',
                    },
                    B: {
                        'stroke-width': 0,
                        'fill': '#8FC7ED',
                        'fill': '#294270',
                    }
                },
                stone: {
                    W: {
                        'fill': 'white',
                        'stroke': '#294270',
                        'stroke-width': 1,
                    },
                    B: {
                        'fill': '#294270',
                        'stroke': 'white',
                        'stroke-width': 1,

                    },
                }
            };
            const [w, h] = [input[0].length, input.length];
            const SIZE = 20; 
            const paper = Raphael(dom, w*SIZE, h*SIZE, 0, 0);
            const os = SIZE/2;
            const result = solution(input);

            // paint territory
            input.forEach((row, i)=>{
                row.split('').forEach((s,j)=>{
                    if (s === '+'){
                        if (result.W.includes(i*10+j)){
                            console.log('W', i, j);
                            const attr_square = attr.rect.W;
                            paper.rect(
                                SIZE*j-os,
                                SIZE*i-os,
                                SIZE+os*2, SIZE+os*2).attr(attr_square);
                        }

                        if (result.B.includes(i*10+j)){
                            console.log('B', i, j);
                            const attr_square = attr.rect.B;
                            paper.rect(
                                SIZE*j-os,
                                SIZE*i-os,
                                SIZE+os*2, SIZE+os*2).attr(attr_square);
                        }
                    }
                });
            });

            // draw board
            for (let i=0; i < h-1; i += 1){
                for (let j=0; j < w-1; j += 1){
                    paper.rect(
                        SIZE*i+os,
                        SIZE*j+os,
                        SIZE, SIZE).attr(attr.rect.line);
                }
            }

            // set stone
            console.log(result);
            input.forEach((row, i)=>{
                row.split('').forEach((s,j)=>{
                    if (s !== '+'){
                        paper.circle(
                            j*SIZE+os,
                            i*SIZE+os,
                            SIZE/2-1).attr(attr.stone[s]);
                    }
                });
            });
        }
        
        var $tryit;
        var io = new extIO({
            multipleArguments: false,
            functions: {
                python: 'territory',
                js: 'territory'
            },
            animation: function($expl, data){
                goGameCanvas(
                    $expl[0],
                    data.in
                );
            }
        });
        io.start();
    }
);
