const arr = [[1, [2, ["3", 4]]],"5"]

function normalize(arr: Array<any>) : (number | undefined)[]{
    
    const flatted = arr.flat(Number.MAX_VALUE)
    return flatted.map(elem => { 

        if (typeof elem === "string") return parseInt(elem) 
        else if (typeof elem === "number") return elem

    })

}

export function solve(arr: Array<any>): (number | undefined)[]{

    if((typeof arr).includes("boolean")) throw "Boolean not accepted"

    const normalized = normalize(arr)
    
    return normalized.map((_,index) => {

        return normalized.reduce((acc:any,elem:any,indexR: number) => { return indexR !== index ? (acc*elem) : acc},1)

    })

}

if(import.meta.main){
    console.log(solve(arr))
}
