import { Sorter } from './Sorter';


export class  NumberCollection extends Sorter {

    constructor(public data: number[]){
        super();
    }

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rigthIndex: number): boolean {
        return this.data[leftIndex] > this.data[rigthIndex];
    }

    swap(leftIndex: number, rightIndex: number):void {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}