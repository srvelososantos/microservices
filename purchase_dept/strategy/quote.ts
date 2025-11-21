export interface Item{
    item: string
    qtd: number
    price: number
}

export class Quote{
    public q: Item[] = []

    public enqueue(obj: Item){
        this.q.push(obj)
    }

    public dequeue() : Item | undefined{
        return this.q.shift()
    }

    public size(): number{
        return this.q.length
    }
}