console.log("hello")
tate=4
yoko=5
    const send=(map1)=>{
        console.log("102"+map1)
        let map3=[]
        //白しかないマップを作る
        for(let u=0;u<tate;u++){
            b_map=[]
            for(let i=0;i<yoko;i++){            
                b_map.push(10)
            }
            map3.push(b_map)
        }

        let wct=0//白い列をカウントするために使う
        let memo=[]//全部白い列をメモ
        let indexb=0

        for(let u=0;u<yoko;u++){
            wct=0
            for(let i=0;i<tate;i++){
                if(map1[i][u]==10){
                    wct+=1
                    console.log("wct="+wct)
                }
                if(wct==tate){
                    console.log("aaa")
                    memo.push(u)
                }
            }
        }
        console.log("memo="+memo)
        //mome=[0,2]
        let memoindex=0
        
        //実際に左に寄せる
        for(let r=0;r<yoko;r++){
            if(r==memo[memoindex]){
                memoindex+=1
            }
            else{
                for(let g=0;g<tate;g++){
                    map3[g][indexb]=map1[g][r]
                }
                indexb+=1
            }
        }
        console.log("map3")
        console.log(map3)
        return map3
    }
    map1=[[1,10,0,10,1],
        [2,10,1,10,1],
        [10,10,1,10,1],
        [1,10,1,10,2]]
    map3=send(map1)