class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        let i = 1;
        for (i; i <= vertex; i++) {
            if (!this.adjacencyList[i]) this.adjacencyList[i] = [];
        }
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);

    }

    readFile() {
        const ko = require('console-read-write');
        let fileContent;
        const fs = require('fs');

        try{

            fileContent = fs.readFileSync('list.txt', 'utf-8');
            g.menu();
        }catch {
            let al = false;
            async function ae() {
                while(!al) {

                    al = await ko.read() === '';
                }

            };
            ae();
            return ko.write("Hata!!!! list.txt bulunamadı!!!!\nProgram ile list.txt aynı konumda/dizinde bulunmalıdır\n Çıkmak için enter tuşuna basınız.");

        }




        let x = 1, y = 0;
        const array = fileContent.split(/\r\n| /);
        let arrayL = Math.sqrt(array.length);
        this.addVertex(arrayL);
        for (let i = 0; i < array.length; i++) {
            if (array[i] == 1) {

                this.addEdge(y + 1, x);

            }
            if ((i + 1) % arrayL == 0) {
                x = 0;
                y++;
            }
            x++;
        }
        return arrayL;
    }

    calcEdge() {
        let counter = 0;
        for (let i = 1; i <= cs; i++) {
            for (let k = 1; k <= this.adjacencyList[i].length; k++) {
                counter++;
            }
        }
        console.log('Kenar sayısı = ',counter);
    }

    calcDegree(node) {
        let x = 0;
        const adjacencyList = this.adjacencyList;
        (function eDegree(vertex) {
            let counter = 0;
            adjacencyList[vertex].forEach(neighbor => {
                counter++;
                if (vertex == neighbor) {

                    counter++;
                    x++;
                }
                ;
            })

            console.log('Çıkış derecesi = ',counter);
        })(node);
        (function exDegree(vertex) {
            let counter = 0;
            for (let i = 1; i <= cs; i++) {
                adjacencyList[i].forEach(neighbor => {

                    if (neighbor == vertex) {
                        counter++;
                    }

                });

            }
            console.log('Giriş derecesi = ',counter + x);
        })(node);
    }

    depthFirst(startNode) {
        let x = false;
        let counter=1;
        const d = {};
        const f = {};
        const result = [];
        const visited = {};
        for (let k = 1; k <= cs; k++) visited[k] = false;
        const adjacencyList = this.adjacencyList;
        for (let i = 1; i <= cs; i++) {
            if (!x && !visited[i]) {
                x = true;
                (function dfs(vertex) {
                    if (!vertex) return null;
                    d[vertex] = counter;
                    counter++;
                    f[vertex] = counter;
                    result.push(vertex);
                    visited[vertex] = true;

                    adjacencyList[vertex].forEach(neighbor => {
                        if (!visited[neighbor]) {

                            dfs(neighbor);

                        }
                        else {

                            counter--;

                        }

                        counter++;
                        f[vertex] = counter;

                    });


                })(startNode);


            } else if (x && !visited[i]) {

                (function dfsa(vertex) {
                    if (!vertex) return null;
                    result.push(vertex);
                    visited[vertex] = true;
                    d[vertex] = counter;
                    counter++;
                    f[vertex] = counter;

                    adjacencyList[vertex].forEach(neighbor => {


                        if (!visited[neighbor]) {
                            dfsa(neighbor);

                        }
                        else{
                            counter--;
                        }

                        counter++;
                        f[vertex] = counter+1;

                    });

                })(i);


            }
        }
        console.log('İşleme sırası = ', f);
        console.log('Ulaşma sırası = ', d);
        console.log('Dolaşma sırası = ', result);


    }


    breadthFirst(startNode) {
        let queue = [startNode];
        let x = false;
        const result = [];
        const visited = {};
        for (let k = 1; k <= cs; k++) visited[k] = false;
        let currentVertex;
        const adjacencyList = this.adjacencyList;
        visited[startNode] = true;
        for (let i = 1; i <= cs; i++) {
            if (!x && !visited[i]) {
                x = true;
                while (queue.length) {
                    currentVertex = queue.shift();
                    result.push(currentVertex);
                    adjacencyList[currentVertex].forEach(neighbor => {
                        if (!visited[neighbor]) {
                            visited[neighbor] = true;
                            queue.push(neighbor);
                        }
                    });

                }
                i=1;


            } else if (x && !visited[i]) {
                visited[i]=true;
                queue = [i];
                while (queue.length) {
                    currentVertex = queue.shift();
                    result.push(currentVertex);
                    adjacencyList[currentVertex].forEach(neighbor => {
                        if (!visited[neighbor]) {
                            visited[neighbor] = true;
                            queue.push(neighbor);
                        }
                    });
                }
            }

        }
        console.log('Bfs dolaşma sırası = ',result)


    }
    menu(){
        const io = require('console-read-write');
        const list = this.adjacencyList;

        async function main() {


            let exit = false;
            while (!exit) {
                io.write('\nMenü: \n Komşuluk listesi için 1 \n Düğüm derecesi için 2 \n Kenar sayısı için 3 \n BreadthFirst araması için 4 \n Depthfirst Araması için 5\n Bir Seçim Yapınız :)\n');
                let expression =await io.read();

                switch (expression) {

                    case '1':
                        io.write(list);
                        break;
                    case '2':
                        io.write('Düğüm Numarası Giriniz = ');
                        let node = await io.read();
                    try{
                        g.calcDegree(node);
                    }catch{

                        console.log("Hatalı düğüm numarası girdiniz!!!!!");

                    }
                        break;
                    case '3':
                        g.calcEdge();
                        break;
                    case '4':
                        io.write('Düğüm Numarası Giriniz = ');
                        let x = await io.read();
                    try{
                        g.breadthFirst(parseInt(x));
                    }catch{

                        console.log("Hatalı düğüm numarası girdiniz!!!!!");


                    }
                        break;
                    case '5':
                        io.write('Düğüm Numarası Giriniz = ');
                        let y = await io.read();
                    try{
                        g.depthFirst(parseInt(y));
                    }catch{

                        console.log("Hatalı düğüm numarası girdiniz!!!!!")

                    }
                        break;
                    default:
                        io.write('Hatalı Giriş!!');
                }
                io.write('Devam etmek için enter tuşuna basınız\nÇıkış için e tuşuna basınız\n ');
                exit = await io.read() === 'e';
                console.clear();

            }

            io.write(' Yine Bekleriz...');

        };
        main();


    }
}
const g = new Graph();
let cs = g.readFile();






















