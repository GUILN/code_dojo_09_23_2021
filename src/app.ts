
const notNull = (p: any): boolean => p !== null && p !== undefined 

const canIHazAddends = (arr: Array<number>, k: number): boolean => {
    let result = false;
    
    if(notNull(arr) && notNull(k)) {

        for (let i = 0; i < arr.length; i++) { 

            for (let j = i + 1; j < arr.length; j++) {
                if((arr[i] + arr[j]) == k) {
                    return true;
                }

            }
        }
    }
    
    return result;
}

export default canIHazAddends;
