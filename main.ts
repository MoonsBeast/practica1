const arr = [[1, [2, ["3", 4]]],"5"]

function normalize<T>(arr: Array<T>) : number[]{

    return arr.flatMap(elem => { 

        if (typeof elem === "string") return parseInt(elem) 
        else if (typeof elem === "number") return elem
        else {
            return normalize(elem as T[])
        }

    })

}

export function solve<T>(arr: Array<T>) : number[]{

    const normalized = normalize(arr)
    
    return normalized.map((_,index) => {

        return normalized.reduce((acc,elem,indexR: number) => { return indexR !== index ? (acc*elem) : acc},1)

    })

}

console.log(solve(arr))