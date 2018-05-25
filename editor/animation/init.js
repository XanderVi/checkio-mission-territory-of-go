//Dont change it
//Dont change it
requirejs(['ext_editor_io', 'jquery_190', 'raphael_210'],
    function (extIO, $, TableComponent) {
        function goGameCanvas(dom, input) {
            const attr = {
                rect: {
                    go: {
                        'stroke': 'orange',
                        'stroke-width': 3,
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
                        'stroke': '#294270',
                        'stroke-width': 1,

                    },
                }
            };
            const [w, h] = [input[0].length, input.length];
            const SIZE = 20; 
            const paper = Raphael(dom, w*SIZE, h*SIZE, 0, 0);
            const os = SIZE/2;

            // draw board
            for (let i=0; i < h-1; i += 1){
                for (let j=0; j < w-1; j += 1){
                    paper.rect(
                        SIZE*i+os,
                        SIZE*j+os,
                        SIZE, SIZE).attr(attr.rect.go);
                }
            }
            // set stone
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
