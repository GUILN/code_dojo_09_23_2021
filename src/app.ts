
const notNull = (p: any): boolean => p !== null && p !== undefined 

const canIHazAddends = (arr: Array<number>, k: number): boolean => {
    let result = false;
    
    if(notNull(arr) && notNull(k)) {
        let lastValue: number = 0;
        arr.forEach((value, index, arr) => {
           if(lastValue) {
            if((value + lastValue) == k)
                result = true;
           }
           
           lastValue = value;
        });
    }

    
    return result;
}

export default canIHazAddends;
