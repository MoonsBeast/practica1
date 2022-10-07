const arr = [[1, [2, ["3", 4]]],"5"]

function normalize<T>(arr: Array<T>) : (number | undefined)[]{

    const flatted = arr.flat(Number.MAX_VALUE) as (number | string)[]
    return flatted.map(elem => { 

        if (typeof elem === "string") return parseInt(elem) 
        else if (typeof elem === "number") return elem

    })

}

export function solve<T>(arr: Array<T>): (number | undefined)[]{

    const normalized = normalize(arr)
    
    return normalized.map((_,index) => {

        return normalized.reduce((acc:any,elem:any,indexR: number) => { return indexR !== index ? (acc*elem) : acc},1)

    })

}

console.log(solve(arr))